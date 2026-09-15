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

const students = [
  { name: "Vraj", course: "CSE", marks: 85 },
  { name: "Rahul", course: "IT", marks: 78 },
  { name: "Aman", course: "CSE", marks: 92 }
];

function StudentCard({ name, course, marks }) {
  return (
      <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
      </div>
  )
}

function App() {

  const students = [
    { name: "Vraj", course: "CSE", marks: 85 },
    { name: "Rahul", course: "IT", marks: 78 },
    { name: "Aman", course: "CSE", marks: 92 }
  ];

  const Students = [
    {
      name: "Vraj",
      course: "CSE",
      marks: 85
    },
    {
      name: "Rahul",
      course: "IT",
      marks: 78
    },
    {
      name: "Aman",
      course: "CSE",
      marks: 92
    }
  ];
}

<StudentCard
    key={student.name}

/>

export default App