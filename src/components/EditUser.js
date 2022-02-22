// import React, { useContext, useState } from 'react'
// import { userContext } from './UserProvider'
// import { useHistory } from "react-router-dom"
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// export default function AddUser(){
//     const [userList, setUserList] = useContext(userContext);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [img, setImg] = useState("");
//     const [address, setAddress] = useState("");
//     const [designation, setDesignation] = useState("");
//     const history = useHistory()

//     const handleSubmit = (e) => {
     
//         const newUser= {
//            name:name,
//            email:email,
//            mobile:mobile,
//            address:address,
//            designation:designation,
//            img:img };
//         setUserList([...userList,newUser]);
     
//          history.push('/users');
//       }
//     return (
//       <div >
//      <Card sx={{ maxWidth: "60vw",margin:"50px auto" }}>
//         <Typography gutterBottom variant="h5" component="div" sx={{ bgcolor: 'text.primary',color: 'primary.contrastText',textAlign: "center" }} >
//           Add User
//         </Typography>
//            <TextField id="name" name="name" label="Enter the name..." variant="standard" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} 
//     error={formik.touched.name && formik.errors.name} helperText={ formik.errors.name} />
   
//         <TextField id="name" name="name" value={name} label='User Name' variant="outlined" onChange={e => setName(e.target.value)}/>
          
//           <input
//             type='text'
//             value={email}
//             placeholder='User Email'
//             onChange={e => setEmail(e.target.value)}
//           />
//            <input
//             type='text'
//             value={mobile}
//             placeholder='User Mobile No'
//             onChange={e => setMobile(e.target.value)}
//           />
//            <input
//             type='text'
//             value={img}
//             placeholder='User Profile Image'
//             onChange={e => setImg(e.target.value)}
//           />
//            <input
//             type='text'
//             value={address}
//             placeholder='User Email'
//             onChange={e => setAddress(e.target.value)}
//           />
//            <input
//             type='text'
//             value={designation}
//             placeholder='User Email'
//             onChange={e => setDesignation(e.target.value)}
//           />
      
//           <Button type='submit' variant="contained"  onClick={handleSubmit}>Add user</Button>
//           </Card>
//         </div>
//       )
// }


import React, { useState,useContext } from "react";
import Button from '@mui/material/Button';
import { userContext } from './UserProvider'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useHistory,useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
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
    .required("why not fill your Address?")

 
});

export default function EditUser() {
  
  const history=useHistory();
  const [userList, setUserList] = useContext(userContext);
 
  const {id}=useParams();

  const formik = useFormik({
    initialValues: { name: userList[id].name, email: userList[id].email,mobile:userList[id].mobile,designation:userList[id].designation,address:userList[id].address },
    validationSchema: userValidationSchema,
    onSubmit: (updatingUser) => {
       editUser(updatingUser);
   
  
         
    },
  });

  const editUser=(updatingUser)=>{
   const copyuser=userList;
   copyuser[id]=updatingUser
   
    setUserList([...copyuser]);
    history.push('/users');
  }
   
  



  return <div  style={{width:"500px",margin:"100px auto"}} >
      <form onSubmit={formik.handleSubmit} >
        
    <Typography component="legend" variant="h4" >Edit User</Typography>

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
    
    
  <Button type="submit" variant="contained" >Update</Button>
  </form>
  </div>


}
