const intro_label_height = document.getElementById("Introduction").clientHeight;
const elements_label_height = document.getElementById("Node-1").clientHeight;

true = ()=> {
var theStyle = document.querySelector(":root");

var resultantHeight = intro_label_height + elements_label_height;
alert(resultantHeight)
theStyle.style.setProperty("--height",resultantHeight);
}