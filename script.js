function addScore(input, rowIndex) {
  const table = document.getElementById("scoreBody");
  const row = table.rows[rowIndex];
  const scoreCell = row.querySelector('.score');
  const gainCell = row.querySelector('.gain');

  const currentScore = parseFloat(scoreCell.textContent);
  const gainValue = parseFloat(input.value);

  if (!isNaN(gainValue) && gainValue >= 0) {
    const newScore = currentScore + gainValue;
    scoreCell.textContent = newScore.toFixed(1);
    gainCell.textContent = `+${gainValue.toFixed(1)}`;
    input.value = ""; // clear input
  }
}
