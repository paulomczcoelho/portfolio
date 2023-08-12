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
const closeButtons = document.querySelectorAll("#close-modal");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});
