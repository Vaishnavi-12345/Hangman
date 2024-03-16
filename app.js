document.getElementById("play-button").addEventListener("click", function() {
  var playerName = prompt("Please enter your name:");
  if (playerName !== null && playerName.trim() !== "") {
    localStorage.setItem("playerName", playerName);
    window.location.href = "game.html";
  }
});
