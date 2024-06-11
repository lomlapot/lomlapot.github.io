if ($(window).width() > 1024) {
  $("body").parallax({
    elements: [
      {
        selector: ".container",
        properties: {
          x: {
            left: {
              initial: 0,
              multiplier: 0.03,
              unit: "px",
              invert: false,
            },
          },
          y: {
            top: {
              initial: 0,
              multiplier: 0.03,
              unit: "px",
              invert: false,
            },
          },
        },
      },

      {
        selector: ".stars",
        properties: {
          x: {
            left: {
              initial: 0,
              multiplier: 0.04,
              unit: "px",
              invert: true,
            },
          },
          y: {
            top: {
              initial: 0,
              multiplier: 0.03,
              unit: "px",
              invert: true,
            },
          },
        },
      },
    ],
  });
} else {
  // change functionality for larger screens
}
