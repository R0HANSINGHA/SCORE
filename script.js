let students = [
  { name: "Rohan", score: 78 },
  { name: "Ritika", score: 74 },
  { name: "Amit", score: 85 },
  { name: "Priya", score: 69 },
  { name: "Kunal", score: 90 }
  // Add more students here!
];

function renderTable() {
  // Sort students by score descending
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
      <td>
        <input type="number" min="0" step="0.1" placeholder="0" onchange="addGain(${index}, this)">
      </td>
    `;
    table.appendChild(row);
  });
}

function addGain(index, inputEl) {
  const gain = parseFloat(inputEl.value);
  if (!isNaN(gain) && gain > 0) {
    students[index].score += gain;
    inputEl.value = "";
    renderTable(); // re-render to update ranking
  }
}

renderTable();

