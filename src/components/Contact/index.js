import { Container, Grid, Typography } from '@material-ui/core';
import ContactForm from './ContactForm';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#FFC107',
		paddingTop: '50px',
		paddingBottom: '50px',
	},
  title:{
    marginBottom: "50px"
  }
});

const Contact = () => {
	const classes = useStyles();

	return (
		<div id="contact" className={classes.root}>
			<Container>
				<Grid justifyContent="center" align="center">
					<Typography  className={classes.title} variant="h3">Contact Us</Typography>
					<ContactForm />
				</Grid>
			</Container>
		</div>
	);
};

export default Contact;
