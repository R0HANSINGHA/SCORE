const students = [
  { name: "Tanjiro", roll: "1", marks: 23 },
  { name: "Naruto", roll: "2", marks: 21 },
  { name: "Luffy", roll: "3", marks: 19 },
  { name: "Deku", roll: "4", marks: 25 },
  { name: "Nezuko", roll: "5", marks: 20 }
];

function displayScoreboard() {
  const container = document.getElementById("scoreboard");
  container.innerHTML = "";

  students.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>🎴 ${student.name}</h2>
      <p>Roll No: ${student.roll}</p>
      <p>Marks: ${student.marks}/25</p>
    `;

    container.appendChild(card);
  });
}

displayScoreboard();
