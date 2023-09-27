 function getRandomColor(){
    let color = ["red", "blue", "black", "yellow", "skyblue", "brown"]
    let getRandomColor = Math.floor(Math.random()* color.length);
    return color[getRandomColor];
 }

 document.addEventListener("click", function (){
    document.body.style.backgroundColor = getRandomColor();
 })