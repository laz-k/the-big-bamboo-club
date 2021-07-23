import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import image from "./../../resources/images/slide-2.jpeg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 240,
    borderBottom: "2px solid black"
  },
  content: {
    backgroundColor: "#EEEEEE"
  },
  btnGrid:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  btn:{
    backgroundColor: '#FFC107',
    color: '#212121',
    "&:hover":{
      backgroundColor: '#FB8C00'
    }
  }
});



export default function MediaCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2} >
        <CardMedia className={classes.media} image={image} title="" />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h5">
            {place.city}
          </Typography>
          <Typography gutterBottom>{place.date}</Typography>
          <Grid container> 
          <Grid item xs={9} >

          <Typography variant="body2" color="textSecondary" component="p">
            {place.address1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.address2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.tel}
          </Typography>
          </Grid>
          <Grid item xs={3} className={classes.btnGrid}  >
          <Button className={classes.btn} variant="outlined" size='small'>Contact</Button>
          </Grid>
          </Grid>
        </CardContent>

    </Card>
  );
}