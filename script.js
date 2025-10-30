// ============================================
// PROJETO PARA VIAJANTES - JAVASCRIPT
// ============================================

// Data
const ACTIVITIES = [
    { id: 1, label: "Cultural", icon: "🏛️" },
    { id: 2, label: "Gastronômica", icon: "🍽️" },
    { id: 3, label: "Esportiva", icon: "⚽" },
    { id: 4, label: "Histórica", icon: "🏰" },
    { id: 5, label: "Ecológica", icon: "🌿" },
];

const LOCATIONS = [
    { id: 1, label: "Minas Gerais", icon: "📍" },
    { id: 2, label: "Rio de Janeiro", icon: "🏖️" },
    { id: 3, label: "São Paulo", icon: "🌆" },
    { id: 4, label: "Bahia", icon: "☀️" },
    { id: 5, label: "Santa Catarina", icon: "⛰️" },
];

const PROFILES = [
    { id: 1, label: "Famílias com Crianças", icon: "👨‍👩‍👧‍👦" },
    { id: 2, label: "Jovens Aventureiros", icon: "🧗" },
    { id: 3, label: "Idosos", icon: "👴" },
    { id: 4, label: "Mobilidade Reduzida", icon: "♿" },
    { id: 5, label: "Casais", icon: "💑" },
];

const EXPERIENCES = [
    {
        id: 1,
        title: "Fazenda de Queijo em Minas",
        location: "Minas Gerais",
        activity: "Gastronômica",
        profile: "Famílias com Crianças",
        rating: 4.8,
        reviews: 245,
        price: "R$ 150",
        image: "🧀",
        description: "Visita a uma tradicional fazenda de queijo com atividades lúdicas para crianças.",
    },
    {
        id: 2,
        title: "Trilha na Mata Atlântica",
        location: "Santa Catarina",
        activity: "Ecológica",
        profile: "Jovens Aventureiros",
        rating: 4.9,
        reviews: 312,
        price: "R$ 200",
        image: "🌲",
        description: "Trilha desafiadora com vistas panorâmicas e biodiversidade única.",
    },
    {
        id: 3,
        title: "Tour Histórico no Rio",
        location: "Rio de Janeiro",
        activity: "Histórica",
        profile: "Idosos",
        rating: 4.7,
        reviews: 189,
        price: "R$ 120",
        image: "🏛️",
        description: "Passeio confortável pelos principais pontos históricos da cidade.",
    },
    {
        id: 4,
        title: "Aula de Culinária Baiana",
        location: "Bahia",
        activity: "Gastronômica",
        profile: "Famílias com Crianças",
        rating: 4.6,
        reviews: 156,
        price: "R$ 180",
        image: "🍜",
        description: "Aprenda a preparar pratos típicos da culinária baiana com chefs locais.",
    },
    {
        id: 5,
        title: "Escalada em São Paulo",
        location: "São Paulo",
        activity: "Esportiva",
        profile: "Jovens Aventureiros",
        rating: 4.9,
        reviews: 278,
        price: "R$ 250",
        image: "🧗",
        description: "Escalada em rocha com instrutores certificados e equipamento completo.",
    },
    {
        id: 6,
        title: "Museu de Arte Moderna",
        location: "Rio de Janeiro",
        activity: "Cultural",
        profile: "Casais",
        rating: 4.5,
        reviews: 203,
        price: "R$ 80",
        image: "🎨",
        description: "Visita guiada pelo acervo de arte moderna com especialista.",
    },
];

// State
let selectedActivity = null;
let selectedLocation = null;
let selectedProfile = null;
let searchTerm = "";
let favorites = [];

// Initialize
function init() {
    renderFilters();
    renderExperiences();
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchTerm = e.target.value.toLowerCase();
            updateDisplay();
        });
    }
}

// Render Filters
function renderFilters() {
    // Activities
    const activityContainer = document.getElementById("activityFilters");
    if (activityContainer) {
        activityContainer.innerHTML = ACTIVITIES.map(a => `
            <button class="filter-btn activity" onclick="filterByActivity(${a.id})">
                ${a.icon} ${a.label}
            </button>
        `).join("");
    }

    // Locations
    const locationContainer = document.getElementById("locationFilters");
    if (locationContainer) {
        locationContainer.innerHTML = LOCATIONS.map(l => `
            <button class="filter-btn location" onclick="filterByLocation(${l.id})">
                ${l.icon} ${l.label}
            </button>
        `).join("");
    }

    // Profiles
    const profileContainer = document.getElementById("profileFilters");
    if (profileContainer) {
        profileContainer.innerHTML = PROFILES.map(p => `
            <button class="filter-btn profile" onclick="filterByProfile(${p.id})">
                ${p.icon} ${p.label}
            </button>
        `).join("");
    }
}

// Filter Functions
function filterByActivity(id) {
    selectedActivity = selectedActivity === id ? null : id;
    updateDisplay();
}

function filterByLocation(id) {
    selectedLocation = selectedLocation === id ? null : id;
    updateDisplay();
}

function filterByProfile(id) {
    selectedProfile = selectedProfile === id ? null : id;
    updateDisplay();
}

// Filter Experiences
function getFilteredExperiences() {
    return EXPERIENCES.filter(exp => {
        const matchesSearch = exp.title.toLowerCase().includes(searchTerm) ||
            exp.description.toLowerCase().includes(searchTerm);
        const matchesActivity = !selectedActivity || 
            ACTIVITIES[selectedActivity - 1].label === exp.activity;
        const matchesLocation = !selectedLocation || 
            LOCATIONS[selectedLocation - 1].label === exp.location;
        const matchesProfile = !selectedProfile || 
            PROFILES[selectedProfile - 1].label === exp.profile;

        return matchesSearch && matchesActivity && matchesLocation && matchesProfile;
    });
}

// Render Experiences
function renderExperiences() {
    const filtered = getFilteredExperiences();
    const grid = document.getElementById("experiencesGrid");
    const emptyState = document.getElementById("emptyState");
    const resultCount = document.getElementById("resultCount");

    if (resultCount) {
        resultCount.textContent = `${filtered.length} Experiência${filtered.length !== 1 ? 's' : ''} Encontrada${filtered.length !== 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
        if (grid) grid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
    } else {
        if (emptyState) emptyState.style.display = "none";
        if (grid) {
            grid.innerHTML = filtered.map(exp => `
                <div class="card">
                    <div class="card-image">${exp.image}</div>
                    <div class="card-content">
                        <h3 class="card-title">${exp.title}</h3>
                        <p class="card-description">${exp.description}</p>
                        <div class="card-info">📍 ${exp.location}</div>
                        <div class="card-info">⭐ ${exp.rating} (${exp.reviews} avaliações)</div>
                        <div class="card-footer">
                            <span class="card-price">${exp.price}</span>
                            <button class="heart-btn" onclick="toggleFavorite(${exp.id})">
                                ${favorites.includes(exp.id) ? '❤️' : '🤍'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join("");
        }
    }

    updateFilterButtons();
}

// Update Display
function updateDisplay() {
    renderExperiences();
}

// Toggle Favorite
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    renderExperiences();
}

// Clear Filters
function clearFilters() {
    selectedActivity = null;
    selectedLocation = null;
    selectedProfile = null;
    searchTerm = "";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";
    updateDisplay();
}

// Update Filter Buttons
function updateFilterButtons() {
    document.querySelectorAll(".filter-btn.activity").forEach((btn, i) => {
        btn.classList.toggle("active", selectedActivity === i + 1);
    });
    document.querySelectorAll(".filter-btn.location").forEach((btn, i) => {
        btn.classList.toggle("active", selectedLocation === i + 1);
    });
    document.querySelectorAll(".filter-btn.profile").forEach((btn, i) => {
        btn.classList.toggle("active", selectedProfile === i + 1);
    });
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", init);
