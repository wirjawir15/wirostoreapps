const products = [
    {
        id: 'alight-motion',
        name: 'Alight Motion',
        icon: 'AM',
        description: 'Aplikasi editing video profesional dengan fitur premium lengkap untuk kreator konten',
        features: ['No watermark', 'Semua fitur premium', 'Export 4K', 'Tanpa iklan']
    },
    {
        id: 'capcut-pro',
        name: 'CapCut Pro',
        icon: 'CC',
        description: 'Video editor dengan efek premium dan fitur AI canggih',
        features: ['Semua efek premium', 'No watermark', 'Cloud storage', 'Fitur AI']
    },
    {
        id: 'chatgpt-plus',
        name: 'ChatGPT Plus',
        icon: 'CG',
        description: 'Akses ChatGPT dengan model GPT-4, respons lebih cepat, dan fitur advanced',
        features: ['Akses GPT-4', 'Respons lebih cepat', 'Fitur advanced', 'Plugin & tools', 'Priority access']
    },
    {
        id: 'canva-pro',
        name: 'Canva Pro',
        icon: 'CV',
        description: 'Design tool premium dengan ribuan template dan elemen eksklusif',
        features: ['Semua template pro', 'Background remover', 'Brand kit', 'Storage unlimited']
    },
    {
        id: 'netflix',
        name: 'Netflix Premium',
        icon: 'NF',
        description: 'Streaming film dan series tanpa batas dengan kualitas HD/4K',
        features: ['Full HD & 4K', 'Multi device', 'Download offline', 'Tanpa iklan']
    },
    {
        id: 'gemini',
        name: 'Gemini Advanced',
        icon: 'GM',
        description: 'AI assistant Google dengan kemampuan reasoning dan coding yang powerful',
        features: ['Gemini Ultra', 'Coding assistant', 'Reasoning advanced', 'Integration Google', 'Priority features']
    },
    {
        id: 'youtube-premium',
        name: 'YouTube Premium',
        icon: 'YT',
        description: 'Nonton YouTube tanpa iklan dengan fitur download dan background play',
        features: ['Bebas iklan', 'Download video', 'Background play', 'YouTube Music']
    },
    {
        id: 'vidio-platinum',
        name: 'Vidio Platinum',
        icon: 'VP',
        description: 'Streaming film, series, dan konten eksklusif Indonesia dengan kualitas terbaik',
        features: ['Bebas iklan', 'Kualitas HD', 'Download offline', 'Konten eksklusif', 'Live streaming']
    }
];

// Test mode state (null = auto/real-time)
let forceStatusMode = null;

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <ul class="product-features">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn-detail" onclick="goToDetail('${product.id}')">
                Lihat Detail
            </button>
        `;
        
        grid.appendChild(card);
    });
}

function goToDetail(productId) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = `detail.html?id=${productId}`;
    }, 300);
}

function getWIBTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const wib = new Date(utc + (3600000 * 7));
    return wib;
}

function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function updateLiveClock() {
    const wib = getWIBTime();
    const clockEl = document.getElementById('liveClock');
    if (clockEl) {
        clockEl.textContent = formatTime(wib) + ' WIB';
    }
}

function checkOperationalHours() {
    const wib = getWIBTime();
    const hours = wib.getHours();
    const minutes = wib.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    const openTime = 7 * 60;
    const closeTime = 20 * 60;
    
    let isOpen;
    
    // Jika ada force mode, pakai itu
    if (forceStatusMode === 'open') {
        isOpen = true;
    } else if (forceStatusMode === 'close') {
        isOpen = false;
    } else {
        // Auto real-time
        isOpen = currentTime >= openTime && currentTime < closeTime;
    }
    
    // Update main online badge
    const onlineBadge = document.getElementById('onlineBadge');
    const mainStatusDot = document.getElementById('mainStatusDot');
    const onlineStatusText = document.getElementById('onlineStatusText');
    
    // Reset classes
    onlineBadge.classList.remove('open', 'closed');
    mainStatusDot.classList.remove('open', 'closed');
    onlineStatusText.classList.remove('open', 'closed');
    
    if (isOpen) {
        onlineBadge.classList.add('open');
        mainStatusDot.classList.add('open');
        onlineStatusText.classList.add('open');
        onlineStatusText.textContent = 'ONLINE';
    } else {
        onlineBadge.classList.add('closed');
        mainStatusDot.classList.add('closed');
        onlineStatusText.classList.add('closed');
        onlineStatusText.textContent = 'CLOSE';
    }
    
    // Update footer status
    const statusIndicator = document.getElementById('statusIndicator');
    const statusLabel = document.getElementById('statusLabel');
    
    statusIndicator.classList.remove('open', 'closed');
    statusLabel.classList.remove('open', 'closed');
    
    if (isOpen) {
        statusIndicator.classList.add('open');
        statusLabel.classList.add('open');
        statusLabel.textContent = forceStatusMode ? 'BUKA (FORCED)' : 'BUKA SEKARANG';
    } else {
        statusIndicator.classList.add('closed');
        statusLabel.classList.add('closed');
        statusLabel.textContent = forceStatusMode ? 'TUTUP (FORCED)' : 'TUTUP';
    }
}

// Force status untuk test
function forceStatus(mode) {
    forceStatusMode = mode;
    checkOperationalHours();
    
    // Simpan ke localStorage agar persist saat reload
    if (mode === 'auto') {
        localStorage.removeItem('wirostore_force_status');
    } else {
        localStorage.setItem('wirostore_force_status', mode);
    }
}

function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2800);
}

function initTestMode() {
    const params = new URLSearchParams(window.location.search);
    const testPanel = document.getElementById('testPanel');
    
    // Cek apakah test mode aktif (via URL atau localStorage)
    const isTestMode = params.get('test') === '1';
    
    if (isTestMode) {
        testPanel.style.display = 'block';
        
        // Load force status dari localStorage jika ada
        const savedStatus = localStorage.getItem('wirostore_force_status');
        if (savedStatus && (savedStatus === 'open' || savedStatus === 'close')) {
            forceStatusMode = savedStatus;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    
    renderProducts();
    initTestMode();
    checkOperationalHours();
    updateLiveClock();
    handleLoadingScreen();
    
    // Update setiap detik (untuk live clock)
    setInterval(() => {
        updateLiveClock();
    }, 1000);
    
    // Update status setiap menit
    setInterval(checkOperationalHours, 60000);
});

document.documentElement.style.scrollBehavior = 'smooth';