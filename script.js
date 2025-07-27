body {
  background-color: #0e0e0e;
  font-family: 'Comic Sans MS', cursive;
  color: #00ffd0;
  text-align: center;
  padding: 30px;
}

h1 {
  font-size: 2.5em;
  color: #ff66cc;
  margin-bottom: 20px;
  text-shadow: 2px 2px #222;
}

.scoreboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background-color: #1a1a1a;
  border: 3px solid #00ffd0;
  border-radius: 15px;
  width: 220px;
  padding: 20px;
  transition: transform 0.3s ease;
  box-shadow: 0 0 15px #00ffd055;
}

.card:hover {
  transform: scale(1.05);
}

.card h2 {
  font-size: 1.4em;
  color: #ffcc00;
}

.card p {
  font-size: 1.2em;
  margin: 8px 0;
  color: #ffffff;
}
