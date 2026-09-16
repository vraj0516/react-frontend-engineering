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

// import { useState } from "react";
//
// function App() {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [marks, setMarks] = useState("");
//
//   const [students, setStudents] = useState([]);
//
//   function addStudent() {
//     const newStudent = {
//       name,
//       course,
//       marks
//     };
//
//     setStudents([...students, newStudent]);
//
//     setName("");
//     setCourse("");
//     setMarks("");
//   }
//
//   return (
//       <div>
//         <h1>Student Manager</h1>
//
//         <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter student name"
//         />
//
//         <br />
//
//         <input
//             value={course}
//             onChange={(e) => setCourse(e.target.value)}
//             placeholder="Enter course"
//         />
//
//         <br />
//
//         <input
//             value={marks}
//             onChange={(e) => setMarks(e.target.value)}
//             placeholder="Enter marks"
//         />
//
//         <br />
//
//         <button onClick={addStudent}>
//           Add Student
//         </button>
//
//         <h2>Students:</h2>
//
//         {students.map(student => (
//             <div key={student.name}>
//               <h3>{student.name}</h3>
//               <p>Course: {student.course}</p>
//               <p>Marks: {student.marks}</p>
//             </div>
//         ))}
//       </div>
//   );
// }
//
// export default App;

///////////////////////////////////////////Day 2 /////////////////////////////////////////

import { useEffect ,useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");

    useEffect(() => {

        async function getUsers() {

            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                console.log(data);
                setUsers(data);
            } catch (err) {
                setError("Failed to load users");
            }finally {
                setLoading(false);
            }

        }

        getUsers();

    }, []);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div>
            <h1>User Dashboard</h1>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && (
                <p>
                    Loading users... Please Wait . . .
                </p>
            )}

            {error && (
                <p>
                    {error}
                </p>
            )}

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            {filteredUsers.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    </div>
            ))}
        </div>
    );
}

export default App;