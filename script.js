var white = document.getElementById("white");
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var image = document.getElementById("photo");
var price = document.getElementById("price");

yellowSwatch.addEventListener("mouseover", function() {
console.log("Yellow");
  image.src = "img/chair-yellow@2x.jpg";
  price.innerHTML = "$74.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});


yellowSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});


blueSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-blue@2x.jpg";
  price.innerHTML = "$89.99";
  price.style.color = "black";
});


blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});


redSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-red@2x.jpg";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});




white.addEventListener("mouseover", function() {
  image.src = "img/chair-beige@2x.jpg";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});