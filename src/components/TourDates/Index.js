import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import { Container, Typography, Box, makeStyles } from '@material-ui/core';
import { Zoom } from 'react-awesome-reveal';
import TourData from './../Data/TourData';

const useStyles = makeStyles({
	root:{
		marginBottom: "50px"
	}
})

const TourDates = () => {

	const classes = useStyles()

	return (
		<Container maxWidth="lg" id="tour-dates" className={classes.root} >
			<Typography variant="h2">
				<Box pt={5} textAlign="center" fontWeight={700}>
					Tour Dates
				</Box>
			</Typography>
			<Grid container spacing={0}>
				{TourData.location.map((place, index) => {
					return (
						<Grid item xs={12} sm={6} md={4}>
							<Zoom cascade>
								<MediaCard place={place} />
							</Zoom>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default TourDates;
