// SECTION LAYANAN SERABOK BERGERAK DARI KANAN KE KIRI
// Animasi Scroll Left Layanan SeraBok
const scrollLeft = document.getElementById("scroll-content");
scrollLeft.innerHTML += scrollLeft.innerHTML;

// SECTION LAYANAN
// Mengatur Aturan Muncul Tidaknya Konten Tab berdasarkan Klik
const tabButtons = document.querySelectorAll(".tab-slides-button button");
const layananTab = document.querySelector(".tab-content-layanan");
const serabutanTab = document.querySelector(".tab-content-serabutan");

layananTab.style.display = "flex";
serabutanTab.style.display = "none";
tabButtons[0].classList.add("active");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (button.classList.contains("slides-btn-layanan")) {
      layananTab.style.display = "flex";
      serabutanTab.style.display = "none";
    }
    else if (button.classList.contains("slides-btn-serabutan")) {
      serabutanTab.style.display = "flex";
      layananTab.style.display = "none";
    }
  });
});

// SECTION TESTIMONI
// SECTION TESTIMONI (RESPONSIF)
const container = document.querySelector(".testimonial_slides_wrapper"); // TARGET BARU: wrapper
const cards = document.querySelectorAll(".testimonial_card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const totalCards = cards.length;
const gap = 20;

// FUNGSI 1: Menentukan Kartu yang Terlihat (Responsif)
function getVisibleCards() {
  // Layar Lebar (Desktop): 3 kartu
  if (window.innerWidth >= 1024) return 3;
  // Layar Sedang/Kecil (Tablet/Mobile): 1 kartu
  return 1;
}

// FUNGSI 2: Mengupdate Posisi Geser
function updateSlide() {
  const visibleCards = getVisibleCards();
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  let moveX = 0;

  if (visibleCards === 3) {
    // Desktop: Geser 3 kartu (3 * 350px) + gap
    // Menggunakan nilai presisi untuk pergeseran 3 kartu
    moveX = index * 1110;
  } else {
    // Mobile/Tablet: Geser 1 kartu (350px) + gap (20px) = 370px
    moveX = index * (cardWidth + gap);
  }

  // Pastikan index tidak melebihi batas (bug fix saat resize)
  const maxIndex = Math.ceil(totalCards / visibleCards) - 1;
  if (index > maxIndex) { index = maxIndex; }

  container.style.transform = `translateX(-${moveX}px)`;
}

// Handler tombol (dengan logika responsif)
nextBtn.addEventListener("click", () => {
  const totalGroups = Math.ceil(totalCards / getVisibleCards());
  if (index < totalGroups - 1) {
    index++;
    updateSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
});

// Update saat load dan saat layar diubah ukurannya
updateSlide();
window.addEventListener('resize', () => {
  index = 0; // Reset index saat resize
  updateSlide();
});
// SECTION FAQ
// Ambil semua tombol pertanyaan FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Tambahkan event klik
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = answer.classList.contains('active');

    // Tutup semua jawaban lain
    document.querySelectorAll('.faq-answer').forEach((el) => el.classList.remove('active'));

    // Kalau belum aktif, buka
    if (!isActive) {
      answer.classList.add('active');
    }
  });
});

// SECTION BERITA
// Efek muncul ketika scroll
const fadeElements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // biar langsung muncul di awal

// Reaksi tombol "Selengkapnya"
const btnSelengkapnya = document.getElementById('btnSelengkapnya');
btnSelengkapnya.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});