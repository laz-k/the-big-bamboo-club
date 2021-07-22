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
    borderBottom: "1px solid white"
	},
	content: {
    backgroundColor: "#000000"
  },
	text:{
		color: "white",
		textAlign: "center"
	}
});

const MemberCard = ({ member }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={2}>
			<CardMedia className={classes.media} image={member.image} title={member.name}></CardMedia>
			<CardContent className={classes.content}>
				<Typography gutterBottom variant="h6" component="p" className={classes.text} >
					{member.name} 
				</Typography>
				<Typography gutterBottom variant="body1" component="p" className={classes.text} >
					{member.instrument}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MemberCard;
