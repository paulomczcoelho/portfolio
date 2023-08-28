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

// Seletor para todos os links do menu
const menuLinks = document.querySelectorAll(".li-menu a");

// Função para adicionar comportamento de rolagem suave
function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
}

// Adicionar evento de clique suave a cada link
menuLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Função para destacar o link ativo
function highlightActiveLink() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollY = window.scrollY + window.innerHeight / 2; // Adicionei isso para calcular o centro da janela visível

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      const targetLink = document.querySelector(
        `.li-menu a[href="#${section.id}"]`
      );

      if (targetLink) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        targetLink.classList.add("active");
      }
    }
  });
}

// Adicionar evento de rolagem para destacar o link ativo
window.addEventListener("scroll", highlightActiveLink);

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
document
  .getElementById("download-button")
  .addEventListener("click", function () {
    // Redirecionar para o arquivo de currículo para download
    window.location.href = "resume.pdf";
  });
