const stgPading = 50

$(".portfolio-carousel").owlCarousel({
  loop: false,
  dotsEach: false,
  margin: 20,
  stagePadding: 30,
  loop:false,
  items: 2,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 2
    },
    1000: {
      items: 3
    },
  },
});


