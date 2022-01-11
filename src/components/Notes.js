import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    ename: "",
    egender: "",
    eage: "",
    ephonenumber: "",
    eaddress: "",
    einfo: "",
    eappdate: "",
    edepartment: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      ename: currentNote.name,
      egender: currentNote.gender,
      eage: currentNote.age,
      ephonenumber: currentNote.phonenumber,
      eaddress: currentNote.address,
      einfo: currentNote.info,
      eappdate: currentNote.appdate,
      edepartment: currentNote.department,
    });
    props.showAlert("Details Added Sucessfully", "success");
  };

  const handleClick = (e) => {
    editNote(
      note.id,
      note.ename,
      note.egender,
      note.eage,
      note.ephonenumber,
      note.eaddress,
      note.einfo,
      note.eappdate,
      note.edepartment
    );
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <AddNote /> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="egender"
                    name="egender"
                    value={note.egender}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eage"
                    name="eage"
                    value={note.eage}
                    onChange={onChange}
                    minLength={1}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ephonenumber"
                    name="ephonenumber"
                    value={note.ephonenumber}
                    onChange={onChange}
                    minLength={10}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eaddress"
                    name="eaddress"
                    value={note.eaddress}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Department
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edepartment"
                    name="edepartment"
                    value={note.edepartment}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="einfo"
                    name="einfo"
                    value={note.einfo}
                    onChange={onChange}
                    minLength={5}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.eage.length < 1}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        <div>
          {notes.map((note) => {
            return (
              <Noteitem
                name={props.name}
                key={note._id}
                updateNote={updateNote}
                note={note}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
