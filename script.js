let input = document.querySelector("#task");
let task = document.querySelector(".con");
let icon = document.querySelector("ul li i");

function add() {
  if (input.value === "") {
    alert("Enter a proper value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    task.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa fa-times' id='cross'></i>";
    li.appendChild(span);
    input.value = '';
  }
  showme()
}
function about() {
    document.querySelector("#adding_task").style.display = "none";
    document.querySelector("#task_box").style.display = "none";
    document.querySelector("#t").style.display = "block";
    document.querySelector("#clearall1").style.display = "none";
    document.querySelector("#clearall2").style.display = "block";
}
function home() {
    document.querySelector("#adding_task").style.display = "block";
    document.querySelector("#task_box").style.display = "block";
    document.querySelector("#t").style.display = "none";
    document.querySelector("#clearall1").style.display = "block";
    document.querySelector("#clearall2").style.display = "none";
}
task.addEventListener("click", function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("text");
    showme()
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    showme()
  }
}, false)

function showme() {
  localStorage.setItem("data", task.innerHTML);
}
function save() {
  task.innerHTML = localStorage.getItem("data");
}
function clearall() {
  task.innerHTML = "";
  localStorage.removeItem("data");
}
save();