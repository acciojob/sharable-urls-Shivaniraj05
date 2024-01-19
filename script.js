// your code here
let nameValue = document.getElementById("name").value;
let yearValue = document.getElementById("year").value;
let submitBtn =  document.getElementById("button");
let heading = document.getElementById("url");

submitBtn.addEventListener("click", () => {
    heading.innerText = `https://localhost:8080/?name=${nameValue}&year=${yearValue}`;
});

