import React from 'react';
import { Drawer, List, ListItem, makeStyles } from '@material-ui/core';

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
					<ListItem button onClick={() => alert("click")} >The Big Bamboo</ListItem>
					<ListItem button onClick={() => alert("click")} >Highlights</ListItem>
					<ListItem button onClick={() => alert("click")} >Tickets</ListItem>
					<ListItem button onClick={() => alert("click")} >Find us</ListItem>
				</List>
			</Drawer>
	
	);
};

export default SideDrawer;
