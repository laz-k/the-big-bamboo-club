import { Container, Grid, Box } from '@material-ui/core';
import ContactForm from './ContactForm';
import { makeStyles } from '@material-ui/styles';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
	root: {
		paddingTop: '50px',
		paddingBottom: '50px',
	},
  title:{
    fontSize: "50px",
		fontWeight: "500",
		marginBottom: "50px",
		display:"flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#FAFAFA"
  },
	icon:{
		fontSize: "60px",
		marginRight: "20px",
		color: "#FAFAFA"
	}
});

const Contact = () => {
	const classes = useStyles();

	return (
		<div id="contact" className={classes.root}>
			<Container>
				<Grid justifyContent="center" align="center">
				<Box className={classes.title} alignContent="center">
				<EmailIcon className={classes.icon} />
				Contact Us
				</Box>
				
					<ContactForm />
				</Grid>
			</Container>
		</div>
	);
};

export default Contact;
