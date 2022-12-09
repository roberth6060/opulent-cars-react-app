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
    homeheader.style.backgroundImage = "url('../assets/images/orange-car.jpg')";
  }

  if (color.classList.contains("blue")) {
    homeheader.style.backgroundImage = "url('../assets/images/blue-car.png')";
  }
  if (color.classList.contains("yellow")) {
    homeheader.style.backgroundImage = "url('../assets/images/yellow-car.png')";
  }
  if (color.classList.contains("green")) {
    homeheader.style.backgroundImage = "url('../assets/images/green-car.png')";
  }
});

//

// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });
