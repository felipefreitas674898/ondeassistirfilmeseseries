const WHATSAPP_CONTACTS = [
  { number: "5519988741698", label: "(19) 98874-1698" },
  { number: "5519988712032", label: "(19) 98871-2032" },
  { number: "5519988123157", label: "(19) 98812-3157" },
  { number: "5519987508959", label: "(19) 98750-8959" },
  { number: "5519988792084", label: "(19) 98879-2084" }
];

const WHATSAPP_ROTATION_START = Date.UTC(2026, 3, 26);
const SAO_PAULO_DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

function getSaoPauloDateParts(date = new Date()) {
  const parts = {};
  SAO_PAULO_DATE_FORMATTER.formatToParts(date).forEach((part) => {
    if (part.type !== "literal") parts[part.type] = Number(part.value);
  });
  return parts;
}

function getCurrentWhatsappContact(date = new Date()) {
  const { year, month, day } = getSaoPauloDateParts(date);
  const currentDay = Date.UTC(year, month - 1, day);
  const elapsedDays = Math.floor((currentDay - WHATSAPP_ROTATION_START) / 86400000);
  const index = ((elapsedDays % WHATSAPP_CONTACTS.length) + WHATSAPP_CONTACTS.length) % WHATSAPP_CONTACTS.length;
  return WHATSAPP_CONTACTS[index];
}

function updateWhatsappLinks() {
  const contact = getCurrentWhatsappContact();

  document.querySelectorAll('a[href*="wa.me/"], a[href*="api.whatsapp.com/send"]').forEach((link) => {
    link.href = `https://wa.me/${contact.number}`;
    if (link.textContent.toLowerCase().includes("whatsapp")) {
      link.textContent = `WhatsApp: ${contact.label}`;
    }
  });

  document.querySelectorAll(".js-whatsapp-label").forEach((element) => {
    element.textContent = contact.label;
  });
}

function initWhatsappRotation() {
  updateWhatsappLinks();
  setInterval(updateWhatsappLinks, 60000);
}

const catalogoCompleto = [
  { id: 1, titulo: "Deadpool & Wolverine", ano: 2024, categoria: "Ação", onde: ["Disney+"], avaliacao: 8.0, sinopse: "Aventura de ação com humor e multiverso.", imagem: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&h=700&fit=crop" },
  { id: 2, titulo: "John Wick 4", ano: 2023, categoria: "Ação", onde: ["Plataformas digitais"], avaliacao: 8.9, sinopse: "John Wick enfrenta novos inimigos em uma jornada intensa.", imagem: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=700&fit=crop" },
  { id: 3, titulo: "The Boys", ano: 2024, categoria: "Ação", onde: ["Prime Video"], avaliacao: 9.0, sinopse: "Série sobre super-heróis corruptos e consequências sociais.", imagem: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=700&fit=crop" },
  { id: 4, titulo: "Garota Exemplar", ano: 2014, categoria: "Suspense", onde: ["Consultar plataformas oficiais"], avaliacao: 8.1, sinopse: "Mistério psicológico sobre desaparecimento e manipulação.", imagem: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=700&fit=crop" },
  { id: 5, titulo: "Sorria 2", ano: 2024, categoria: "Terror", onde: ["Paramount+", "Plataformas digitais"], avaliacao: 7.0, sinopse: "Terror sobrenatural com tensão psicológica.", imagem: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&h=700&fit=crop" },
  { id: 6, titulo: "A Freira 2", ano: 2023, categoria: "Terror", onde: ["Max", "Plataformas digitais"], avaliacao: 6.5, sinopse: "Continuação do universo de terror sobrenatural.", imagem: "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500&h=700&fit=crop" },
  { id: 7, titulo: "Divertida Mente 2", ano: 2024, categoria: "Animação", onde: ["Disney+"], avaliacao: 8.4, sinopse: "Novas emoções surgem na vida de Riley.", imagem: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=700&fit=crop" },
  { id: 8, titulo: "Kung Fu Panda 4", ano: 2024, categoria: "Animação", onde: ["Plataformas digitais"], avaliacao: 7.0, sinopse: "Po encara uma nova aventura como Guerreiro Dragão.", imagem: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=700&fit=crop" },
  { id: 9, titulo: "Patrulha Canina: O Super Filme", ano: 2023, categoria: "Infantil", onde: ["Paramount+", "Plataformas digitais"], avaliacao: 7.0, sinopse: "Aventuras infantis com os filhotes heróis.", imagem: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=700&fit=crop" },
  { id: 10, titulo: "Meu Malvado Favorito 4", ano: 2024, categoria: "Infantil", onde: ["Plataformas digitais"], avaliacao: 7.2, sinopse: "Gru e os Minions em nova aventura para toda a família.", imagem: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=700&fit=crop" },
  { id: 11, titulo: "Duna: Parte 2", ano: 2024, categoria: "Ficção", onde: ["Max", "Plataformas digitais"], avaliacao: 9.0, sinopse: "Épico de ficção científica no deserto de Arrakis.", imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=700&fit=crop" },
  { id: 12, titulo: "Alien: Romulus", ano: 2024, categoria: "Ficção", onde: ["Disney+", "Plataformas digitais"], avaliacao: 7.5, sinopse: "Novo capítulo da franquia Alien.", imagem: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=500&h=700&fit=crop" },
  { id: 13, titulo: "Barbie", ano: 2023, categoria: "Comédia", onde: ["Max", "Plataformas digitais"], avaliacao: 7.0, sinopse: "Comédia colorida sobre identidade, mundo real e imaginação.", imagem: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=700&fit=crop" },
  { id: 14, titulo: "Wonka", ano: 2023, categoria: "Aventura", onde: ["Max", "Plataformas digitais"], avaliacao: 7.5, sinopse: "A origem encantada de Willy Wonka.", imagem: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=500&h=700&fit=crop" },
  { id: 15, titulo: "Oppenheimer", ano: 2023, categoria: "Drama", onde: ["Plataformas digitais"], avaliacao: 9.0, sinopse: "Drama biográfico sobre J. Robert Oppenheimer.", imagem: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=700&fit=crop" },
  { id: 16, titulo: "The Last of Us", ano: 2023, categoria: "Drama", onde: ["Max"], avaliacao: 9.1, sinopse: "Série pós-apocalíptica baseada no jogo.", imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=700&fit=crop" },
  { id: 17, titulo: "House of the Dragon", ano: 2024, categoria: "Drama", onde: ["Max"], avaliacao: 8.8, sinopse: "Drama de fantasia sobre a casa Targaryen.", imagem: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=700&fit=crop" },
  { id: 18, titulo: "Fallout", ano: 2024, categoria: "Aventura", onde: ["Prime Video"], avaliacao: 8.5, sinopse: "Série de aventura pós-apocalíptica baseada no jogo.", imagem: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&h=700&fit=crop" }
];

let currentCategory = "todos";
let currentSearch = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function renderStars(rating) {
  const full = Math.round(rating / 2);
  let stars = "";
  for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
  for (let i = full; i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

function getFilteredCatalog() {
  return catalogoCompleto.filter((item) => {
    const matchesCategory = currentCategory === "todos" || item.categoria === currentCategory;
    const text = `${item.titulo} ${item.categoria} ${item.ano}`.toLowerCase();
    const matchesSearch = !currentSearch || text.includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderCards() {
  const grid = document.getElementById("allContentGrid");
  const resultCount = document.getElementById("resultCount");
  if (!grid || !resultCount) return;

  const filtered = getFilteredCatalog();

  resultCount.innerText = currentSearch
    ? `Resultados: ${filtered.length}`
    : `Mostrando ${filtered.length} títulos`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">Nenhum título encontrado. Tente outra busca ou categoria.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((item) => `
    <button class="movie-card" type="button" data-id="${item.id}">
      <div class="card-img" style="background-image: url('${escapeHTML(item.imagem)}');">
        <div class="rating-badge">⭐ ${escapeHTML(item.avaliacao)}</div>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(item.titulo)}</h3>
        <div class="card-meta">${escapeHTML(item.ano)} • ${escapeHTML(item.categoria)}</div>
        <div class="stars">${renderStars(item.avaliacao)}</div>
        <span class="btn-where">Saiba mais</span>
      </div>
    </button>
  `).join("");
}

function renderDetail(item) {
  const mainContent = document.getElementById("mainContent");
  const plataformas = item.onde
    .map(p => `<span class="platform-item">${escapeHTML(p)}</span>`)
    .join("");

  mainContent.innerHTML = `
    <div class="container">
      <section class="detail-page">
        <button id="backHomeBtn" class="back-btn" type="button">← Voltar</button>
        <div class="detail-header">
          <div class="detail-poster" style="background-image: url('${escapeHTML(item.imagem)}');"></div>
          <div>
            <h1>${escapeHTML(item.titulo)}</h1>
            <div style="margin:20px 0;">📅 ${escapeHTML(item.ano)} | 🎭 ${escapeHTML(item.categoria)} | ⭐ ${escapeHTML(item.avaliacao)}/10</div>
            <div class="stars">${renderStars(item.avaliacao)}</div>
            <h3>Sinopse</h3>
            <p>${escapeHTML(item.sinopse)}</p>
            <h3 style="margin-top: 20px;">Onde assistir</h3>
            <div class="platform-list" style="justify-content:flex-start;">${plataformas}</div>
            <p style="color:#94a3b8; margin-top:16px;">A disponibilidade pode variar. Confirme sempre diretamente na plataforma oficial.</p>
          </div>
        </div>
        <div style="background:#0b0f1c; border-left:4px solid #E50914; padding:18px; margin-top:20px;">
          <strong>🔒 Este site apenas recomenda plataformas oficiais.</strong>
        </div>
      </section>
    </div>
  `;

  document.getElementById("backHomeBtn").addEventListener("click", () => window.location.href = "/");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function runSearch() {
  const input = document.getElementById("searchInput");
  currentSearch = input ? input.value.trim() : "";
  renderCards();
  document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const msg = document.getElementById("contactMsg").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !phone || !msg) {
    formMessage.textContent = "Preencha todos os campos antes de enviar.";
    return;
  }

  const contact = getCurrentWhatsappContact();
  const message = `Olá! Meu nome é ${name}.\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${msg}`;
  const url = `https://api.whatsapp.com/send/?phone=${contact.number}&text=${encodeURIComponent(message)}`;

  formMessage.textContent = "Redirecionando para o WhatsApp...";
  window.location.href = url;
}

function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
  }
}

function initCatalog() {
  document.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.cat;
      document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards();
    });
  });

  const grid = document.getElementById("allContentGrid");
  if (grid) {
    grid.addEventListener("click", (event) => {
      const card = event.target.closest(".movie-card");
      if (!card) return;
      const item = catalogoCompleto.find(movie => movie.id === Number(card.dataset.id));
      if (item) renderDetail(item);
    });
    renderCards();
  }
}

function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn) searchBtn.addEventListener("click", runSearch);
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") runSearch();
    });
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", handleContactSubmit);
}

document.addEventListener("DOMContentLoaded", () => {
  initWhatsappRotation();
  initMenu();
  initSearch();
  initCatalog();
  initContactForm();
});
