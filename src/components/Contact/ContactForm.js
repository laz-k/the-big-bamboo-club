import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
	btn: {
		width: '30%',
    backgroundColor: "white"
	},
  root:{
    backgroundColor: "white"
  }
});

const ContactForm = () => {
	const classes = useStyles();

	return (
		<Formik>
			<Form>
				<Grid container spacing={4} justifyContent="center" >
					<Grid item xs={12} md={4}>
							<TextField className={classes.root} fullWidth id="outlined-basic" label="First Name" variant="outlined" />
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField className={classes.root} fullWidth label="Last Name" variant="outlined" />
					</Grid>
					<Grid item xs={12} md={8}>
						<TextField className={classes.root} fullWidth label="email" variant="outlined" />
					</Grid>
					<Grid item xs={12} md={8}>
						<TextField className={classes.root} fullWidth label="message" multiline rows={10} variant="outlined" />
					</Grid>
					<Grid item xs={12} md={8}>
            <Button className={classes.btn}  size="large" variant="outlined" >Submit</Button>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default ContactForm;
