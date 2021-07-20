// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';

const BandInformation = () => {
	return (
		<Container>
    <Typography variant="h2" align="center" >
    <Box pt={8} fontWeight="700">
      Tokyo Ska Paradise Orchestra
    </Box>
    </Typography>
			<Typography variant="h2" align="center" fontWeight={500}>
				<Box pb={2}letterSpacing={5} fontFamily="Londrina Solid">
					30 Years Anniversary Tour
				</Box>
			</Typography>
			<Typography variant="body1">
				Based on Jamaican-born ska music, Tokyo Ska Paradise, Japan’s ska pride to the world, takes in all sorts of
				music with unique interpretations and has established their own style of sound that they call “Tokyo Ska”.
				<br></br> The band made their debut in 1989 with their eponymous album (so-called “the yellow vinyl”). After
				going through a number of personnel changes, the current lineup consists of nine members.<br></br>
				Now, racing through their 30th debut anniversary year, Tokyo Ska Paradise continues to expand the paradise of
				“Tokyo Ska” under the mantra of “NO BORDER” and running the forefront of the music scene.
			</Typography>
		</Container>
	);
};

export default BandInformation;
