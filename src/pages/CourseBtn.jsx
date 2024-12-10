import React from 'react';

const ScheduleTable = () => {
  return (
    <table border="1" style={{ width: "100%", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Время</th>
          <th>Понедельник</th>
          <th>Вторник</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00 - 10:00</td>
          <td>Математика</td>
          <td>Английский</td>
          <td>Химия</td>
          <td>Физика</td>
          <td>История</td>
        </tr>
        <tr>
          <td>10:00 - 11:00</td>
          <td>Физика</td>
          <td>Математика</td>
          <td>Информатика</td>
          <td>Биология</td>
          <td>Литература</td>
        </tr>
        {/* Добавьте остальные строки */}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
