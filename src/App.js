import React from "react";
// import logo from './logo.svg';
import "./App.css";

import Footer from "./components/Footer";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from "react-router-dom";
import About from "./components/About";
import Connect from "./components/Connect";
import Nurse2 from "./components/Nurse2";
import Doctor2 from "./components/Doctor2";
import Laboratory from "./components/Laboratory";
import Pharmacy from "./components/Pharmacy";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import ScrollToTop from "./components/scrollToTop";
import Buttons from "./components/Buttons";
import Admin from "./components/Admin";
import AddNote from "./components/AddNote";
import { useState } from "react";
import Alert from "./components/Alert";
import Receptionist from "./components/Receptionist";
import Main from "./components/Main";
import Facilities from "./components/Facilities";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <ScrollToTop />
          <Home title="  QuickHeal" />
          <Alert alert={alert} />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/connect">
              <Connect />
            </Route>
            <Route path="/login">
              <Buttons />
            </Route>
            <Route path="/signup">
              <Signup showAlert={showAlert} />
            </Route>

            <Route path="/login-admin">
              <Login name="Admin" value="Admin Login" showAlert={showAlert} />
            </Route>
            <Route path="/login-doctor">
              <Login name="Doctor" value="Doctor Login" showAlert={showAlert} />
            </Route>
            <Route path="/login-nurse">
              <Login name="Nurse" value="Nurse Login" showAlert={showAlert} />
            </Route>
            <Route path="/login-recep">
              <Login
                name="Receptionist"
                value="Receptionist Login"
                showAlert={showAlert}
              />
            </Route>
            <Route path="/login-patient">
              <Login
                name="Patient"
                value="Patient Login"
                showAlert={showAlert}
              />
            </Route>
            <Route path="/admin-doctor-login">
              <Login
                name="addnote"
                value="Doctor Login"
                showAlert={showAlert}
              />
            </Route>
            <Route path="/admin-nurse-login">
              <Login name="addnote" value="Nurse Login" showAlert={showAlert} />
            </Route>
            <Route path="/admin-recep-login">
              <Login
                name="addnote"
                value="Receptionist Login"
                showAlert={showAlert}
              />
            </Route>
            <Route path="/admin-patient-login">
              <Login
                name="addnote-p"
                value="Patient Login"
                showAlert={showAlert}
              />
            </Route>
            <Route path="/Admin">
              <Admin name="Admin" />
            </Route>
            <Route path="/Doctor">
              <Doctor2 name="Doctor" />
            </Route>
            <Route path="/Nurse">
              <Nurse2 name="Nurse" showAlert={showAlert} />
            </Route>
            <Route path="/Receptionist">
              <Receptionist name="Receptionist" />
            </Route>
            <Route path="/addnote">
              <AddNote showAlert={showAlert} />
            </Route>
            <Route path="/addnote-p">
              <AddNote value="Patient Login" showAlert={showAlert} />
            </Route>

            <Route path="/Patient">
              <Patient name="Patient" />
            </Route>
            <Route path="/lab">
              <Laboratory />
            </Route>
            <Route path="/phar">
              <Pharmacy />
            </Route>
            <Route path="/fac">
              <Facilities />
            </Route>

            <Route path="/">
              <Main />
            </Route>
          </Switch>
          <div style={{ backgroundColor: "black" }}>
            <Footer title="  QuickHeal" />
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
