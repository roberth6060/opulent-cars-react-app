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

// better image preloading @ https://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/
// function preloader() {
//   if (document.getElementById) {
//     document.getElementById("preload-01").style.background =
//       "url(http://domain.tld/image-01.png) no-repeat -9999px -9999px";
//     document.getElementById("preload-02").style.background =
//       "url(http://domain.tld/image-02.png) no-repeat -9999px -9999px";
//     document.getElementById("preload-03").style.background =
//       "url(http://domain.tld/image-03.png) no-repeat -9999px -9999px";
//   }
// }
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != "function") {
//     window.onload = func;
//   } else {
//     window.onload = function () {
//       if (oldonload) {
//         oldonload();
//       }
//       func();
//     };
//   }
// }
// addLoadEvent(preloader);
//functionality
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
      "url('https://i.ibb.co/25Ysz4P/orange-car.png')";
  }

  if (color.classList.contains("blue")) {
    homeheader.style.backgroundImage =
      "url('https://i.ibb.co/FBFqc6r/blue-car.png')";
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
