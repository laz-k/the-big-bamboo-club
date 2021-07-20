import React from 'react';
import { Drawer, Link, List, ListItem, makeStyles } from '@material-ui/core';

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
					<ListItem button component={Link} href="/" >Home</ListItem>
					<ListItem button component={Link} href="#tour-dates" >Tour Dates</ListItem>
					<ListItem button component={Link} href="#band-info" >Band Info</ListItem>
					<ListItem button component={Link} href="#tickets" >Tickets</ListItem>
					<ListItem button component={Link} href="#contact" >Contact</ListItem>
				</List>
			</Drawer>
	
	);
};

export default SideDrawer;
