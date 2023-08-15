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
  const allOverlays = document.querySelectorAll(".site-overlay");

  allOverlays.forEach((overlay) => {
    if (overlay !== element) {
      overlay.style.left = "-340px"; // Fechando o overlay
    }
  });

  if (window.innerWidth <= 500) {
    const overlay = element.querySelector(".site-overlay");
    overlay.style.left = "0px"; // Abrindo o overlay
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const allSiteWorks = document.querySelectorAll(
    ".sites-works-1, .sites-works-2, .sites-works-3, .sites-works-4, .sites-works-5, .sites-works-6, .sites-works-7, .sites-works-8, .sites-works-9"
  );

  allSiteWorks.forEach((siteWork) => {
    siteWork.addEventListener("mouseover", function () {
      if (window.innerWidth > 768) {
        const overlay = siteWork.querySelector(".site-overlay");
        overlay.style.left = "0px";
      }
    });

    siteWork.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        const overlay = siteWork.querySelector(".site-overlay");
        overlay.style.left = "-340px";
      }
    });
  });
});
