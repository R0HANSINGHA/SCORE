// Initial data
let students = [
  { name: "Rohan", score: 78, gain: 2.0 },
  { name: "Ritika", score: 74, gain: 0.0 },
  { name: "Amit", score: 85, gain: 3.2 },
  { name: "Priya", score: 69, gain: 1.5 },
  { name: "Kunal", score: 90, gain: 4.1 }
  // Add more as needed
];

function applyGains() {
  // Add gain to score
  students.forEach(s => {
    s.score += s.gain;
    s.gain = 0.0; // reset gain
  });
  renderTable();
}

function renderTable() {
  // Sort descending
  students.sort((a, b) => b.score - a.score);

  const table = document.getElementById("scoreBody");
  table.innerHTML = "";

  students.forEach((student, index) => {
    const crown = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1} ${crown}</td>
      <td>${student.name}</td>
      <td class="score">${student.score.toFixed(1)}</td>
      <td class="gain">+<input type="number" value="${student.gain}" min="0" step="0.1"
        onchange="updateGain(${index}, this.value)">
      </td>
    `;
    table.appendChild(row);
  });
}

function updateGain(index, newGain) {
  students[index].gain = parseFloat(newGain);
}

renderTable();
