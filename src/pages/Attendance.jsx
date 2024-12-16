import React, { useState } from "react";
import { saveAs } from "file-saver";
import '../style/Attendance.css';

const Example = () => {
  const [day, setDay] = useState(null);
  const [groupNumber, setGroupNumber] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [showStudents, setShowStudents] = useState(false);

  const students = {
    21: ["AliАбдразаков Арсен", "Исманкулов Нурсултан", "Канатбеков Адахан", "Карымбаев Нурлан", "Кененбаев Эркин", "Кыздарбеков Нурдавлет"],
    22: ["Болотбекова Насикат", "Джеенбекова Сауле", "Курманкожоев Омурбек", "Мирланбеков Нуржигит", "Мисирова Рабига"],
    23: ["Mike", "Nina", "Oscar", "Paul", "Quinn", "Rachel"],
    24: ["Sam", "Tina", "Ursula", "Vera", "Wade", "Xena"],
    25: ["Yara", "Zane", "Abby", "Ben", "Cathy", "Derek"],
  };

  const handleDaySelect = (dayValue) => {
    setDay(dayValue);
    setShowStudents(false); 
  };

  const handleGroupSelect = (groupValue) => {
    setGroupNumber(groupValue);
    setAttendance(new Array(students[groupValue].length).fill(0)); 
    setShowStudents(true);
  };

  const handleAttendanceChange = (index) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index] = updatedAttendance[index] === 0 ? 1 : 0;
    setAttendance(updatedAttendance);
  };

  const handleSubmit = () => {
    const attendanceData = `
      Day: ${day},
      Group: ${groupNumber},
      Attendance: [${attendance.join(", ")}]
      Students Present: ${students[groupNumber].filter((_, index) => attendance[index] === 1).join(", ")}
    `;

    const blob = new Blob([attendanceData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `attendance_day${day}_group${groupNumber}.txt`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Attendance Tracker</h1>
      <h3>Select a Day:</h3>
      <div className="dayBlock">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((dayName, index) => (
          <button
            key={dayName}
            onClick={() => handleDaySelect(index + 1)}
            className="dayBtn"
          >
            {dayName}
          </button>
        ))}
      </div>

      {day && (
        <div className="groupBlock">
          <h3>Select a Group:</h3>
          {[21, 22, 23, 24, 25].map((groupValue) => (
            <button
              key={groupValue}
              onClick={() => handleGroupSelect(groupValue)}
              className="groupBtn"
            >
              Group {groupValue}
            </button>
          ))}
        </div>
      )}

      {showStudents && groupNumber && (
        <div>
          <h3>Mark Attendance for Group {groupNumber}:</h3>
          {students[groupNumber].map((student, index) => (
            <div key={student}>
              <input
                type="checkbox"
                checked={attendance[index] === 1}
                onChange={() => handleAttendanceChange(index)}
              />
              <label style={{ marginLeft: "10px" }}>{student}</label>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit Attendance
          </button>
        </div>
      )}
    </div>
  );
};

export default Example;
