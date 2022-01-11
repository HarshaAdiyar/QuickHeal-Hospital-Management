import React from 'react'
import uuid from 'react-native-uuid';
// Callback interface


export default function Reqapp(props) {

    function request(){


        // const name=document.getElementById('paid')
       // document.getElementById("di").innerHTML="We will let you Know your Appointment timing via SMS to your given  mobile number"
         alert("We will let you Know your Appointment timing via SMS to your given  mobile number")
    }
    // UUIDGenerator.getRandomUUID((uuid) => {
    //   console.log(uuid);
    // });
    function onhover() {
      var id=document.getElementById
    }
    
    uuid.v4()
    return (
        
 <div style={{paddingLeft:"35%",paddingRight:"15%"}} >
 <form className="center my-2 mx-5" style={{ paddingLeft:"5%",paddingRight:"5%",width:"60%", border:"double-dark" , backgroundColor:"violet"}} >
    <div  id="rqap"> 
    <h2 style={{textAlign: 'center',}}>{props.rec} Appointment</h2> <br/>
    
    <div className="form-floating my-3">
      <input type="text" className="form-control " id="floatingInput" placeholder="Patient Name"  />
      <label htmlFor="floatingInput">Patient Name</label>
    </div>
    <h6>Gender:</h6>

<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Gender"/>
<datalist id="datalistOptions">
  <option value="Male"/>
  <option value="Female"/>
  <option value="Other"/>
 
</datalist>
   
   <label htmlFor="Age">Age:</label> 
   <input className="form-control my-3"  type="number" placeholder="Age:" required/>
   <label>Mobile Number:</label>
   <input className="form-control my-3  "  type="tel" pattern="[789][0-9]{9}" placeholder="Mobile Number:" required/>
   <label>Address:</label>
   <input className="form-control my-3 "  type="text" placeholder="Address:" required/>
   <label> Appointment Date:</label>
   <input className="form-control my-3"  type="date" placeholder="Appointment Date" required/>
   <label>Categery:</label>
   <select className="form-select"  placeholder="Categery" required>
       <option value="Pediatricia">Pediatricia</option>
       <option value="Gynecologists">Gynecologists</option>
       <option value="Child Psychologist/Psychiatrist">Child Psychologist/Psychiatrist</option>
       <option value="Dermatologist">Dermatologist</option>
       <option value="Cardiologist">Cardiologist </option>
       <option value="Ear, Nose, ad Throat Specialist"> Ear, Nose, ad Throat Specialist</option>
       <option value="Neurologist">Neurologist </option>
       <option value="Therapist ">Therapist</option>
       <option value="Audiologist"> Audiologist</option>
       <option value="Psychologist">Psychologist</option>
       <option value="Dentist ">Dentist </option>
       <option value="Allergist">Allergist</option>
       <option value="Endocrinologist ">Endocrinologist </option>
       <option value="Others">Others</option>
   </select><br/>
   
   {/* <input type="button" type="submit" value="Request" onclick="request()" required/>  */}
   <button className="btn btn-outline-success my-3" onClick={console.log(uuid.v4())} style={{padding:"3%",paddingLeft:"5%",width:"35%"}} type="submit"   id="su">Request</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button className="btn btn-outline-danger my-3" style={{padding:"3%",paddingLeft:"5%",width:"35%"}} type="reset"  id="re">Reset</button>
   <br/><br/>
</div>
</form>
{/* <!-- <p id="di">Request result </p> --> */}
    <br/>
    
    
    
</div>
        
    )
}
