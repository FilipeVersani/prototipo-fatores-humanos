// ============================================
// PROJETO PARA VIAJANTES - JAVASCRIPT (COM GERADOR AUTOMÁTICO)
// ============================================

// --- 1. DADOS DE REFERÊNCIA ---
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

// --- 2. EXPERIÊNCIAS "PREMIUM" (FEITAS À MÃO) ---
// Estas aparecem primeiro e têm descrições ricas.
const MANUAL_EXPERIENCES = [
    // MINAS GERAIS
    { id: 1, title: "Rota do Queijo da Canastra", location: "Minas Gerais", activity: "Gastronômica", profile: "Famílias com Crianças", rating: 4.9, reviews: 320, price: "R$ 150", image: "🧀", description: "Visita a fazendas premiadas com degustação." },
    { id: 2, title: "Ouro Preto Histórico", location: "Minas Gerais", activity: "Histórica", profile: "Idosos", rating: 4.8, reviews: 510, price: "R$ 100", image: "⛪", description: "Passeio guiado focado na arte barroca." },
    { id: 3, title: "Inhotim com Acessibilidade", location: "Minas Gerais", activity: "Cultural", profile: "Mobilidade Reduzida", rating: 5.0, reviews: 890, price: "R$ 220", image: "🎨", description: "Transporte em carrinhos elétricos pelas galerias." },
    { id: 4, title: "Trekking na Serra do Cipó", location: "Minas Gerais", activity: "Ecológica", profile: "Jovens Aventureiros", rating: 4.9, reviews: 210, price: "R$ 180", image: "🥾", description: "Trilha avançada por cachoeiras e cânions." },
    { id: 5, title: "Capitólio Romântico", location: "Minas Gerais", activity: "Ecológica", profile: "Casais", rating: 4.8, reviews: 340, price: "R$ 400", image: "🚤", description: "Lancha privativa nos cânions de Furnas." },

    // RIO DE JANEIRO
    { id: 6, title: "Confeitaria Colombo", location: "Rio de Janeiro", activity: "Gastronômica", profile: "Idosos", rating: 4.7, reviews: 600, price: "R$ 120", image: "☕", description: "Chá da tarde em prédio histórico." },
    { id: 7, title: "Museu do Amanhã", location: "Rio de Janeiro", activity: "Cultural", profile: "Mobilidade Reduzida", rating: 4.8, reviews: 950, price: "R$ 60", image: "🧬", description: "Arquitetura futurista com acessibilidade total." },
    { id: 8, title: "Asa Delta na Pedra Bonita", location: "Rio de Janeiro", activity: "Esportiva", profile: "Jovens Aventureiros", rating: 5.0, reviews: 120, price: "R$ 550", image: "🪂", description: "Voo duplo com vista panorâmica." },
    { id: 9, title: "Jardim Botânico", location: "Rio de Janeiro", activity: "Ecológica", profile: "Casais", rating: 4.9, reviews: 780, price: "R$ 70", image: "🌺", description: "Caminhada romântica pelo orquidário." },
    { id: 10, title: "Tour no Maracanã", location: "Rio de Janeiro", activity: "Esportiva", profile: "Famílias com Crianças", rating: 4.7, reviews: 890, price: "R$ 90", image: "⚽", description: "Visite o gramado do estádio mais famoso." },

    // SÃO PAULO
    { id: 11, title: "Escalada Pedra do Baú", location: "São Paulo", activity: "Esportiva", profile: "Jovens Aventureiros", rating: 4.9, reviews: 278, price: "R$ 250", image: "🧗", description: "Aventura desafiadora na Serra da Mantiqueira." },
    { id: 12, title: "Jantar às Escuras", location: "São Paulo", activity: "Gastronômica", profile: "Casais", rating: 4.6, reviews: 150, price: "R$ 300", image: "🍷", description: "Experiência sensorial única no centro." },
    { id: 13, title: "Parque Ibirapuera", location: "São Paulo", activity: "Ecológica", profile: "Famílias com Crianças", rating: 4.7, reviews: 2000, price: "Grátis", image: "🌳", description: "Piquenique e bicicletas em área verde." },
    { id: 14, title: "Pinacoteca do Estado", location: "São Paulo", activity: "Cultural", profile: "Idosos", rating: 4.9, reviews: 560, price: "R$ 30", image: "🖼️", description: "Arte brasileira em prédio com elevadores." },
    { id: 15, title: "Mercadão Municipal", location: "São Paulo", activity: "Gastronômica", profile: "Mobilidade Reduzida", rating: 4.7, reviews: 1500, price: "Variável", image: "🥪", description: "Famoso sanduíche de mortadela em local plano." },

    // BAHIA
    { id: 16, title: "Aula de Moqueca", location: "Bahia", activity: "Gastronômica", profile: "Famílias com Crianças", rating: 4.6, reviews: 156, price: "R$ 180", image: "🥘", description: "Culinária típica com chefs locais." },
    { id: 17, title: "Mergulho em Abrolhos", location: "Bahia", activity: "Ecológica", profile: "Jovens Aventureiros", rating: 4.9, reviews: 80, price: "R$ 450", image: "🐠", description: "Expedição nos recifes de corais." },
    { id: 18, title: "Pelourinho Acessível", location: "Bahia", activity: "Histórica", profile: "Mobilidade Reduzida", rating: 4.5, reviews: 110, price: "Grátis", image: "⛪", description: "Rota adaptada pelo centro histórico." },
    { id: 19, title: "Observação de Baleias", location: "Bahia", activity: "Ecológica", profile: "Idosos", rating: 4.8, reviews: 220, price: "R$ 250", image: "🐋", description: "Passeio de catamarã seguro e estável." },
    { id: 20, title: "Trancoso & Espelho", location: "Bahia", activity: "Cultural", profile: "Casais", rating: 4.9, reviews: 310, price: "R$ 150", image: "🏖️", description: "Charme nas praias do sul da Bahia." },

    // SANTA CATARINA
    { id: 21, title: "Cânion Itaimbezinho", location: "Santa Catarina", activity: "Ecológica", profile: "Jovens Aventureiros", rating: 4.9, reviews: 312, price: "R$ 200", image: "🌲", description: "Trilha intensa pela borda dos cânions." },
    { id: 22, title: "Oktoberfest Blumenau", location: "Santa Catarina", activity: "Cultural", profile: "Casais", rating: 4.8, reviews: 1200, price: "R$ 80", image: "🍺", description: "Camarote na maior festa alemã." },
    { id: 23, title: "Beto Carrero World", location: "Santa Catarina", activity: "Esportiva", profile: "Famílias com Crianças", rating: 4.8, reviews: 2500, price: "R$ 180", image: "🎡", description: "Diversão no maior parque temático." },
    { id: 24, title: "Rota Enxaimel", location: "Santa Catarina", activity: "Histórica", profile: "Idosos", rating: 4.9, reviews: 180, price: "Grátis", image: "🏘️", description: "Passeio tranquilo em Pomerode." },
    { id: 25, title: "Museu Oceanográfico", location: "Santa Catarina", activity: "Cultural", profile: "Mobilidade Reduzida", rating: 4.7, reviews: 300, price: "R$ 40", image: "🦀", description: "Museu amplo e acessível." }
];

// --- 3. GERADOR DE LACUNAS (PREENCHE O QUE FALTA) ---
function generateFullList() {
    let fullList = [...MANUAL_EXPERIENCES];
    let nextId = 100; // IDs gerados começam em 100

    // Para cada Local, Atividade e Perfil...
    LOCATIONS.forEach(loc => {
        ACTIVITIES.forEach(act => {
            PROFILES.forEach(prof => {
                
                // Verifica se já existe uma experiência manual para essa combinação
                const exists = MANUAL_EXPERIENCES.some(exp => 
                    exp.location === loc.label && 
                    exp.activity === act.label && 
                    exp.profile === prof.label
                );

                // Se não existe, cria uma genérica
                if (!exists) {
                    fullList.push({
                        id: nextId++,
                        title: `${act.label} em ${loc.label}`,
                        location: loc.label,
                        activity: act.label,
                        profile: prof.label,
                        rating: (4.0 + Math.random()).toFixed(1), // Nota aleatória entre 4.0 e 5.0
                        reviews: Math.floor(Math.random() * 100) + 10,
                        price: "R$ " + (Math.floor(Math.random() * 20) + 5) * 10, // Preço aleatório
                        image: act.icon, // Usa o ícone da atividade
                        description: `Uma experiência ${act.label.toLowerCase()} incrível preparada especialmente para ${prof.label.toLowerCase()}.`
                    });
                }
            });
        });
    });
    return fullList;
}

// Gera a lista completa (Manuais + Geradas)
const EXPERIENCES = generateFullList();

// --- 4. ESTADO DA APLICAÇÃO ---
let selectedActivity = null;
let selectedLocation = null;
let selectedProfile = null;
let searchTerm = "";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// --- 5. INICIALIZAÇÃO ---
function init() {
    renderFilters();
    renderExperiences();
    setupEventListeners();
}

// --- 6. EVENTOS ---
function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.querySelector(".search-input-group .btn-primary");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchTerm = e.target.value.toLowerCase();
            updateDisplay();
        });
        
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                updateDisplay();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            updateDisplay();
        });
    }
}

// --- 7. RENDERIZAÇÃO ---
function renderFilters() {
    const renderBtn = (list, type, handlerName) => list.map(item => `
        <button class="filter-btn ${type}" onclick="${handlerName}(${item.id})">
            ${item.icon} ${item.label}
        </button>
    `).join("");

    const actContainer = document.getElementById("activityFilters");
    if (actContainer) actContainer.innerHTML = renderBtn(ACTIVITIES, 'activity', 'filterByActivity');

    const locContainer = document.getElementById("locationFilters");
    if (locContainer) locContainer.innerHTML = renderBtn(LOCATIONS, 'location', 'filterByLocation');

    const profContainer = document.getElementById("profileFilters");
    if (profContainer) profContainer.innerHTML = renderBtn(PROFILES, 'profile', 'filterByProfile');
}

function filterByActivity(id) { selectedActivity = selectedActivity === id ? null : id; updateDisplay(); }
function filterByLocation(id) { selectedLocation = selectedLocation === id ? null : id; updateDisplay(); }
function filterByProfile(id) { selectedProfile = selectedProfile === id ? null : id; updateDisplay(); }

function getFilteredExperiences() {
    return EXPERIENCES.filter(exp => {
        const matchesSearch = exp.title.toLowerCase().includes(searchTerm) ||
            exp.description.toLowerCase().includes(searchTerm);
        
        const matchesActivity = !selectedActivity || ACTIVITIES[selectedActivity - 1].label === exp.activity;
        const matchesLocation = !selectedLocation || LOCATIONS[selectedLocation - 1].label === exp.location;
        const matchesProfile = !selectedProfile || PROFILES[selectedProfile - 1].label === exp.profile;

        return matchesSearch && matchesActivity && matchesLocation && matchesProfile;
    });
}

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
                        
                        <div class="card-tags" style="margin-bottom: 10px;">
                           <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #555;">
                                👥 ${exp.profile}
                           </span>
                        </div>

                        <div class="card-info">📍 ${exp.location}</div>
                        <div class="card-info">⭐ ${exp.rating} (${exp.reviews} avaliações)</div>
                        
                        <div class="card-footer">
                            <span class="card-price">${exp.price}</span>
                            <button class="heart-btn" onclick="toggleFavorite(${exp.id})" style="color: ${favorites.includes(exp.id) ? 'red' : 'inherit'}">
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

function updateDisplay() { renderExperiences(); }

function toggleFavorite(id) {
    if (favorites.includes(id)) favorites = favorites.filter(f => f !== id);
    else favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderExperiences();
}

function clearFilters() {
    selectedActivity = null;
    selectedLocation = null;
    selectedProfile = null;
    searchTerm = "";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";
    updateDisplay();
}

function updateFilterButtons() {
    document.querySelectorAll(".filter-btn.activity").forEach((btn, i) => btn.classList.toggle("active", selectedActivity === i + 1));
    document.querySelectorAll(".filter-btn.location").forEach((btn, i) => btn.classList.toggle("active", selectedLocation === i + 1));
    document.querySelectorAll(".filter-btn.profile").forEach((btn, i) => btn.classList.toggle("active", selectedProfile === i + 1));
}

document.addEventListener("DOMContentLoaded", init);