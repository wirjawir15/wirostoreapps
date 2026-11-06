// GANTI NOMOR WHATSAPP DI SINI (format: 628xxx tanpa + atau 0 di depan)
const WHATSAPP_NUMBER = '6281234567890';

const productsData = {
    'alight-motion': {
        name: 'Alight Motion',
        icon: 'AM',
        description: 'Aplikasi editing video profesional dengan fitur premium lengkap untuk kreator konten.',
        features: ['No watermark', 'Semua fitur premium', 'Export 4K', 'Tanpa iklan'],
        packages: [
            { name: 'Paket Sharing', price: 4000, duration: '1 Tahun', badge: 'HEMAT', desc: 'Akun berbagi, cocok untuk penggunaan multi device.', features: ['Akses 1 Tahun', 'Banyak Device', 'Fitur Premium Penuh'] },
            { name: 'Paket Pribadi', price: 5000, duration: '1 Tahun', badge: 'RECOMMENDED', desc: 'Akun eksklusif hanya untuk penggunaan pribadi.', features: ['Akses 1 Tahun', 'Garansi Penuh', 'Fitur Premium Penuh', 'Private Login'] }
        ]
    },
    'capcut-pro': {
        name: 'CapCut Pro',
        icon: 'CC',
        description: 'Video editor dengan efek premium dan fitur AI canggih untuk hasil editing profesional.',
        features: ['Semua efek premium', 'No watermark', 'Cloud storage', 'Fitur AI'],
        packages: [
            { name: 'Paket 7 Hari', price: 17000, duration: '7 Hari', badge: 'TRIAL', desc: 'Coba fitur premium CapCut dalam waktu singkat.', features: ['Akses 7 Hari', 'Fitur Premium', 'Support Semua Perangkat'] },
            { name: 'Paket 1 Bulan', price: 22000, duration: '1 Bulan', badge: 'POPULER', desc: 'Paket bulanan dengan garansi dan dukungan penuh.', features: ['Akses 1 Bulan', 'Garansi 25 Hari', 'Support Semua Perangkat', 'Fitur Premium Penuh'] }
        ]
    },
    'chatgpt-plus': {
        name: 'ChatGPT Plus',
        icon: 'CG',
        description: 'Akses ChatGPT dengan model GPT-4, respons lebih cepat, dan fitur advanced untuk produktivitas maksimal.',
        features: ['Akses GPT-4', 'Respons lebih cepat', 'Fitur advanced', 'Plugin & tools'],
        packages: [
            { name: 'Paket 1 Bulan', price: 52000, duration: '1 Bulan', badge: 'PREMIUM', desc: 'Akses penuh ke semua kemampuan AI terbaru.', features: ['Akses 1 Bulan', 'Support Semua Perangkat', 'Akses GPT-4', 'Priority Access', 'Fitur Advanced'] }
        ]
    },
    'canva-pro': {
        name: 'Canva Pro',
        icon: 'CV',
        description: 'Design tool premium dengan ribuan template, elemen eksklusif, dan fitur penghapus latar.',
        features: ['Semua template pro', 'Background remover', 'Brand kit', 'Storage unlimited'],
        packages: [
            { name: 'Paket 1 Bulan', price: 8000, duration: '1 Bulan', badge: 'HEMAT', desc: 'Solusi desain jangka pendek dengan garansi.', features: ['Akses 1 Bulan', 'Garansi 25 Hari', 'Fitur Premium Penuh'] },
            { name: 'Paket 1 Tahun', price: 15000, duration: '1 Tahun', badge: 'BEST VALUE', desc: 'Solusi desain jangka panjang paling ekonomis.', features: ['Akses 1 Tahun', 'Garansi 10 Bulan', 'Fitur Premium Penuh', 'Storage Unlimited'] }
        ]
    },
    'netflix': {
        name: 'Netflix Premium',
        icon: 'NF',
        description: 'Streaming film dan series tanpa batas dengan kualitas HD hingga 4K tanpa gangguan iklan.',
        features: ['Full HD & 4K', 'Multi device', 'Download offline', 'Tanpa iklan'],
        packages: [
            { name: 'Paket 1 Bulan', price: 22000, duration: '1 Bulan', badge: 'POPULER', desc: 'Nonton film dan series terbaru dengan kualitas terbaik.', features: ['Akses 1 Bulan', 'Kualitas 4K', 'Support Semua Perangkat', 'Fitur Premium Penuh'] }
        ]
    },
    'gemini': {
        name: 'Gemini Advanced',
        icon: 'GM',
        description: 'AI assistant Google dengan kemampuan reasoning dan coding yang sangat powerful.',
        features: ['Gemini Ultra', 'Coding assistant', 'Reasoning advanced', 'Integration Google'],
        packages: [
            { name: 'Paket 1 Bulan', price: 32000, duration: '1 Bulan', badge: 'PREMIUM', desc: 'Maksimalkan produktivitas dengan AI Google tercanggih.', features: ['Akses 1 Bulan', 'Support Semua Perangkat', 'Akses Gemini Ultra', 'Fitur Premium Penuh'] }
        ]
    },
    'youtube-premium': {
        name: 'YouTube Premium',
        icon: 'YT',
        description: 'Nonton YouTube tanpa iklan dengan fitur download dan background play.',
        features: ['Bebas iklan', 'Download video', 'Background play', 'YouTube Music'],
        packages: [
            { name: 'Paket 1 Bulan', price: 13000, duration: '1 Bulan', badge: 'POPULER', desc: 'Pengalaman menonton YouTube tanpa gangguan.', features: ['Akses 1 Bulan', 'Support Semua Perangkat', 'YouTube Music Included', 'Fitur Premium Penuh'] }
        ]
    },
    'vidio-platinum': {
        name: 'Vidio Platinum',
        icon: 'VP',
        description: 'Streaming film, series, dan konten eksklusif Indonesia dengan kualitas terbaik.',
        features: ['Bebas iklan', 'Kualitas HD', 'Download offline', 'Konten eksklusif', 'Live streaming'],
        packages: [
            { name: 'Paket 1 Bulan', price: 33000, duration: '1 Bulan', badge: 'PREMIUM', desc: 'Akses penuh ke semua konten eksklusif Vidio.', features: ['Akses 1 Bulan', 'Support Semua Perangkat', 'Live Streaming', 'Fitur Premium Penuh'] }
        ]
    }
};

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderProductInfo(product) {
    const container = document.getElementById('productInfo');
    container.innerHTML = `
        <div class="product-info-icon">${product.icon}</div>
        <div class="product-info-content">
            <h1 class="product-info-name">${product.name}</h1>
            <p class="product-info-desc">${product.description}</p>
            <ul class="product-info-features">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderPricing(product) {
    const grid = document.getElementById('pricingGrid');
    grid.innerHTML = product.packages.map((pkg, index) => `
        <div class="pricing-card" style="animation-delay: ${0.1 + index * 0.1}s">
            <div class="pricing-card-header">
                <h4 class="pricing-card-name">${pkg.name}</h4>
                <span class="pricing-card-badge">${pkg.badge}</span>
            </div>
            <div class="pricing-card-price">
                <div class="price-label">Harga / ${pkg.duration}</div>
                <div class="price-value">
                    <span class="price-currency">Rp</span>${formatPrice(pkg.price)}
                </div>
            </div>
            <p class="pricing-card-desc">${pkg.desc}</p>
            <ul class="pricing-card-features">
                ${pkg.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <button class="btn-order" onclick="orderViaWA('${product.name}', '${pkg.name}', ${pkg.price})">
                Order via WhatsApp
            </button>
        </div>
    `).join('');
}

function orderViaWA(productName, packageName, price) {
    const message = `Halo Admin WiroStore.\n\nSaya ingin melakukan pemesanan:\nProduk: ${productName}\nPaket: ${packageName}\nHarga: Rp ${formatPrice(price)}\n\nMohon informasi ketersediaan stok dan metode pembayarannya. Terima kasih.`;
    
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
}

function goBack() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// --- Time & Status Logic (Sama dengan index) ---
function getWIBTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 7));
}

function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function updateLiveClock() {
    const clockEl = document.getElementById('liveClock');
    if (clockEl) clockEl.textContent = formatTime(getWIBTime()) + ' WIB';
}

function checkOperationalHours() {
    const wib = getWIBTime();
    const currentTime = wib.getHours() * 60 + wib.getMinutes();
    const isOpen = currentTime >= (7 * 60) && currentTime < (20 * 60);
    
    const onlineBadge = document.getElementById('onlineBadge');
    const mainStatusDot = document.getElementById('mainStatusDot');
    const onlineStatusText = document.getElementById('onlineStatusText');
    const statusIndicator = document.getElementById('statusIndicator');
    const statusLabel = document.getElementById('statusLabel');
    
    [onlineBadge, mainStatusDot, onlineStatusText, statusIndicator, statusLabel].forEach(el => {
        el.classList.remove('open', 'closed');
    });
    
    if (isOpen) {
        onlineBadge.classList.add('open');
        mainStatusDot.classList.add('open');
        onlineStatusText.classList.add('open');
        onlineStatusText.textContent = 'ONLINE';
        statusIndicator.classList.add('open');
        statusLabel.classList.add('open');
        statusLabel.textContent = 'BUKA SEKARANG';
    } else {
        onlineBadge.classList.add('closed');
        mainStatusDot.classList.add('closed');
        onlineStatusText.classList.add('closed');
        onlineStatusText.textContent = 'CLOSE';
        statusIndicator.classList.add('closed');
        statusLabel.classList.add('closed');
        statusLabel.textContent = 'TUTUP';
    }
}

function handleLoadingScreen() {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2800);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    const productId = getProductId();
    const product = productsData[productId];
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    document.title = `WiroStore - ${product.name}`;
    renderProductInfo(product);
    renderPricing(product);
    checkOperationalHours();
    updateLiveClock();
    handleLoadingScreen();
    
    setInterval(updateLiveClock, 1000);
    setInterval(checkOperationalHours, 60000);
});

document.documentElement.style.scrollBehavior = 'smooth';