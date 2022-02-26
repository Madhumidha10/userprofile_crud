import React, { useState,useContext } from "react";
import Button from '@mui/material/Button';
import { userContext } from './UserProvider'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {API} from './UserProvider';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              
export const userValidationSchema = yup.object({
  name: yup
    .string()
    .required("why not fill your name? "),
  email: yup
  .string().matches(re, 'Email is not valid')
    .required("Why not fill your email? "),
    // .string().matches(userList.filter((user)=>user.email),"Email Id alresy exists"),
    
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
    .required("why not fill your Address?")

 
});

export default function AddUser() {
  const history=useHistory();
  const [userList, setUserList] = useContext(userContext);
 
  const formik = useFormik({
    initialValues: { name: "", email: "",mobile:"",designation:"",address:"" },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      addUser(newUser);
   
  
         
    },
  });

  const addUser=(newUser)=>{
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/users"));

  }
   
  



  return <div  style={{width:"500px",margin:"100px auto"}} >
      <form onSubmit={formik.handleSubmit} >
        
    <Typography component="legend" variant="h4" >Create User</Typography>

    <TextField id="name" name="name" label="Enter your name..." variant="outlined" fullWidth sx={{ m: 1 }}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} 
    error={formik.touched.name && formik.errors.name} helperText={ formik.errors.name} />
  
    <TextField id="email"  name="email" label="Enter your Email..." variant="outlined" fullWidth sx={{ m: 1 }}
    error={formik.touched.email && formik.errors.email} helperText={ formik.errors.email}
      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />
    
    <TextField id="mobile" name="mobile" label="Enter your mobile number..." variant="outlined" fullWidth sx={{ m: 1 }}
    error={formik.touched.mobile && formik.errors.mobile} helperText={ formik.errors.mobile}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile}
     />
      
    <TextField id="designation" name="designation" label="Enter your designation..." variant="outlined" fullWidth sx={{ m: 1 }}
     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.designation} 
     error={formik.touched.designation && formik.errors.designation} helperText={ formik.errors.designation} />

    <TextField id="address" name="address" label="Enter your address..." variant="outlined" fullWidth sx={{ m: 1 }}
    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
    error={formik.touched.address && formik.errors.address} helperText={ formik.errors.address}  />
    
    
  <Button type="submit" variant="contained" >Create User</Button>
  </form>
  </div>


}
