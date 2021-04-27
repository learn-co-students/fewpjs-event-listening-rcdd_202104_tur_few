function addingEventListener() {
  const el = document.getElementById("input");
  el.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}
