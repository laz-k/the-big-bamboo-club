import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		marginBottom: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	media: {
		height: "450px",
	},
});

const MemberCard = ({ member }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={2}>
			<CardMedia className={classes.media} image={member.image} title={member.name}></CardMedia>
			<CardContent>
				<Typography gutterBottom variant="body1" component="p">
					{member.name}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MemberCard;
