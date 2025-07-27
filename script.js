// Student data: edit this array to update easily!
const students = [
  { name: "Rohan", score: 78, gain: 2.0 },
  { name: "Ritika", score: 74, gain: 0.0 },
  { name: "Amit", score: 85, gain: 3.2 },
  { name: "Priya", score: 69, gain: 1.5 },
  { name: "Kunal", score: 90, gain: 4.1 }
  // Add more here... up to 50+
];

// Sort by score descending
students.sort((a, b) => b.score - a.score);

function renderTable() {
  const table = document.getElementById("scoreBody");
  table.innerHTML = ""; // Clear table

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    const crown = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";

    row.innerHTML = `
      <td>${index + 1} ${crown}</td>
      <td>${student.name}</td>
      <td class="score">${student.score}</td>
      <td class="gain">+${student.gain.toFixed(1)}</td>
    `;

    table.appendChild(row);
  });
}

renderTable();
