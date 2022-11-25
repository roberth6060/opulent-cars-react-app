"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map, mapEvent;
/* ========== Geolocation API ========== */

if (navigator.geolocation) {
  //Takes two callback function
  navigator.geolocation.getCurrentPosition(
    function (postion) {
      // console.log(postion);
      // console.log(postion.coords);
      //Use destructuring: (Not a 100% accurate)
      const { latitude } = postion.coords; //<-- Use to load map and center on current position.
      const { longitude } = postion.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];

      /* ========== Displaying a Map Using Leaflet Library ========== */

      //Executes the following code when the browser is SUCCESSFUL!!!:
      map = L.map("map").setView(coords, 13); //map function must be the id name of a element in our html (where the map will be displayed)
      // console.log(map);
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //Handling clicks on map:
      //"on" object comes from leaflet library:
      map.on("click", function (e) {
        //Company functions event to global variable:
        mapEvent = e;

        form.classList.remove("hidden");
        //focus on disnace input after clicking map
        inputDistance.focus();
        // inputCadence.focus();
      });
    },
    function () {
      console.log("Could not get your postion");
    }
  );
}

console.log(`leaflet-Map script will run after sciprt.js`);
console.log(`test`);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Clear form input flied
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      "";

  //Display marker
  console.log(mapEvent);
  // Destructure latlng object:
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )
    .setPopupContent("Workout")
    .openPopup();
});

//Listen for form input type (running/ cycling):
inputType.addEventListener("change", function () {
  //closet method: like an inverse querySelector (select parent)
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
