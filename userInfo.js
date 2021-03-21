let u_name = sessionStorage.getItem("name");
let u_points = sessionStorage.getItem("points");
let u_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = u_name;

document.querySelector(".final_points").innerHTML = u_points;

document.querySelector(".time").innerHTML = u_time;