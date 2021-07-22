import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Container } from '@material-ui/core';
import TextField from './TextField';
import SelectCountry from './SelectCountry';
import countries from './../Data/countries.json';

const useStyles = makeStyles({
	btn: {
		width: '30%',
		backgroundColor: '#FAFAFA',
    "&:hover":{
      backgroundColor: '#E0E0E0'
    }
	},
});

const INITIAL_FORM_STATE = {
	firstName: '',
	lastName: '',
	email: '',
	addressLine1: '',
	addressLine2: '',
	city: '',
  postCode: "",
	country: '',
};

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	addressLine1: Yup.string().required('Required'),
	addressLine2: Yup.string(),
	city: Yup.string().required('Required'),
	postCode: Yup.string().required('Required'),
	country: Yup.string().required('Required'),
});

const ContactForm = () => {
	const classes = useStyles();

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
				<Container maxWidth="md">
					<Grid container justifyContent="center" spacing={2}>
						<Grid item xs={12} md={5}>
							<TextField name="firstName" label="First Name" />
						</Grid>
						<Grid item xs={12} md={5}>
							<TextField name="lastName" label="Last Name" />
						</Grid>
						<Grid item xs={12} md={10}>
							<TextField name="email" label="email" />
						</Grid>
						<Grid item xs={12} md={10}>
							<TextField name="addressLine1" label="Address Line 1" />
						</Grid>
						<Grid item xs={12} md={10}>
							<TextField name="addressLine2" label="Address Line 2" />
						</Grid>

						<Grid item xs={12} md={5}>
							<TextField name="city" label="City" />
						</Grid>
						<Grid item xs={12} md={5}>
							<TextField name="city" label="Post Code" />
						</Grid>
						<Grid item xs={12} md={10}>
							<SelectCountry name="country" label="Country" options={countries} />
						</Grid>
						<Grid item xs={12} md={8}>
							<Button className={classes.btn} size="large" variant="outlined">
								Submit
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Form>
		</Formik>
	);
};

export default ContactForm;
