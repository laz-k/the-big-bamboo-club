import React from 'react';
import { Drawer, Link, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const SideDrawer = props => {
	const useStyles = makeStyles({
		paper: {
			background: '#ffa800',
			color: 'white',
		},
	});
	const classes = useStyles();

  const links = [
    {name: 'Home', link: '/'},
    {name: 'Band Info', link: '#band-info'},
    {name: 'Tour Dates', link: '#tour-dates'},
    {name: 'Tickets', link: '#tickets'},
    {name: 'Contact', link: '#contact'}
  ]


	return (

		<Drawer 
    anchor='right' 
    classes={{ paper: classes.paper }} 
    open={props.open} 
    onClose={() => props.onClose(false)}>

			<List component="nav">

      {links.map((link,index)=> {
        return(
          <ListItem button onClick={() => props.onClose(false)} component={Link} href={link.link} key={index} >
					<ListItemText primary={link.name} />
				</ListItem>
        )
      })}
			</List>
		</Drawer>
	);
};

export default SideDrawer;
