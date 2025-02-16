const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const config = { threshold: 0.1 };

// Combined DOMContentLoaded handler
document.addEventListener("DOMContentLoaded", () => {
  // Combined animation handler using IntersectionObserver
  const animateOnScroll = (elements, animationClass) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(animationClass, entry.isIntersecting);
      });
    }, config);

    elements.forEach(el => observer.observe(el));
  };

  // Fade-in animations
  animateOnScroll(document.querySelectorAll(".fade-in, .country-card, .list-item"), "visible");

  // Rotating Quotes Animation
  const quotesSection = document.querySelector(".quotes-section");
  const quotes = document.querySelectorAll(".quote");
  let currentQuote = 0;
  let quoteInterval;

  const quoteObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      quotes[currentQuote].classList.add("active");
      quoteInterval = setInterval(showNextQuote, 5000);
    } else {
      clearInterval(quoteInterval);
    }
  }, { threshold: 0.5 });

  const showNextQuote = () => {
    quotes[currentQuote].classList.remove("active");
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add("active");
  };

  quoteObserver.observe(quotesSection);

  // Combined Filter and Search Functionality
  const filterElements = {
    reportCards: document.querySelectorAll(".report-card"),
    filterInputs: [document.getElementById("category-filter"), document.getElementById("search-input")]
  };

  const filterReports = () => {
    const category = (document.getElementById("category-filter").value || "").toLowerCase();
    const searchTerm = (document.getElementById("search-input").value || "").toLowerCase();

    filterElements.reportCards.forEach(card => {
      const categoryText = card.dataset.category?.toLowerCase() || "";
      const textContent = `${card.querySelector("h3").textContent} ${card.querySelector("p").textContent}`.toLowerCase();
      
      const matches = (!category || categoryText.includes(category)) && 
                     (!searchTerm || textContent.includes(searchTerm));
      
      card.style.display = matches ? "block" : "none";
    });
  };

  filterElements.filterInputs.forEach(input => 
    input.addEventListener(input.tagName === "SELECT" ? "change" : "input", filterReports)
  );

  // Menu functionality
  document.querySelector(".nav").addEventListener("click", event => {
    if (event.target.closest("a")) {
      navMenu.classList.remove("show");
      menuIcon.classList.remove("change");
    }
  });

  document.addEventListener("click", event => {
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("show");
      menuIcon.classList.remove("change");
    }
  });
});

// Menu toggle function
function toggleMenu() {
  menuIcon.classList.toggle("change");
  navMenu.classList.toggle("show");
}

// Session storage handling
window.addEventListener("load", () => {
  if (sessionStorage.getItem("menuVisible") === "true") {
    navMenu.classList.add("show");
  }
});

// Save menu state when closing
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("menuVisible", navMenu.classList.contains("show"));
});