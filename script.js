let add = document.querySelector(".button");
let btn = document.querySelector("#friend");
let btn1 = document.getElementById("btnbob");
let check = 0;

add.addEventListener("click", function() {
  if (check == 1) {
    btn.innerHTML = "You are Friends now";
    btn1.innerHTML = "Remove Friend";
    btn.style.color = "green";
    check = 0;
  } else {
    btn.innerHTML = "You are strangers again";
    btn1.innerHTML = "Add Friend";
    btn.style.color = "red";
    check = 1;
  }
});
