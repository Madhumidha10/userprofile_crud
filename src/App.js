import './App.css';
import React  from 'react';
import {UserProvider} from './components/UserProvider'
import Appbar from "./components/Appbar"

export default function App(){

 return <div className='App'>
      
         <UserProvider>
          <Appbar />
            
          </UserProvider>
        </div>
}
