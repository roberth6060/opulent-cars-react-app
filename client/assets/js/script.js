"use strict";
let map;
let mapEvent;
const latitude = 45.7988904;
const longitude = 15.8869043;
map = L.map("map").setView([latitude, longitude], 13);
L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(L.popup({
    maxWidth: 150,
    minWidth: 100,
    autoClose: false,
    closeOnClick: false,
}))
    .setPopupContent("Savska opatovina 96, 10070, Zagreb, Croatia")
    .openPopup();
const homeheader = document.getElementById("home-header");
const colorPicker = document.querySelector(".color-picker");
homeheader === null || homeheader === void 0 ? void 0 : homeheader.addEventListener("mouseenter", (e) => {
    colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.classList.remove("hidden");
});
homeheader === null || homeheader === void 0 ? void 0 : homeheader.addEventListener("mouseleave", () => {
    colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.classList.add("hidden");
});
colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.addEventListener("click", (e) => {
    e.preventDefault();
    const color = e.target;
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
//# sourceMappingURL=script.js.map