import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Home from "./components/pages/home";
// import Students from "./components/students";
import StudentsBuild from "./components/pages/student-build";
import Contact from "./components/pages/contact";
import Error from "./components/pages/error";
// import AddStudent from "./components/pages/AddStudent";
// import Form from "./components/form";
import "./App.css";
// import rows from "./components/rows-data.json";

function App() {
  // const [students, setStudents] = useState(rows);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="StudentsBuild" element={<StudentsBuild />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* <Route
            path="AddStudent"
            element={
              <AddStudent students={students} setStudents={setStudents} />
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
