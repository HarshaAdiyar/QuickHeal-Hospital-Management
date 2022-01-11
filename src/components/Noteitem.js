import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  // const context = useContext(noteContext);
  // const {} = context;
  const { note } = props;
  return (
    <div className="col-md-3" style={{ paddingLeft: "30%", width: "100%" }}>
      <div className="card my-3">
        <div className="card-body">
          {/* <div className="">
            {/* <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i> 
          </div> */}
          <div
          // style={{
          //   paddingLeft: "10%",
          //   textAlign: "center",
          //   backgroundImage:
          //     "linear-gradient(to right, black, rgba(0,0,0.75))",
          //   color: "white",
          // }}
          >
            <h4 style={{ textAlign: "center" }} className="card-title ">
              {props.name} Details
            </h4>
            <h5 className="card-title">Name : {note.name}</h5>
            <p className="card-title">Gender : {note.gender}</p>
            <p className="card-text">Age : {note.age}</p>
            <p className="card-text">Phone Number : {note.phonenumber}</p>
            <p className="card-text">Address : {note.address}</p>
            {props.name !== "Patient" ? (
              <p className="card-text">Department : {note.department}</p>
            ) : (
              <>
                {" "}
                <p className="card-text">Appointment Date : {note.appdate}</p>
                <p className="card-text">Description : {note.info}</p>
              </>
            )}

            {/* <p className="card-text">Info: {note.info}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
