import BandInformation from './BandInformation';
import MemberCard from './MemberCard';
import BandImages from './BandImages';
import { Container, Grid, Box } from '@material-ui/core';
import { Zoom } from 'react-awesome-reveal';
import bandLogo from "../../resources/images/logo.svg"

const Information = () => {
	return (
		<div style={{backgroundColor: 'yellow'}}
     id="band-info">
			<Container style={{
        background: `linear-gradient(rgba(255,255,0,0.93), rgba(255,255,0,0.93)),
        url(${bandLogo}) center`,
        // zIndex: -10
     }}>
				<BandInformation />
        <Box >

				<Grid container spacing={0} >
					{BandImages.band.map(member => {
						return (
							<Grid item xs={12} sm={6} md={4} >
								<Zoom cascade>
									<MemberCard member={member} key={member.name} />
								</Zoom>
							</Grid>
						);
					})}
				</Grid>
        </Box>
			</Container>
		</div>
	);
};

export default Information;
