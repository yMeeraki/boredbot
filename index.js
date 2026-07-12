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
  document.getElementById("activity").textContent = data.activity;
}
