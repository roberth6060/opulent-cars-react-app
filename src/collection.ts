/* ========= Collection Data and Functionality =========*/
const myList = [
  {
    carName: "2019 Toyota Supra",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585878339/001_za_1.png",
    carLbs: "365",
    carRwhp: "335",
    carPrice: "49,990",
    carType: "rwd",
  },
  {
    carName: "Lexus LFA",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585878341/2020LEC350003_1280_03_1.png",
    carLbs: "354",
    carRwhp: "553",
    carPrice: "375,000",
    carType: "rwd",
  },
  {
    carName: "Lamborghini Aventador",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585924300/lambo-transparent-side-view-10_1.png",
    carLbs: "507",
    carRwhp: "729",
    carPrice: "463,000",
    carType: "awd",
  },
  {
    carName: "Lamborghini Huracán",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585924351/137-1376257_the-last-true-supercar-lamborghini-huracan-left-side_1.png",
    carLbs: "398",
    carRwhp: "602",
    carPrice: "261,000",
    carType: "awd",
  },
  {
    carName: "Bugatti Chiron",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585924401/bugatti_PNG19_1.png",
    carLbs: "1,180",
    carRwhp: "1479",
    carPrice: "3,000,000",
    carType: "awd",
  },
  {
    carName: "Bugatti Veyron",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585924491/bugatti_PNG28_1.png",
    carLbs: "1,106",
    carRwhp: "1200",
    carPrice: "1,700,000",
    carType: "awd",
  },
  {
    carName: "McLaren P1",
    carImage: "",
    carLbs: "",
    carRwhp: "",
    carPrice: "",
    carType: "rwd",
  },
  {
    carName: "Ferrari F8 Spider",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1586466868/2020_24_1.png",
    carLbs: "568",
    carRwhp: "710",
    carPrice: "274,000",
    carType: "rwd",
  },
  {
    carName: "Ferrari LaFerrari",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1586467122/red-sports-car-png-4_1.png",
    carLbs: "664",
    carRwhp: "949",
    carPrice: "1,400,000",
    carType: "rwd",
  },
  {
    carName: "Koenigsegg Regera",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1586467369/Koenigsegg_Regera_side5_1.png",
    carLbs: "642",
    carRwhp: "700",
    carPrice: "1,900,000",
    carType: "rwd",
  },
  {
    carName: "2020 Toyota 86",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585878340/35565_preview_1.png",
    carLbs: "156",
    carRwhp: "205",
    carPrice: "27,060",
    carType: "rwd",
  },
  {
    carName: "2020 Toyota Corolla",
    carImage:
      "https://res.cloudinary.com/dmnixrpra/image/upload/v1585878224/2020-toyota-corolla-le-sideview_1.png",
    carLbs: "70",
    carRwhp: "132",
    carPrice: "19,600",
    carType: "fwd",
  },
];

const widget = document.querySelector(".js-widget") as HTMLElement;
const btn = document.querySelector(".button") as HTMLElement;
function buildList(carNum: number) {
  if (btn) {
    btn.outerHTML = "";
  }

  var widgetContent = "";

  let i = carNum;
  for (; i < carNum + 4; i++) {
    if (myList[i].carImage === "") {
      myList[i].carImage =
        "https://res.cloudinary.com/dmnixrpra/image/upload/v1585925027/IMAGE_COMING_SOON.png";
    }

    // detecting if rwd awd or fwd, assigning it to wheelType variable
    var wheelType = "";
    if (myList[i].carType == "rwd") {
      wheelType = " rwhp";
    } else if (myList[i].carType == "fwd") {
      wheelType = " fwhp";
    } else {
      wheelType = " hp";
    }

    // looping through each car list object
    widgetContent +=
      '<a class="car-link" href="url">' +
      '<div class="car-card">' +
      "<h2>" +
      myList[i].carName +
      "</h2>" +
      '<img src="' +
      myList[i].carImage +
      '">' +
      "<ul>" +
      "<li>" +
      myList[i].carLbs +
      " lb-ft" +
      "</li>" +
      "<li>" +
      myList[i].carRwhp +
      wheelType +
      "</li>" +
      "<li>" +
      "$" +
      myList[i].carPrice +
      "</li>" +
      "</ul>" +
      "</div>" +
      "</a>";
  }

  widget.insertAdjacentHTML("beforeend", widgetContent);
  var buttonContent = "";
  if (i < myList.length) {
    buttonContent +=
      '<button class="button" type="button" onclick="buildList(' +
      i +
      ')">More Cars</button>';
  }
  widget.insertAdjacentHTML("afterend", buttonContent);
}

buildList(0);
