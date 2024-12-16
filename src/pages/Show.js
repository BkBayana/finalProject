import React, { useState } from "react";

const Show = () => {
  const [fileContent, setFileContent] = useState(null);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        parseFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  const parseFileContent = (content) => {
    const lines = content.split("\n");
    const attendanceLine = lines.find((line) => line.includes("Attendance"));
    const attendanceArray = attendanceLine
      .split(":")[1]
      .trim()
      .replace("[", "")
      .replace("]", "")
      .split(", ")
      .map(Number);

    const studentsList = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
    ]; // Update this list if needed

    setAttendance(attendanceArray);
    setStudents(studentsList);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Attendance Viewer</h1>

      <div>
        <h3>Upload Attendance File:</h3>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          style={{ marginBottom: "20px" }}
        />
      </div>

      {fileContent && (
        <div>
          <h3>Attendance Data:</h3>
          <table
            border="1"
            cellPadding="10"
            style={{ borderCollapse: "collapse", marginTop: "20px" }}
          >
            <thead>
              <tr>
                <th>Student</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student}>
                  <td>{student}</td>
                  <td>{attendance[index] === 1 ? "YES" : "NO"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Show;
