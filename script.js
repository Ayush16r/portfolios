fetch('thought.txt')
  .then(response => response.text())
  .then(data => {
    const thoughts = data.split('\n').filter(line => line.trim() !== '');
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    document.getElementById("thought-box").innerText = randomThought;
  })
  .catch(error => {
    document.getElementById("thought-box").innerText = "Failed to load thoughts.";
    console.error(error);
  });
