var btn = document.getElementById("create");
btn.style.backgroundColor="red"
btn.style.color="black"
btn.addEventListener("click", create);
function create() {
  var grid = document.createElement("div");
  grid.setAttribute("class", "grid");
  var h1 = document.querySelector("h1");
  for (var  i = 1; i <  82; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var cardbtn = document.createElement("button");
    cardbtn.style.backgroundColor="skyblue"
    cardbtn.textContent = "Click ";
    cardbtn.addEventListener("click", function () {
      h1.textContent = i; });
    card.textContent = i;
    card.append(cardbtn);
    grid.append(card);
  }
  var container = document.querySelector(".box");
  container.append(grid);
}