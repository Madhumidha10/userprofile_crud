import { useContext,useState } from 'react'
import { userContext } from './UserProvider'
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from 'react';
import {API} from './UserProvider'
const UserList = () => {
 
 const [userList,setUserList]=useState([])

 const history=useHistory();


const getUsers=()=>{
  fetch(API).then((data)=>data.json()).then((users)=>setUserList(users))
}

useEffect(()=>getUsers(),[]);

const deleteUser = (id) => {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  })
  .then(() => getUsers());
   
 }
 const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2191d4',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


  return (
   <div className='UserList'>
        
        


<TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
  <TableHead>
    <TableRow>
    <StyledTableCell align="center">#</StyledTableCell>
      <StyledTableCell align="center">Name</StyledTableCell>
      <StyledTableCell align="left">Profile View</StyledTableCell>
       <StyledTableCell align="center">Job Description</StyledTableCell>
      <StyledTableCell align="center">Email</StyledTableCell>
      <StyledTableCell align="center">Action</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {userList.map(({id,name,email,mobile,designation,img,address}, index)=>
   
      <StyledTableRow key={index}>
        <StyledTableCell align="center">
          {id}
        </StyledTableCell>
        <StyledTableCell align="center">
          {name}
        </StyledTableCell>
         <StyledTableCell align="center"  > 
        <Avatar alt="Profile Picture" src={img} onClick={()=>{history.push(`/profile/${id}`)}}/></StyledTableCell> 
        <StyledTableCell align="center">{designation}</StyledTableCell>
        <StyledTableCell align="center">{email}</StyledTableCell>
         <StyledTableCell align="center">
        <IconButton aria-label="profile-view" color="success"
         >
           <AccountCircleIcon onClick={()=>{history.push(`/edit-profile/${id}`)}} />
          </IconButton>
         <IconButton aria-label="delete" color="error"
         >
            <DeleteIcon onClick={()=>{deleteUser(id)}} />
          </IconButton>
          <IconButton aria-label="edit" color="secondary" 
           >
              <EditIcon  onClick={()=>{history.push(`/edit-user/${id}`)}}/>

          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    )}
  </TableBody>
</Table>
</TableContainer>
</div>

          )
        }



    //  Users Employee 
        // Username
        // Email Address
        // User's First and Last Name
        // License
        // Profile
        // Role (optional)


    
      
  
      // id={id}


//     <div>
//       {/* {userList.map(({name,email,mobile,designation,img},index) => ( */}

//         <IconButton aria-label="edit" color="secondary" 
//         onClick={()=>{history.push(`/user/edit-user/${index}`)
      
//         }}><EditIcon /></IconButton>
//          <IconButton aria-label="delete" color="error"
//       ><DeleteIcon /></IconButton>
//         </Grid>
//       </Grid>

//   //       <Card sx={{ maxWidth: 345 }} key={index}>
//   //       <CardMedia
//   //    component="img"
//   //    height="140"
//   //    image={img}
//   //    alt="green iguana"
//   //  />
//   //  <CardContent>
//   //    <Typography gutterBottom variant="h5" component="div">
//   //    {name}
//   //    </Typography>
//   //    <Typography variant="body2" color="text.secondary">
//   //    {email}
//   //    {mobile}{designation}
//   //    </Typography>
//   //  </CardContent>
//   //  <button value={index} onClick={handleSubmit}>Delete</button>
//   // <button value={index} onClick={()=>{history.push(`/edit_user/${index}`)}} >Edit</button>

// // </Card>
   
//       ))}




export default UserList
