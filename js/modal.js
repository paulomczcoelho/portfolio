// document.addEventListener("DOMContentLoaded", function () {
//   const overlayContents = document.querySelectorAll(".overlay-content");

//   overlayContents.forEach((overlay, index) => {
//     overlay.addEventListener("click", () => {
//       const modal = document.getElementById(`modal-${index + 1}`);
//       modal.style.display = "block";

//       const closeButton = modal.querySelector(".close-btn");
//       closeButton.addEventListener("click", () => {
//         modal.style.display = "none";
//       });

//       window.addEventListener("click", (event) => {
//         if (event.target === modal) {
//           modal.style.display = "none";
//         }
//       });
//     });
//   });
// });

// Get all overlay-content elements
const overlayContents = document.querySelectorAll(".overlay-content");
// Get all modal elements
const modals = document.querySelectorAll(".site-modal");

// Add event listeners to each overlay-content
overlayContents.forEach((overlay, index) => {
  overlay.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

// Add event listeners to close buttons
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});
