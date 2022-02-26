import React, { useState,useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { userContext } from './UserProvider'
import {useHistory,useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {API} from './UserProvider'

export default function UserProfile()
{
    const history=useHistory();
    const { id } = useParams();
    const [user,setUser]=useState(null);
   
    useEffect(() => {
     
      fetch(`${API}/${id}`, {method: "GET",}) // promise
       .then((data) => data.json()) // Response object
      .then((usr) => setUser(usr))}, []);

    return <div  style={{width:"500px",margin:"100px auto"}} >
    <div>{user ?  <ProfileView user={user} /> : <img 
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/712e6c8c-2488-454c-977c-9b77695b282f/d7s1sqj-f6c07feb-3613-47c3-8d4f-219681110c53.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83MTJlNmM4Yy0yNDg4LTQ1NGMtOTc3Yy05Yjc3Njk1YjI4MmYvZDdzMXNxai1mNmMwN2ZlYi0zNjEzLTQ3YzMtOGQ0Zi0yMTk2ODExMTBjNTMuZ2lmIn1dXX0.9wrdWP4PL00jEgkqP6D-p6LmP0pfRwxkUSHPKBNWbn4"
          alt="loading.."  />}</div>
    </div>
}
function ProfileView({user})
{
    return  <Card sx={{ maxWidth: 550,margin:"50px auto",bgcolor:'navy',color:"white"}} >

             
    <Typography gutterBottom variant="h5" component="div" >{user.name}
</Typography>
<List sx={{ maxWidth: 600, bgcolor:'#2191d4',margin:"10px auto" }}   >

 <ListItem>
 <ListItemText primary="Email" secondary={user.email} secondaryTypographyProps={{ color:"white"}}  />
 <ListItemText primary="Contact" secondary={user.mobile} secondaryTypographyProps={{ color:"white"}} />

 <Avatar alt="Profile Picture" src={user.img}  sx={{ width:150, height: 150,margin:"10px auto"}} variant="rounded"/>
 </ListItem>
 <ListItem>
 <ListItemText primary="Role" secondary={user.designation} secondaryTypographyProps={{ color:"white"}} />
 <ListItemText primary="Address" secondary={user.address} secondaryTypographyProps={{ color:"white"}}/>
</ListItem>
 <ListItem>
 
 </ListItem>
 <ListItem>

 </ListItem>
 <ListItem>
 <ListItemText primary="Summary" secondary={user.about} secondaryTypographyProps={{ color:"white"}} />
 </ListItem>
 
</List>



</Card>  
}