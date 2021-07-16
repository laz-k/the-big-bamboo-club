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
					<ListItem button component={Link} href="#information" >Information</ListItem>
					<ListItem button component={Link} href="#highlights" >Highlights</ListItem>
					<ListItem button component={Link} href="#tickets" >Tickets</ListItem>
					<ListItem button component={Link} href="#find-us" >Find us</ListItem>
				</List>
			</Drawer>
	
	);
};

export default SideDrawer;
