import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all the notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setNotes(json);
  };
  //add a note
  const addNote = async (
    name,
    gender,
    age,
    phonenumber,
    address,
    info,
    appdate,
    department
  ) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        gender,
        age,
        phonenumber,
        address,
        info,
        appdate,
        department,
      }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (
    id,
    name,
    gender,
    age,
    phonenumber,
    address,
    info,
    appdate,
    department
  ) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        gender,
        age,
        phonenumber,
        address,
        info,
        appdate,
        department,
      }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].name = name;
        newNotes[index].gender = gender;
        newNotes[index].age = age;
        newNotes[index].phonenumber = phonenumber;
        newNotes[index].address = address;
        newNotes[index].info = info;
        newNotes[index].appdate = appdate;
        newNotes[index].department = department;
        // newNotes[index].info = info;

        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
