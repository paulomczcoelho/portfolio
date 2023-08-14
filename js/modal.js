// // Get all overlay-content elements
const overlayContents = document.querySelectorAll(".overlay-content");
// Get all modal elements
const modals = document.querySelectorAll(".site-modal");

// Variable to keep track of the currently open modal
let openModalIndex = null;

// Function to close the currently open modal
function closeOpenModal() {
  if (openModalIndex !== null) {
    modals[openModalIndex].style.display = "none";
    openModalIndex = null;
  }
}

// Add event listeners to each overlay-content
overlayContents.forEach((overlay, index) => {
  overlay.addEventListener("click", () => {
    closeOpenModal();
    modals[index].style.display = "block";
    openModalIndex = index;
  });
});

// Add event listeners to close buttons
const closeButtons = document.querySelectorAll("#close-modal");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeOpenModal();
  });
});

function showOverlay(element) {
  if (window.innerWidth <= 768) {
    const overlay = element.querySelector(".site-overlay");
    overlay.style.left = "0px";
  }
}
