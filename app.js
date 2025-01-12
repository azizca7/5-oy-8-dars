const urlImageInput = document.getElementById("urlImage");
const addBtn = document.getElementById("add");
const oldingiBtn = document.getElementById("oldingi");
const keyingiBtn = document.getElementById("keyingi");
const sliderRasm = document.getElementById("sliderRasm");

let images = JSON.parse(localStorage.getItem("images")) || [];
let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

if (images.length > 0) {
  sliderRasm.src = images[currentIndex];
}

addBtn.addEventListener("click", function () {
  const urlImage = urlImageInput.value.trim();
  if (urlImage) {
    images.push(urlImage);
    localStorage.setItem("images", JSON.stringify(images)); 
    urlImageInput.value = "";
    sliderRasm.src = urlImage;
    currentIndex = images.length - 1;
    localStorage.setItem("currentIndex", currentIndex); 
  } else {
    alert("Iltimos, rasm URL kiriting!");
  }
});

oldingiBtn.addEventListener("click", function () {
  if (images.length === 0) {
    alert("Hech qanday rasm yo'q!");
    return;
  }
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderRasm.src = images[currentIndex];
  localStorage.setItem("currentIndex", currentIndex);
});

keyingiBtn.addEventListener("click", function () {
  if (images.length === 0) {
    alert("Hech qanday rasm yo'q!");
    return;
  }
  currentIndex = (currentIndex + 1) % images.length;
  sliderRasm.src = images[currentIndex];
  localStorage.setItem("currentIndex", currentIndex);
});
