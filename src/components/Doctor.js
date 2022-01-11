import React from 'react'
import './doctor.css'

export default function Doctor() {
 var open= function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

var close=function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



    return (
 
      <>
      
      <div>
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={close}>×</a>
          <a href="#">Today's Appointment</a>
          <a href="#">Future Appointment</a>
          <a href="#">Patient Registration</a>
        </div>
        <div id="main">
          <button className="openbtn" onClick={open}>☰ Menu</button>  

          <br/>
          <br/>

         <p id="idd"> “An apple daily can away doctor but the doctor is cute then forgot the fruit.”</p>
         <p id="idd">“The best doctor gives the least medicines.”</p>
         <p id="idd">“Sometimes, doctors risk their lives just save others.</p>
          
          <p id="idd">“I can’t be selfish because I have lots of responsibilities.”</p>
          
          <p id="idd">“It’s gonna be tough but tough can’t be impossible.”</p>
          
          <p id="idd">“Due to this coronavirus is running out there… Our doctors are also walking after that damn virus.”</p>
          
          <p id="idd">“Appreciate every doctor out there who save us.”</p>
          
          <p id="idd">“The toughest and responsible job is to be a doctor.”</p>
          
          <p id="idd">“We can’t let people down who can get medical care.”</p>
          
          <p id="idd">“God can not come for us all the time that’s why he sent doctors for us.”</p>
          
          <p id="idd">“DOCTOR such a mindblowing word.”</p>
          
          <p id="idd">“No one can judge the ability of a doctor.”</p>
          
          <p id="idd">“Only a doctor can teach how to love life.”</p>
          
          <p id="idd">“An amazing doctor is hard to find and impossible to forgot.”</p>
          
          <p id="idd">“Doctor’s are great as long as you don’t need them.”</p>
          
          <p id="idd">“Study hard until you can say “I am a doctor” everything is gonna be alright.”</p>
          
          <p id="idd">“DON’T QUIT.!.”</p>
          
          
          
              </div>
      </div>
  
    </>
    
    )
}
