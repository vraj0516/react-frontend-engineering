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
import UserList from "./components/UserList";
import { getUsers } from "./services/userService";


function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [company, setCompany] = useState("all");

    useEffect(() => {

        async function loadUsers() {

            try {
                const data = await getUsers();
                setUsers(data);

            } catch (err) {
                setError("Failed to load users");

            } finally {
                setLoading(false);
            }
        }

        void loadUsers();

    }, []);


    const filteredUsers = users.filter(user => {

        const matchesSearch =
            user.name.toLowerCase().includes(search.toLowerCase());

        const matchesCompany =
            company === "all" || user.company.name === company;

        return matchesSearch && matchesCompany;
    });



    const companies = [...new Set(
        users.map(user => user.company.name)
    )];


    return (

        <div>
            <h1>User Dashboard</h1>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            >
                <option value="all">All Companies</option>

                {companies.map(companyName => (
                    <option key={companyName} value={companyName}>
                        {companyName}
                    </option>
                ))}
            </select>

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

            {!loading && !error && filteredUsers.length === 0 && (
                <p>No users found.</p>
            )}

            <UserList users={filteredUsers} />

        </div>
    );
}

export default App;