// function App(){
// function ProductCard({ name, price , category }) {
//     return (
//         <div>
//           <h2>{name}</h2>
//           <p>Price :{price}</p>
//           <p>Category: {category}</p>
//         </div>
//     )
// }
//
//   return (
//       <div>
//
//         <ProductCard
//             name="Laptop"
//             price={60000}
//             category="Computer"
//         />
//         <br/>
//         <ProductCard
//             name="Mouse"
//             price={1000}
//             category="Accessories"
//         />
//         <br/>
//         <ProductCard
//             name="Keyboard"
//             price={2000}
//             category="Accessories"/>
//
//       </div>
//   );
// }
//
// export default App;
//

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");

  const [students, setStudents] = useState([]);

  function addStudent() {
    const newStudent = {
      name,
      course,
      marks
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
    setMarks("");
  }

  return (
      <div>
        <h1>Student Manager</h1>

        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
        />

        <br />

        <input
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course"
        />

        <br />

        <input
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Enter marks"
        />

        <br />

        <button onClick={addStudent}>
          Add Student
        </button>

        <h2>Students:</h2>

        {students.map(student => (
            <div key={student.name}>
              <h3>{student.name}</h3>
              <p>Course: {student.course}</p>
              <p>Marks: {student.marks}</p>
            </div>
        ))}
      </div>
  );
}

export default App;