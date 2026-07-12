document
  .getElementById("activity-btn")
  .addEventListener("click", getNewActivity);

function getNewActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      displayActivity(data);
    });
}

function displayActivity(data) {
  document.getElementById("title").textContent = "HappyBot";
  document.getElementById("activity").textContent = data.activity;
  document.getElementById("activity").classList.add("activity");
  document.getElementById("body").classList.add("bg-activity");
  document.getElementById("label").textContent = "Need another one?";
}
