import React, { useState,createContext } from 'react'

export const userContext = createContext();

export const UserProvider = (props) => {
  const [userList, setUserList] = useState([
    {
        
        name: "Madhumidha.A",
        email: "madhu4win@gmail.com",
        mobile: "9042693794",
        img: "https://i15.moxi.onl/img-pr/a/500469bf-1f2f-45d8-be7b-e02744fc8fcf/0_1_full.jpg",
        address: "23,1st cross,Mettupalayam,puducherry-9",
        designation: "Software Developer",
        about:"Enthusiastic engineering graduate with basic knowledge in coding and design. Proficient in C++, HTML 5, JavaScript, and Python. Ability to learn new softwares and technologies quickly. Capability to work in teams by providing valuable support."
    },
    {
      
      name: "Boopalan.M",
      email: "balan@gmail.com",
      mobile: "88526215889",
      img: "https://www.fidusol.com/wp-content/uploads/2020/08/joseph-tsirakkis.jpg",
      address: "87,sipcot housing colony,hosur-5",
      designation: "Full stack Developer",
      about:"B.Tech computer science graduate with a 60% score in academics.  Have knowledge in C#, HTML, CSS, JavaScript, ASP.Net, SQL server, jquery, BootStrap, Web API, and Angular. Ability to design and maintain ASP.net application phases."
  },
  {name: "Praneeta.B",
      email: "praneeta@gmail.com",
      mobile: "8852454458",
      img: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      address: "874,VM garden ,1st cross,chennai-5",
      designation: "Data scientist",
      about:"MCA (Master in Computer Application) with distinction and seven years of experience as a data scientist. Proficiency in HTML, CSS, Python, C++, C# and JAVA. Beginner in MATLAB. Experienced in manipulating visual hierarchy and automation in prediction algorithms for customer trends."
  },
  {
    name: "Mugundan.B",
      email: "mugund@gmail.com",
      mobile: "8959554256",
      img: "https://www.trickscity.com/wp-content/uploads/2016/11/K0cAXP3.jpg",
      address: "59,Housing colony ,5st cross,ooty-65",
      designation: "Marketing manager",
      about:"Dynamic and self-motivated, result-oriented marketing manager with more than seven years of total experience. Proven record of increasing sales by up to 50% through marketing initiatives. An active team member with excellent communication and people skills. Expert in nurturing innovative ideas and deriving success from diverse teams. Two-time winner of state-level excellence awards."
 
  }
  ])

  return (
    <userContext.Provider value={[userList, setUserList]} >
      {props.children}
    </userContext.Provider>
  )

}
