import React from "react";
import about from './user.png'
export default function About() {
  return <div style={{margin:"40px auto"}} >
    <img src={about} alt='about the task image' width="80%" style={{boxShadow:"0px 0px 17px 5px black"}} />
  </div>;
}
