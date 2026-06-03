import React, { useEffect, useState } from "react";

function App() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/leaves")
      .then((res) => res.json())
      .then((data) => setLeaves(data));
  }, []);

  return (
    <div>
      <h1>Leave App Frontend</h1>
      <ul>
        {leaves.map((leave, idx) => (
          <li key={idx}>
            {leave.EmployeeName} - {leave.LeaveType} ({leave.Status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
