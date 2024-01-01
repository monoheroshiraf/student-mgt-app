import "./App.css";
import StudentView from "./Components/Student/StudentView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Components/Common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./Components/Student/AddStudent";
import UpdateStudent from "./Components/Student/UpdateStudent";

function App() {
  return (
    <main className="container mt-5">
      <h2> Student Management System </h2>

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentView />}></Route>
          <Route exact path="/add-student" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<UpdateStudent />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
