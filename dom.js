document.getElementById("welcome").innerHTML = "Welcome to Teachmint";

var elements = document.getElementsByClassName("desc");
console.log(elements);
for (let element of elements) {
  element.innerHTML = "Desc";
  element.style.backgroundColor = "green";
  element.style.fontFamily = "verdana";
}

const changeColor = () => {
  console.log("changing color");
  var elements = document.getElementsByClassName("desc");
  for (let element of elements) {
    element.style.backgroundColor = "red";
  }
};
