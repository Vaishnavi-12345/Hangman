document.getElementById("play-button").addEventListener("click", function() {
  var playerName = prompt("Please enter your name:");
  if (playerName !== null && playerName.trim() !== "") {
    localStorage.setItem("playerName", playerName);
    var backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
    window.location.href = "game.html";
  }
});
