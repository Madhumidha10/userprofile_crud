import React, { useState,useContext } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { userContext } from './UserProvider'
import {useHistory,useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function UserProfile()
{
    const history=useHistory();
    const [userList, setUserList] = useContext(userContext);
   
    const {id}=useParams();
    return <div>
    <Card sx={{ maxWidth: 550,margin:"50px auto",bgcolor:'navy',color:"white"}} >

              
    <Typography gutterBottom variant="h5" component="div" >{userList[id].name}
</Typography>
<List sx={{ maxWidth: 600, bgcolor:'#2191d4',margin:"10px auto" }}   >

 <ListItem>
 <ListItemText primary="Email" secondary={userList[id].email} secondaryTypographyProps={{ color:"white"}}  />
 <ListItemText primary="Contact" secondary={userList[id].mobile} secondaryTypographyProps={{ color:"white"}} />

 <Avatar alt="Profile Picture" src={userList[id].img}  sx={{ width:150, height: 150,margin:"10px auto"}} variant="rounded"/>
 </ListItem>
 <ListItem>
 <ListItemText primary="Role" secondary={userList[id].designation} secondaryTypographyProps={{ color:"white"}} />
 <ListItemText primary="Address" secondary={userList[id].address} secondaryTypographyProps={{ color:"white"}}/>
</ListItem>
 <ListItem>
 
 </ListItem>
 <ListItem>

 </ListItem>
 <ListItem>
 <ListItemText primary="Summary" secondary={userList[id].about} secondaryTypographyProps={{ color:"white"}} />
 </ListItem>
 
</List>



</Card>  
</div>
}