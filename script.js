const students = [
  { roll: "1", name: "Tanjiro" },
  { roll: "2", name: "Naruto" },
  { roll: "3", name: "Luffy" }
];

const scores = {};

function renderCards() {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  students.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = "🎴 " + student.name;

    const roll = document.createElement("p");
    roll.textContent = "Roll No: " + student.roll;

    const score = document.createElement("p");
    score.textContent = "Score: " + (scores[student.roll] || "Not given");

    card.appendChild(name);
    card.appendChild(roll);
    card.appendChild(score);

    container.appendChild(card);
  });
}

function submitScore() {
  const rollInput = document.getElementById("roll").value.trim();
  const scoreInput = document.getElementById("score").value.trim();

  if (!rollInput || !scoreInput) return;

  scores[rollInput] = scoreInput;

  document.getElementById("roll").value = "";
  document.getElementById("score").value = "";

  renderCards();
}

// Initial render
renderCards();
