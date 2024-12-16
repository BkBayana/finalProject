// import React, { useState } from "react";
// import { saveAs } from "file-saver";

// const Example = () => {
//   const [day, setDay] = useState(null);
//   const [classNumber, setClassNumber] = useState(null);
//   const [attendance, setAttendance] = useState(new Array(6).fill(0));
//   const [showStudents, setShowStudents] = useState(false);

//   const students = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

//   const handleDaySelect = (dayValue) => {
//     setDay(dayValue);
//     setShowStudents(false); // Hide students until the class is selected
//   };

//   const handleClassSelect = (classValue) => {
//     setClassNumber(classValue);
//     setShowStudents(true);
//   };

//   const handleAttendanceChange = (index) => {
//     const updatedAttendance = [...attendance];
//     updatedAttendance[index] = updatedAttendance[index] === 0 ? 1 : 0;
//     setAttendance(updatedAttendance);
//   };

//   const handleSubmit = () => {
//     const attendanceData = `
//       Day: ${day},
//       Class: ${classNumber},
//       Attendance: [${attendance.join(", ")}]
//       Students Present: ${students.filter((_, index) => attendance[index] === 1).join(", ")}
//     `;

//     const blob = new Blob([attendanceData], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, `attendance_day${day}_class${classNumber}.txt`);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Attendance Tracker</h1>
      
//       <div>
//         <h3>Select a Day:</h3>
//         {["Mon", "Tue", "Wed", "Thu", "Fri"].map((dayName, index) => (
//           <button
//             key={dayName}
//             onClick={() => handleDaySelect(index + 1)}
//             style={{ margin: "5px", padding: "10px" }}
//           >
//             {dayName}
//           </button>
//         ))}
//       </div>

//       {day && (
//         <div>
//           <h3>Select a Class:</h3>
//           {[1, 2, 3].map((classValue) => (
//             <button
//               key={classValue}
//               onClick={() => handleClassSelect(classValue)}
//               style={{ margin: "5px", padding: "10px" }}
//             >
//               Class {classValue}
//             </button>
//           ))}
//         </div>
//       )}

//       {showStudents && (
//         <div>
//           <h3>Mark Attendance:</h3>
//           {students.map((student, index) => (
//             <div key={student}>
//               <input
//                 type="checkbox"
//                 checked={attendance[index] === 1}
//                 onChange={() => handleAttendanceChange(index)}
//               />
//               <label style={{ marginLeft: "10px" }}>{student}</label>
//             </div>
//           ))}

//           <button
//             onClick={handleSubmit}
//             style={{
//               marginTop: "20px",
//               padding: "10px",
//               backgroundColor: "green",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Example;
