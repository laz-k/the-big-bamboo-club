import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import { Container, Typography,Box } from '@material-ui/core';
import { Zoom } from 'react-awesome-reveal';

const Information = () => {
	return (
		<Container maxWidth="lg" id="tour-dates">
			<Typography variant="h2" >
				<Box pt={5} textAlign="center" fontWeight={700} >
					Tour Dates
				</Box>
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={500}>
						<MediaCard
							title="Rome - Italy"
							date="Saturday, 11 December @ Casa Club "
							address="Via Longhena 16, "
							address1="Gerano Roma, 00025"
							address2="Tel.: 0336 1303346"
						/>
					</Zoom>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={1000}>
						<MediaCard
							title="Milan - Italy"
							date="Sunday, 12 December @ Rosa Nero"
							address="Via San Cosmo fuori Porta Nolana 141, "
							address1="Milano, 20122"
							address2="Tel.: 0315 0193480"
						/>
					</Zoom>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={1500}>
						<MediaCard
							title="Munich - Germany"
							date="Friday, 17 December @ Die Stern"
							address="Rosenstrasse 24, "
							address1="Muenchen, 91619"
							address2="Tel.: 089 33 11 85"
						/>
					</Zoom>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={2000}>
						<MediaCard
							title="Berlin - Germany"
							date="Saturday, 18 December @ Die Stern"
							address="Brandenburgische Straße 18, "
							address1="Berlin Kreuzberg, 10963"
							address2="Tel.: 030 38 48 23"
						/>
					</Zoom>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={2500}>
						<MediaCard
							title="Dusseldorf - Germany"
							date="Sunday, 19 December @ Die Stern"
							address="Boxhagener Str. 98, "
							address1="Duesseldorf, 40474"
							address2="Tel.: 0211 68 64 76"
						/>
					</Zoom>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Zoom delay={3000}>
						<MediaCard
							title="Amsterdam - Netherlands"
							date="Sunday, 11 December @ Die Stern"
							address="Oostenburgerpark 45, "
							address1="Amsterdam, 1018 HT"
							address2="Tel.: 06 32180849"
						/>
					</Zoom>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Information;
