import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context1 = useContext(noteContext);
  const { addNote } = context1;

  const [note, setNote] = useState({
    name: "",
    gender: "",
    age: "",
    phonenumber: "",
    address: "",
    info: "",
    appdate: "",
    department: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.name,
      note.gender,
      note.age,
      note.phonenumber,
      note.address,
      note.info,
      note.appdate,
      note.department
    );
    setNote({
      name: "",
      gender: "",
      age: "",
      phonenumber: "",
      address: "",
      info: "",
      appdate: "",
      department: "",
    });
    props.showAlert("Details Added Sucessfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Enter details </h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            id="name"
            name="name"
            value={note.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            list="datalistOptions"
            name="gender"
            aria-describedby="emailHelp"
            placeholder="Select Gender"
            value={note.gender}
            onChange={onChange}
            required
          />
          <datalist id="datalistOptions">
            <option value="Male" />
            <option value="Female" />
            <option value="Other" />
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            id="age"
            name="age"
            value={note.age}
            onChange={onChange}
            minLength={2}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Phone Number
          </label>
          <input
            pattern="[789][0-9]{9}"
            type="number"
            className="form-control"
            placeholder="Enter phone number"
            id="phonenumber"
            name="phonenumber"
            aria-describedby="emailHelp"
            value={note.phonenumber}
            onChange={onChange}
            minLength={10}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            id="address"
            name="address"
            aria-describedby="emailHelp"
            value={note.address}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        {props.value !== "Patient Login" ? (
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Department
            </label>

            <select
              className="form-select"
              placeholder="Categery"
              id="department"
              name="department"
              value={note.department}
              onChange={onChange}
              minLength={5}
              required
            >
              <option value="Pediatricia">Pediatricia</option>
              <option value="Gynecologists">Gynecologists</option>
              <option value="Child Psychologist/Psychiatrist">
                Child Psychologist/Psychiatrist
              </option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Cardiologist">Cardiologist </option>
              <option value="Ear, Nose, ad Throat Specialist">
                {" "}
                Ear, Nose, ad Throat Specialist
              </option>
              <option value="Neurologist">Neurologist </option>
              <option value="Therapist ">Therapist</option>
              <option value="Audiologist"> Audiologist</option>
              <option value="Psychologist">Psychologist</option>
              <option value="Dentist ">Dentist </option>
              <option value="Allergist">Allergist</option>
              <option value="Endocrinologist ">Endocrinologist </option>
              <option value="Others">Others</option>
            </select>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                className="form-control"
                id="appdate"
                name="appdate"
                aria-describedby="emailHelp"
                value={note.appdate}
                onChange={onChange}
                required
              />
            </div>
          </>
        )}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Provide information about yourself"
            id="info"
            name="info"
            aria-describedby="emailHelp"
            value={note.info}
            onChange={onChange}
          />
        </div>
        <button
          disabled={note.age.length < 1}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default AddNote;
