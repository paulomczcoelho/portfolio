"use strict";
function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";

  textArray.forEach((letter, i) => {
    setTimeout(() => (el.innerHTML += letter), 95 * i);
  });

  setInterval(() => typeWriter(el), 8000);
}
typeWriter(elementE2);
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////

// // Get all overlay-content elements
const overlayContents = document.querySelectorAll(".overlay-content");
// Get all modal elements
const modals = document.querySelectorAll(".site-modal");
let conteinerWorks = document.querySelectorAll(".conteiner-works");

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

  if (window.innerWidth <= 700) {
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
      if (window.innerWidth > 500) {
        const overlay = siteWork.querySelector(".site-overlay");
        overlay.style.left = "0px";
        // siteWork.style.filter = "grayscale(0%)";
      }
    });

    siteWork.addEventListener("mouseleave", function () {
      if (window.innerWidth > 500) {
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

// ... (seu código existente)

// Seletor para todos os links do menu no menu mobile
const mobileMenuLinks = document.querySelectorAll(".nav a");

// Função para adicionar comportamento de rolagem suave aos links do menu mobile
function smoothScrollMobile(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    // Calcule o topo de destino com um deslocamento adicional para o título da seção
    const titleHeight = targetSection.querySelector("h1").offsetHeight; // Altura do título
    const targetTop = targetSection.offsetTop - titleHeight;

    // Feche o menu após clicar em um link (opcional)
    document.getElementById("menu-bar").classList.remove("change");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }
}

// Adicione evento de clique suave a cada link do menu mobile
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", smoothScrollMobile);
});

// Função para destacar o link ativo no menu mobile
function highlightActiveMobileLink() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollY = window.scrollY + window.innerHeight / 2;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      const targetLink = document.querySelector(
        `.nav a[href="#${section.id}"]`
      );

      if (targetLink) {
        mobileMenuLinks.forEach((link) => link.classList.remove("active"));
        targetLink.classList.add("active");
      }
    }
  });
}

// Adicione evento de rolagem para destacar o link ativo no menu mobile
window.addEventListener("scroll", highlightActiveMobileLink);

// ... (seu código existente)
