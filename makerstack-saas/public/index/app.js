document.addEventListener("DOMContentLoaded", () => {

  console.log("🚀 Enviagora RH iniciado com sucesso!");

  initializeSidebar();
  initializeSearch();
  initializeFilters();
  initializeCardsAnimation();
  initializeProgressBars();
  initializeTableHover();
  initializeLoginValidation();
  initializeNotifications();

});

function initializeSidebar() {

  const links = document.querySelectorAll(".sidebar nav a");

  links.forEach(link => {

    link.addEventListener("click", () => {

      links.forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });

}


function initializeSearch() {

  const searchInputs = document.querySelectorAll(
    ".search-box input, .candidate-search input"
  );

  searchInputs.forEach(input => {

    input.addEventListener("keyup", () => {

      const value = input.value.toLowerCase();

      const rows = document.querySelectorAll("tbody tr");

      rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        if (text.includes(value)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }

      });

    });

  });

}


function initializeFilters() {

  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      buttons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

    });

  });

}

function initializeCardsAnimation() {

  const cards = document.querySelectorAll(".card, .test-card, .box");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {

      card.style.transition = "0.5s ease";

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }, index * 100);

  });

}


function initializeProgressBars() {

  const bars = document.querySelectorAll(".progress-bar, .bar");

  bars.forEach(bar => {

    const value = bar.dataset.progress;

    if (value) {

      setTimeout(() => {
        bar.style.width = value + "%";
      }, 300);

    }

  });

}


function initializeTableHover() {

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {

    row.addEventListener("mouseenter", () => {
      row.style.transform = "scale(1.01)";
      row.style.transition = "0.2s";
    });

    row.addEventListener("mouseleave", () => {
      row.style.transform = "scale(1)";
    });

  });

}


function initializeLoginValidation() {

  const loginForm = document.querySelector("form");

  if (!loginForm) return;

  loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");

    if (!email.value || !password.value) {

      showNotification(
        "⚠️ Preencha todos os campos!",
        "warning"
      );

      return;

    }

    if (!validateEmail(email.value)) {

      showNotification(
        "❌ E-mail inválido!",
        "error"
      );

      return;

    }

    showNotification(
      "✅ Login realizado com sucesso!",
      "success"
    );

    setTimeout(() => {

      window.location.href = "dashboard.html";

    }, 1500);

  });

}

function validateEmail(email) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

}

function initializeNotifications() {

  const notificationContainer =
    document.createElement("div");

  notificationContainer.classList.add(
    "notification-container"
  );

  document.body.appendChild(notificationContainer);

}

function showNotification(message, type) {

  const notification =
    document.createElement("div");

  notification.classList.add(
    "notification",
    type
  );

  notification.innerHTML = `
    <span>${message}</span>
  `;

  const container =
    document.querySelector(
      ".notification-container"
    );

  container.appendChild(notification);

  setTimeout(() => {

    notification.classList.add("show");

  }, 100);

  setTimeout(() => {

    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 300);

  }, 3000);

}

const darkModeButton =
  document.querySelector(".dark-mode-btn");

if (darkModeButton) {

  darkModeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );

  });

}

window.addEventListener("load", () => {

  const darkMode =
    localStorage.getItem("darkMode");

  if (darkMode === "true") {

    document.body.classList.add("dark-mode");

  }

});


function animateCounters() {

  const counters =
    document.querySelectorAll(".counter");

  counters.forEach(counter => {

    const target =
      Number(counter.dataset.target);

    let current = 0;

    const increment =
      target / 60;

    const updateCounter = () => {

      current += increment;

      if (current < target) {

        counter.innerText =
          Math.floor(current);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

}

animateCounters();


const mobileMenu =
  document.querySelector(".mobile-menu");

const sidebar =
  document.querySelector(".sidebar");

if (mobileMenu && sidebar) {

  mobileMenu.addEventListener("click", () => {

    sidebar.classList.toggle("show-sidebar");

  });

}


const paginationButtons =
  document.querySelectorAll(".page-btn");

paginationButtons.forEach(button => {

  button.addEventListener("click", () => {

    paginationButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });

});

function generateRandomMatch() {

  const matches =
    document.querySelectorAll(".match-score");

  matches.forEach(match => {

    const value =
      Math.floor(Math.random() * 21) + 75;

    match.innerText = `${value}%`;

    if (value >= 85) {
      match.style.color = "#57b857";
    }

    if (value < 85 && value >= 75) {
      match.style.color = "#ff9e6e";
    }

    if (value < 75) {
      match.style.color = "#a855f7";
    }

  });

}

generateRandomMatch();


window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  if (loader) {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }

});


window.addEventListener("scroll", () => {

  const elements =
    document.querySelectorAll(".animate-scroll");

  elements.forEach(element => {

    const position =
      element.getBoundingClientRect().top;

    const screenPosition =
      window.innerHeight / 1.2;

    if (position < screenPosition) {

      element.classList.add("active-animation");

    }

  });

});


function updateClock() {

  const clock =
    document.querySelector(".clock");

  if (!clock) return;

  const now = new Date();

  const hours =
    now.getHours().toString().padStart(2, "0");

  const minutes =
    now.getMinutes().toString().padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}`;

}

setInterval(updateClock, 1000);


console.log("💚 Sistema SaaS RH carregado!");