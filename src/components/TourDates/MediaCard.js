import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
    backgroundColor: "#e7e7e7"
  }
});

const image =
  "https://matchbin-assets.s3.amazonaws.com/public/sites/351/assets/K2WC_web_okyo_ska_paradise_orchestra_2x.jpg";

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
          <Typography variant="body2" color="textSecondary" component="p">
            {place.address1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.address2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.tel}
          </Typography>
        </CardContent>
    </Card>
  );
}