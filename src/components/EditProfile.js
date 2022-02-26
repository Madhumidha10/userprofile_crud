import React, { useState,useContext,useEffect } from "react";
import { API } from './UserProvider';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { userContext } from './UserProvider'
import {useHistory,useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              
export const userValidationSchema = yup.object({
  name: yup
    .string()
    .required("why not fill your name? "),
  email: yup
  .string().matches(re, 'Email is not valid')
    .required("Why not fill your email? "), 
  mobile: yup
 .string().matches(phoneRegExp, 'Phone number is not valid')
 .required("Why not fill your mobile? ")
 .min(10, "to short")
  .max(10, "to long"),
  designation:yup
    .string()
    .required("why not fill your designation?"),
  address:yup
    .string()
    .required("why not fill your Address?"),
  img:yup
  .string()
  .required("Why not fill your profile url? "),
 about:yup
 .string()
 .required("Why not fill your profile summary? ")
 .min(100),
});

export default function EditProfile()
{ 
  const [user,setUser]=useState(null);
    
    const {id}=useParams();

    useEffect(() => {
   
      fetch(`${API}/${id}`, {method: "GET",}) // promise
       .then((data) => data.json()) // Response object
      .then((usr) => setUser(usr))}, []);
     
    return  <div  style={{width:"500px",margin:"10px auto"}} >
<div>{user ? <EditUserProfileForm user={user} /> : <img 
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/712e6c8c-2488-454c-977c-9b77695b282f/d7s1sqj-f6c07feb-3613-47c3-8d4f-219681110c53.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83MTJlNmM4Yy0yNDg4LTQ1NGMtOTc3Yy05Yjc3Njk1YjI4MmYvZDdzMXNxai1mNmMwN2ZlYi0zNjEzLTQ3YzMtOGQ0Zi0yMTk2ODExMTBjNTMuZ2lmIn1dXX0.9wrdWP4PL00jEgkqP6D-p6LmP0pfRwxkUSHPKBNWbn4"
      alt="loading.."  />}</div>
</div>
}
function EditUserProfileForm({user})
{
  const history=useHistory();
  const formik = useFormik({
    initialValues: { name: user.name, email: user.email,mobile:user.mobile,designation:user.designation,address:user.address,img:user.img,about:user.about },
    validationSchema: userValidationSchema,
    onSubmit: (updatingUser) => {
       editUser(updatingUser);
   
  
         
    },
  });

  const editUser=(updatingUser)=>{
    fetch(`${API}/${user.id}`, 
    {method: "PUT",body: JSON.stringify(updatingUser),
    headers: {"Content-Type": "application/json",},})
    .then(() => history.push("/users"));
  
  }
  return(    <form onSubmit={formik.handleSubmit} >
      
             <List>

         
    <Typography component="legend" variant="h4" >Edit Profile</Typography>
    <ListItem>
    <TextField id="name" name="name" label="Enter your name..." variant="outlined" sx={{marginRight:"auto"}}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} 
    error={formik.touched.name && formik.errors.name} helperText={ formik.errors.name} />
     <TextField id="designation" name="designation" label="Enter your designation..." variant="outlined" 
     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.designation} 
     error={formik.touched.designation && formik.errors.designation} helperText={ formik.errors.designation} />

      
 </ListItem>
 <ListItem>
 <TextField id="email"  name="email" label="Enter your Email..." variant="outlined" sx={{marginRight:"auto"}}
    error={formik.touched.email && formik.errors.email} helperText={ formik.errors.email}
      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />

 <TextField id="mobile" name="mobile" label="Enter your mobile number..." variant="outlined" 
    error={formik.touched.mobile && formik.errors.mobile} helperText={ formik.errors.mobile}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile}
     />
      </ListItem>

    <TextField id="address" name="address" label="Enter your address..." variant="outlined" fullWidth sx={{ m: 1 }}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
    error={formik.touched.address && formik.errors.address} helperText={ formik.errors.address}  />



 

 <ListItem>
<TextField id="img"  name="img" label="Enter your profile url..." variant="outlined" fullWidth sx={{ m: 1 }}
    error={formik.touched.img && formik.errors.img} helperText={ formik.errors.img}
      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.img}  />
<Avatar alt="Profile Picture" src={formik.values.img}  sx={{ width:150, height: 150,margin:"10px auto"}} variant="rounded"/>
</ListItem>
 
<TextField id="about"  name="about" label="Enter your profile summary..." variant="outlined" fullWidth sx={{ m: 1 }}
    error={formik.touched.about && formik.errors.about} helperText={ formik.errors.about}
      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.about} multiline  rows={5} />
    
  <Button type="submit" variant="contained" >Update</Button>
 


  </List>

{/* </Card>   */}
</form>);
}