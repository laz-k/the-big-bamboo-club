import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#BF360C',
	},
	title: {
		color: '#EEEEEE',
    marginBottom: '20px'
	},
  text:{
		color: '#EEEEEE',
    paddingBottom: '50px'
  }
});

const Tickets = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl" id="tickets" className={classes.root}>
			<Typography variant="h3">
				<Box pt={5} textAlign="center" fontWeight={700} className={classes.title}>
					Ticket Information
				</Box>
			</Typography>
      <Typography variant="h5" align="center" className={classes.text}  >
        For ticket prices and purchases please contact the venue hosting the event. 
      </Typography>
		</Container>
	);
};

export default Tickets;
