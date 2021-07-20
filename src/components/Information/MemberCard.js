import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BandImages from './BandImages';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginTop: 32,
		marginBottom: 32,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	media: {
		height: 500,
	},
});

const MemberCard = () => {
	const classes = useStyles();

	return (
		<Container>
    <Grid container spacing={3}>
			{BandImages.band.map((member) => {
				return (
          <Grid item xs={12} sm={6} md={4}> 
					<Card className={classes.root} elevation={2} key={member.name} >
							<CardMedia className={classes.media} image={member.image} title={member.name}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  {member.name}
                </Typography>
              </CardContent>
					</Card>
          </Grid>
				);
			})}
    </Grid>
		</Container>
	);
};

export default MemberCard;
