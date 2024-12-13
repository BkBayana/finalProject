import React, { useState } from 'react';
import './App.css';

const data = {
  'First year': {
    'SC-15': [
      { day: 'Monday', time: '11:30-12:50', title: 'Introduction to Computer Science', teacher: 'Beishenaliev Aliya', room: '203', students: ['John Doe', 'Jane Smith', 'Alex Johnson'] },
      { day: 'Monday', time: '13:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
      { day: 'Monday', time: '43:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
      { day: 'Monday', time: '53:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
      { day: 'Tuesday', time: '14:50-16:10', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black'] },
      { day: 'Wednesday', time: '13:20-14:40', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black'] },
      { day: 'Thursday', time: '13:20-14:40', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black'] },
      { day: 'Friday', time: '14:50-16:10', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black','Alice Green', 'Tom White', 'Sophia Black','Alice Green', 'Tom White', 'Sophia Black'] },
    ],
    'CS-12': [
      { day: 'Tuesday', time: '14:50-16:10', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black'] },
      { day: 'Wednesday', time: '14:50-16:10', title: 'Web Development', teacher: 'Zamirbekova M', room: '201', students: ['Alice Green', 'Tom White', 'Sophia Black'] },
    ],
    'SC-17': [
      { day: 'Monday', time: '11:30-12:50', title: 'Introduction to Computer Science', teacher: 'Beishenaliev Aliya', room: '203', students: ['John Doe', 'Jane Smith', 'Alex Johnson'] },
      { day: 'Monday', time: '13:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
    ],
    'SC-11': [
      { day: 'Monday', time: '11:30-12:50', title: 'Introduction to Computer Science', teacher: 'Beishenaliev Aliya', room: '203', students: ['John Doe', 'Jane Smith', 'Alex Johnson'] },
      { day: 'Monday', time: '13:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
      { day: 'Monday', time: '14:50-15:10', title: 'WindoW',},
    ],
    'SC-19': [
      { day: 'Monday', time: '11:30-12:50', title: 'Introduction to Computer Science', teacher: 'Beishenaliev Aliya', room: '203', students: ['John Doe', 'Jane Smith', 'Alex Johnson'] },
      { day: 'Monday', time: '13:20-14:40', title: 'Mathematics', teacher: 'Ivanov I.', room: '204', students: ['Alice Green', 'Tom White'] },
      { day: 'Monday', time: '14:50-15:10', title: 'WindoW' },
    ],
  },
}


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Attendance = () => {
  const [selectedYear, setSelectedYear] = useState('First year');
  const [selectedGroup, setSelectedGroup] = useState('SC-11');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const closeModal = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="app">
      {/* Кнопки выбора группы */}
      <div className="group-buttons">
        {Object.keys(data[selectedYear]).map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`group-button ${group === selectedGroup ? 'active' : ''}`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Таблица расписания */}
      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...new Set(data[selectedYear][selectedGroup].map((lesson) => lesson.time))].map((time) => (
              <tr key={time}>
                <td>{time}</td>
                {daysOfWeek.map((day) => {
                  const lesson = data[selectedYear][selectedGroup].find(
                    (lesson) => lesson.day === day && lesson.time === time
                  );
                  return (
                    <td
                      key={day}
                      className={lesson ? 'lesson-cell' : ''}
                      onClick={() => lesson && handleLessonClick(lesson)}
                    >
                      {lesson ? (
                        <>
                          <strong>{lesson.title}</strong>
                          <br />
                          {lesson.teacher}
                          <br />
                          Room {lesson.room}
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Модальное окно */}
      {selectedLesson && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedLesson.title}</h3>
            <p><strong>Teacher:</strong> {selectedLesson.teacher}</p>
            <p><strong>Room:</strong> {selectedLesson.room}</p>
            <h4>Students:</h4>
            <ul>
              {selectedLesson.students.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
            </ul>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;