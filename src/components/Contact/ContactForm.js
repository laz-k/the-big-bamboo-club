import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import { TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
	btn: {
		width: '30%',
		backgroundColor: 'white',
	},
	root: {
		backgroundColor: 'white',
	},
});

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({});


const ContactForm = () => {

	const classes = useStyles()

	return (
		<Formik
			initialValues={{
				...INITIAL_FORM_STATE,
			}}
			validationSchema={FORM_VALIDATION}
			onSubmit={values => {
				console.log(values);
			}}
		>
			<Form>
				<Grid container justifyContent="center" spacing={4}>
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
						<Button className={classes.btn} size="large" variant="outlined">
							Submit
						</Button>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default ContactForm;
