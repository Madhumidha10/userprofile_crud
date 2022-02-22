import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddUser from './AddUser'
import EditUser from './EditUser'
import UserList from './UserList';
import UserProfile from './UserProfile'
import EditProfile from './EditProfile';
import Paper from '@mui/material/Paper';
import Home from './Home';
import {
    Switch,
    Route
  } from "react-router-dom";
  import { useHistory} from "react-router-dom";

  import { createTheme,ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PageNotFound from './PageNotFound';


export default function Appbar(){
    const [mode,setMode]=useState("dark");
    const theme=createTheme({
      palette:{
        mode:mode,
      },
    });
   
  
  
    const history=useHistory();
   return <div className="Appbar">
            
    <ThemeProvider theme={theme}>
     <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4} >
        <AppBar position='static'>
          <Toolbar>
            <Button color="inherit" onClick={()=>{history.push("/")}} >Home</Button>
            <Button color="inherit" onClick={()=>{history.push("/users")}} >Users List</Button>
            <Button color="inherit" onClick={()=>{history.push("/add-user")}} >Add User</Button>         
            <Button color="inherit" style={{ marginLeft: "auto" }}
            startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? "dark" : "light"} mode</Button>
          </Toolbar>
        </AppBar>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add-user">
      <AddUser />
      </Route>
      <Route path="/edit-user/:id">
      <EditUser />
      </Route>
      <Route path="/users">
        <UserList /> 
          
      </Route>
      <Route path="/profile/:id">
        <UserProfile /> 
          
      </Route>
      <Route path="/edit-profile/:id">
        <EditProfile /> 
          
      </Route>
      <Route path="**">
        <PageNotFound /> 
          
      </Route>
    

  
        
     
    </Switch>
     </Paper>
     </ThemeProvider>
   </div>

}