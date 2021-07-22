import { useState, useEffect, useCallback } from 'react';
import { Fade } from 'react-awesome-reveal';

const EventDate = () => {
	const [time, setTime] = useState({
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
	});

	const renderDateItems = (time, value) => {
		return (
			<div className="countdown-item">
				<div className="countdown-time">{time}</div>
				<div className="countdown-tag">{value}</div>
			</div>
		);
	};

	const getEventTime = useCallback(date => {
		const eventDate = Date.parse(date);
		const today = Date.parse(new Date());
		const timeToEvent = eventDate - today;

		if (timeToEvent < 0) {
			console.log('Date passed');
		} else {
			const seconds = Math.floor((timeToEvent / 1000) % 60);
			const minutes = Math.floor((timeToEvent / 1000 / 60) % 60);
			const hours = Math.floor((timeToEvent / (1000 * 60 * 60)) % 24);
			const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));

			setTime({
				days,
				hours,
				minutes,
				seconds,
			});
		}
	}, []);

	useEffect(() => {
		setInterval(() => getEventTime('Dec, 15, 2021, 21:00:00'), 1000);
	}, [getEventTime]);

	return (
		<Fade delay={1000}>
			<div className="countdown-wrapper">
				<div className="countdown-top"><span className="countdown-subtitle">Presenting</span>TOKYO SKA PARADISE ORCHESTRA</div>
				<div className="countdown-bottom">
					{renderDateItems(time.days < 10 ? `0${time.days}` : time.days, 'Days')}
					{renderDateItems(time.hours < 10 ? `0${time.hours}` : time.hours, 'Hrs')}
					{renderDateItems(time.minutes < 10 ? `0${time.minutes}` : time.minutes , 'Min')}
					{renderDateItems(time.seconds < 10 ? `0${time.seconds}` : time.seconds, 'Sec')}
				</div>
			</div>
		</Fade>
	);
};

export default EventDate;
