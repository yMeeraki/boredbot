const primaryBtn = document
  .getElementById("primary-btn")
  .addEventListener("click", getActivity());

function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json)
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
    });
}
