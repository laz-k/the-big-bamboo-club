import React from 'react';
import { Drawer, Link, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const SideDrawer = props => {

  const useStyles = makeStyles({
    paper: {
      background: "#ffa800",
      color: "white"
    }
  })
  const classes = useStyles()
	return (
		
			<Drawer anchor="right"
      classes={{paper: classes.paper}}
      open={props.open}
      onClose={() => props.onClose(false)}
      >
				<List component="nav">
					<ListItem button component={Link} href="/">
          <ListItemText primary={"Home"} />
          </ListItem>
					<ListItem button onClick={() => props.onClick(false)}  component={Link} href="#band-info" >
            <ListItemText primary={"Band Info"} />
          </ListItem>
					<ListItem button onClick={() => props.onClick(false)} component={Link} href="#tour-dates" >
            <ListItemText primary={"Tour Dates"} />
          </ListItem>
					<ListItem button onClick={() => props.onClick(false)} component={Link} href="#tickets" >
            <ListItemText primary={"Tickets"} />
          </ListItem>
					<ListItem button onClick={() => props.onClick(false)} component={Link} href="#contact" >
            <ListItemText primary={"Contact"} />
          </ListItem>
				</List>
			</Drawer>
	
	);
};

export default SideDrawer;
