{
  /* <script> */
}
ScrollReveal().reveal(".scroll1", {
  // duration: 1600,
  scale: 0.1,
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll2", {
  duration: 1600,
  // delay: 500,
  origin: "left",
  distance: "50px",
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll3", {
  duration: 1200,
  origin: "bottom",
  distance: "50px",
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll4", {
  duration: 1600,
  scale: 0.2,
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll5", {
  duration: 1000,
  origin: "top",
  distance: "100px",
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll6", {
  duration: 1200,
  origin: "right",
  distance: "50px",
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll8", {
  duration: 1300,
  origin: "top",
  distance: "100px",
  viewFactor: 0.2,
  reset: false,
});

ScrollReveal().reveal(".scroll9", {
  duration: 1600,
  origin: "top",
  distance: "100px",
  viewFactor: 0.2,
  reset: false,
});

function popupImage() {
  var popup = document.getElementById("js-popup");
  if (!popup) return;

  var blackBg = document.getElementById("js-black-bg");
  var closeBtn = document.getElementById("js-close-btn");
  var showBtn = document.getElementById("js-show-popup");

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener("click", function () {
      popup.classList.toggle("is-show");
    });
  }
}
popupImage();
// </script>

const number01 = Math.trunc(Math.random() * 17) + 5;

document.querySelector(`.ramdN`).textContent = number01;
