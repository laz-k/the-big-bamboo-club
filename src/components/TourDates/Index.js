import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import { Container, Typography,Box } from '@material-ui/core';
import { Zoom } from 'react-awesome-reveal';
import TourData from './TourData'

const Information = () => {

	return (
		<Container maxWidth="lg" id="tour-dates">
			<Typography variant="h2" >
				<Box pt={5} textAlign="center" fontWeight={700} >
					Tour Dates
				</Box>
			</Typography>
			<Grid container spacing={4}>
			{TourData.location.map((place, index) => {
				return (
				<Grid item xs={12} sm={6} md={4}>
					<Zoom cascade>
						<MediaCard
							place={place}
							key={index}
						/>
					</Zoom>
				</Grid>
				)
			})}
			</Grid>
		</Container>
	);
};

export default Information;
