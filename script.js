function updateScore(slider, rowId) {
  const row = document.getElementById(rowId);
  const scoreCell = row.querySelector('.score');
  const newScore = slider.value;
  scoreCell.textContent = newScore;

  // Update background color based on score
  row.classList.remove('low-score', 'medium-score', 'high-score');
  if (newScore < 8) {
    row.classList.add('low-score');
  } else if (newScore < 17) {
    row.classList.add('medium-score');
  } else {
    row.classList.add('high-score');
  }
}
