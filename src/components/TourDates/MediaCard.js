import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
    height: 240
  },
});

const image =
  "https://matchbin-assets.s3.amazonaws.com/public/sites/351/assets/K2WC_web_okyo_ska_paradise_orchestra_2x.jpg";

export default function MediaCard({ title, date, address, address1, address2 }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2} >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title}
          </Typography>
          <Typography gutterBottom>{date}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {address1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {address2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}