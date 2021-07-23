import Biography from './Biography';
import MemberCard from './MemberCard';
import BandData from './../Data/BandData';
import { Container, Grid, Box } from '@material-ui/core';
import { Zoom } from 'react-awesome-reveal';
import bandLogo from "../../resources/images/logo.svg"

const BandInfo = () => {
	return (
		<div style={{backgroundColor: '#ffc105'}}
     id="band-info">
			<Container style={{
        background: `linear-gradient(rgba(255, 193, 7, 0.95), rgba(255, 193, 7,0.95)),
        url(${bandLogo}) center`,
     }}>
				<Biography />
        <Box >

				<Grid container spacing={2} >
					{BandData.band.map(member => {
						return (
							<Grid item xs={12} sm={6} md={4} key={member.name}>
								<Zoom cascade>
									<MemberCard member={member}  />
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

export default BandInfo;
