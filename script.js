// Control del Menú Móvil
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Lógica del Carrusel Adaptativo
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

function getItemsVisible() {
  const width = window.innerWidth;
  if (width <= 576) return 1;
  if (width <= 768) return 2;
  if (width <= 1024) return 3;
  return 4;
}

function updateCarousel() {
  const itemWidth = document.querySelector(".carousel-item").offsetWidth + 20;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const visibleItems = getItemsVisible();
  const maxIndex = track.children.length - visibleItems;
  if (index < maxIndex) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  const visibleItems = getItemsVisible();
  if (index > 0) {
    index--;
  } else {
    index = track.children.length - visibleItems;
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  index = 0;
  updateCarousel();
});

// Datos para las Ventanas Modales de Mallas Curriculares
const planesEstudio = {
  sistemas: {
    titulo: "Sistemas Informáticos - Plan de Estudios",
    ciclos: [
      {
        nombre: "I Ciclo",
        cursos: [
          "Introducción a la Informática",
          "Arquitectura de hardware",
          "Ensamblaje de computadoras",
          "Sistemas Operativos",
        ],
      },
      {
        nombre: "II Ciclo",
        cursos: [
          "Entornos virtuales",
          "Ofimática",
          "Lógica de programación",
          "Fundamentos de Programación",
        ],
      },
      {
        nombre: "III Ciclo",
        cursos: [
          "Programación II",
          "Diseño y maquetación",
          "Desarrollo de páginas web",
          "Bases de Datos",
        ],
      },
      {
        nombre: "IV Ciclo",
        cursos: [
          "Fundamentos de Redes",
          "Instalación de redes LAN",
          "Seguridad Informática",
          "Diseño de proyectos Tecnológicos Socioprocutivos",
        ],
      },
    ],
  },
  matematicas: {
    titulo: "Matemáticas - Plan de Estudios",
    ciclos: [
      {
        nombre: "I Ciclo",
        cursos: [
          "Conjunto de números enteros",
          "Números racionales",
          "Operaciones con números reales",
          "Introducción al Álgebra",
        ],
      },
      {
        nombre: "II Ciclo",
        cursos: [
          "Productos y cocientes notables",
          "Factorización",
          "Ecuaciones de primer grado",
          "Inecuaciones lineales",
        ],
      },
      {
        nombre: "III Ciclo",
        cursos: [
          "Ecuaciones de segundo grado",
          "Geometría plana",
          "Trigonometría I",
          "Trigonometría II",
        ],
      },
      {
        nombre: "IV Ciclo",
        cursos: [
          "Geometría analítica",
          "Razones trigonométricas",
          "Funciones trigonométricas",
          "Cónicas en el plano",
        ],
      },
    ],
  },
  fisica: {
    titulo: "Física - Plan de Estudios",
    ciclos: [
      {
        nombre: "I Ciclo",
        cursos: [
          "Magnitudes físicas",
          "Teoría de errores",
          "Álgebra vectorial",
          "Cinemática",
        ],
      },
      {
        nombre: "II Ciclo",
        cursos: [
          "Cinemática II",
          "Cinemática III",
          "Movimientos parabólico",
          "Cinemática curvilinea",
        ],
      },
      {
        nombre: "III Ciclo",
        cursos: [
          "Dinámica lineal",
          "Dinámica Circular",
          "Estática",
          "Trabajo Mecánico",
        ],
      },
      {
        nombre: "IV Ciclo",
        cursos: [
          "Impulso y cantidad de movimiento",
          "Hidrostática",
          "Calorimetría",
          "Electrodinámica básica",
        ],
      },
    ],
  },
};

// Funciones para Abrir y Cerrar Modal
const planModal = document.getElementById("planModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

function openPlanModal(carrera) {
  const data = planesEstudio[carrera];
  if (!data) return;

  modalTitle.textContent = data.titulo;

  let htmlContent = "";
  data.ciclos.forEach((ciclo) => {
    htmlContent += `
          <div class="ciclo-group">
            <div class="ciclo-title">${ciclo.nombre}</div>
            <ul class="courses-list">
              ${ciclo.cursos.map((curso) => `<li>${curso}</li>`).join("")}
            </ul>
          </div>
        `;
  });

  modalContent.innerHTML = htmlContent;
  planModal.classList.add("active");
}

function closePlanModal() {
  planModal.classList.remove("active");
}

// Cerrar al hacer clic fuera del modal
planModal.addEventListener("click", (e) => {
  if (e.target === planModal) {
    closePlanModal();
  }
});
