/* ========= Displaying a Map Using Leaflet Library =========*/
let map;
let mapEvent;
const latitude = 45.7988904;
const longitude = 15.8869043;
map = L.map("map").setView([latitude, longitude], 13);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Mark location on map
L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 150,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
    })
  )
  .setPopupContent("Savska opatovina 96, 10070, Zagreb, Croatia") //fake address
  .openPopup();

/* ========= Functionality for color picker =========*/

const homeheader = document.getElementById("home-header") as HTMLImageElement;
const colorPicker = document.querySelector(".color-picker");

homeheader?.addEventListener("mouseenter", (e) => {
  colorPicker?.classList.remove("hidden");
});

homeheader?.addEventListener("mouseleave", () => {
  colorPicker?.classList.add("hidden");
});

colorPicker?.addEventListener("click", (e) => {
  e.preventDefault();
  const color = e.target as HTMLTextAreaElement;

  if (color.classList.contains("orange")) {
    homeheader.style.backgroundImage =
      "url('https://i.ibb.co/x38fnTG/orange-car.png')";
  }

  if (color.classList.contains("blue")) {
    homeheader.style.backgroundImage =
      "url('https://i.ibb.co/4jHgCWq/blue-car.png')";
  }
  if (color.classList.contains("yellow")) {
    homeheader.style.backgroundImage =
      "url('https://i.ibb.co/xg2T2BC/yellow-car.png')";
  }
  if (color.classList.contains("green")) {
    homeheader.style.backgroundImage =
      "url('https://i.ibb.co/MnwtyXG/green-car.png')";
  }
});

/* ========= CHANGE CAR COLORS =========*/
// var header = document.getElementById("header");
// var ms = document.getElementById("models");
// var m3 = document.getElementById("model3");
// var mx = document.getElementById("modelx");
// var my = document.getElementById("modely");
// var model = document.getElementById("model");

// ms.onclick = function () {
//   header.style.backgroundImage =
//     "url(https://i.postimg.cc/mg7L1t7Z/image-1.png)";
//   model.innerHTML = "Model S";
// };
// m3.onclick = function () {
//   header.style.backgroundImage =
//     "url(https://i.postimg.cc/FRCNXcXp/image-2.png)";
//   model.innerHTML = "Model 3";
// };
// mx.onclick = function () {
//   header.style.backgroundImage =
//     "url(https://i.postimg.cc/KYNmQw9d/image-3.png)";
//   model.innerHTML = "Model X";
// };
// my.onclick = function () {
//   header.style.backgroundImage =
//     "url(https://i.postimg.cc/1t3sdB24/image-4.png)";
//   model.innerHTML = "Model Y";
// };
