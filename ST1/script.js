/* =========================================================
   SEMINAR DATA
========================================================= */

const experiences = [
    {
        id: 1,
        title: "Seminar 1",
        category: "Technology",
        date: "12/09/2026",
        description: "Overview and insights from Seminar 1.",
        purpose: "Explain why the event was conducted and what participants were expected to learn.",
        learned: "Personal reflection and key technical concepts learned during Seminar 1.",
        takeaways: [
            "Key takeaway #1 from Seminar 1",
            "Key takeaway #2 from Seminar 1",
            "Key takeaway #3 from Seminar 1",
            "Key takeaway #4 from Seminar 1"
        ],
        image: "seminar1_pic1.png",
        photos: [
            "seminar1_pic1.png", "seminar1_pic2.png", "seminar1_pic3.png", 
            "seminar1_pic4.png", "seminar1_pic5.png", "seminar1_pic6.png", 
            "seminar1_pic7.png", "seminar1_pic8.png", "seminar1_pic9.png", 
            "seminar1_pic10.png"
        ],
        certificate: "seminar1_photo.png",
        badge: "seminar1_badge.png",
        certLink: "cert link1.txt"
    },
    {
        id: 2,
        title: "Seminar 2",
        category: "Leadership",
        date: "11/09/2026",
        description: "Overview and insights from Seminar 2.",
        purpose: "Describe the seminar's purpose.",
        learned: "Describe personal learnings from Seminar 2.",
        takeaways: [
            "Key takeaway #1 from Seminar 2",
            "Key takeaway #2 from Seminar 2",
            "Key takeaway #3 from Seminar 2"
        ],
        image: "seminar2_pic1.jpg",
        photos: [
            "seminar2_pic1.jpg", "seminar2_pic2.jpg"
        ],
        certificate: "seminar2_certificate.png",
        badge: null,
        certLink: null
    },
    {
        id: 3,
        title: "Seminar 3",
        category: "Tour",
        date: "22/08/2026",
        description: "Overview and insights from Seminar 3 / Educational Tour.",
        purpose: "Describe why the tour was conducted.",
        learned: "Describe personal observations and learnings.",
        takeaways: [
            "Key takeaway #1 from Seminar 3",
            "Key takeaway #2 from Seminar 3",
            "Key takeaway #3 from Seminar 3"
        ],
        image: "seminar3_pic1.png",
        photos: [
            "seminar3_pic1.png", "seminar3_pic2.png", "seminar3_pic3.png", 
            "seminar3_pic4.png", "seminar3_pic5.png", "seminar3_pic6.jpg", 
            "seminar3_pic7.png", "seminar3_pic8.png", "seminar3_pic9.png", 
            "seminar3_pic10.png", "seminar3_pic11.png"
        ],
        certificate: "seminar3_photo.png",
        badge: "seminar3_badge.png",
        certLink: "cert link3.txt"
    },
    {
        id: 4,
        title: "Seminar 4",
        category: "Technology",
        date: "22/09/2026",
        description: "Overview and insights from Seminar 4.",
        purpose: "Describe why the event was conducted.",
        learned: "Describe personal learnings from Seminar 4.",
        takeaways: [
            "Key takeaway #1 from Seminar 4",
            "Key takeaway #2 from Seminar 4",
            "Key takeaway #3 from Seminar 4"
        ],
        image: "seminar4_pic1.jpg",
        photos: [
            "seminar4_pic1.jpg", "seminar4_pic2.jpg", "seminar4_pic3.jpg", 
            "seminar4_pic4.jpg", "seminar4_pic5.jpg", "seminar4_pic6.jpg", 
            "seminar4_pic7.jpg", "seminar4_pic8.jpg", "seminar4_pic9.png"
        ],
        certificate: "seminar4_photo.png",
        badge: null,
        certLink: null
    },
    {
        id: 5,
        title: "Seminar 5",
        category: "Leadership",
        date: "13/09/2026",
        description: "Overview and insights from Seminar 5.",
        purpose: "Describe the seminar's purpose.",
        learned: "Describe personal learnings from Seminar 5.",
        takeaways: [
            "Key takeaway #1 from Seminar 5",
            "Key takeaway #2 from Seminar 5",
            "Key takeaway #3 from Seminar 5"
        ],
        image: "seminar5_pic1.png",
        photos: [
            "seminar5_pic1.png", "seminar5_pic2.png", "seminar5_pic3.png", "seminar5_pic4.png"
        ],
        certificate: "seminar5_photo.png",
        badge: "seminar5_badge.png",
        certLink: "Cert Link5.txt"
    },
    {
        id: 6,
        title: "Seminar 6",
        category: "Technology",
        date: "11/09/2026",
        description: "Overview and insights from Seminar 6.",
        purpose: "Describe the seminar's purpose.",
        learned: "Describe personal learnings from Seminar 6.",
        takeaways: [
            "Key takeaway #1 from Seminar 6",
            "Key takeaway #2 from Seminar 6",
            "Key takeaway #3 from Seminar 6"
        ],
        image: "seminar6_pic1.png",
        photos: [
            "seminar6_pic1.png", "seminar6_pic2.png", "seminar6_pic3.png", 
            "seminar6_pic4.png", "seminar6_pic5.png", "seminar6_pic6.png"
        ],
        certificate: "seminar6_photo.png",
        badge: "seminar6_badge.png",
        certLink: "cert link6.txt"
    },
    {
        id: 7,
        title: "Seminar 7",
        category: "Leadership",
        date: "22/09/2026",
        description: "Overview and insights from Seminar 7.",
        purpose: "Describe the seminar's purpose.",
        learned: "Describe personal learnings from Seminar 7.",
        takeaways: [
            "Key takeaway #1 from Seminar 7",
            "Key takeaway #2 from Seminar 7",
            "Key takeaway #3 from Seminar 7"
        ],
        image: "seminar7_pic1.png",
        photos: [
            "seminar7_pic1.png", "seminar7_pic2.jpg", "seminar7_pic3.jpg", "seminar7_pic4.jpg"
        ],
        certificate: "seminar7_photo.png",
        badge: null,
        certLink: null
    },
    {
        id: 8,
        title: "Seminar 8",
        category: "Technology",
        date: "20/08/2026",
        description: "Overview and insights from Seminar 8.",
        purpose: "Describe the seminar's purpose.",
        learned: "Describe personal learnings from Seminar 8.",
        takeaways: [
            "Key takeaway #1 from Seminar 8",
            "Key takeaway #2 from Seminar 8",
            "Key takeaway #3 from Seminar 8"
        ],
        image: "seminar8_pic1.png",
        photos: [
            "seminar8_pic1.png", "seminar8_pic2.png", "seminar8_pic3.png", 
            "seminar8_pic4.png", "seminar8_pic5.png", "seminar8_pic6.png", 
            "seminar8_pic7.png", "seminar8_pic8.png", "seminar8_pic9.jpg"
        ],
        certificate: "seminar8_certificate.png",
        badge: null,
        certLink: null
    }
];


/* =========================================================
   CATEGORY FILTERS
========================================================= */

const categories = [
    "All",
    ...new Set(experiences.map(experience => experience.category))
];

const grid = document.getElementById("experienceGrid");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");

let selectedCategory = "All";


/* =========================================================
   RENDER FILTER BUTTONS
========================================================= */

function renderFilters() {
    filters.innerHTML = categories.map(category => `
        <button
            class="filter ${category === selectedCategory ? "active" : ""}"
            data-category="${category}"
        >
            ${category}
        </button>
    `).join("");

    filters.querySelectorAll(".filter").forEach(button => {
        button.addEventListener("click", () => {
            selectedCategory = button.dataset.category;
            renderFilters();
            renderExperiences();
        });
    });
}


/* =========================================================
   RENDER SEMINARS
========================================================= */

function renderExperiences() {
    const search = searchInput.value.toLowerCase().trim();

    const filtered = experiences.filter(experience => {
        const matchesCategory = selectedCategory === "All" || experience.category === selectedCategory;
        const matchesSearch = `${experience.title} ${experience.category} ${experience.description}`.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map(experience => `
        <article class="experience-card reveal visible">
            <div class="experience-cover">
                ${experience.image ? `<img src="${experience.image}" alt="${experience.title}">` : `<span class="slot-label">PHOTO SLOT</span>`}
            </div>

            <div class="experience-body">
                <span class="tag">${experience.category}</span>
                <h3>${experience.title}</h3>
                <div class="date">${experience.date}</div>
                <p>${experience.description}</p>

                <div class="experience-footer">
                    <span class="date">${experience.takeaways.length} takeaways</span>
                    <button class="view-btn" onclick="openExperience(${experience.id})">
                        VIEW EXPERIENCE →
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    if (!filtered.length) {
        grid.innerHTML = `<p style="color:var(--muted)">No experiences found.</p>`;
    }
}


/* =========================================================
   SEMINAR MODAL
========================================================= */

function openExperience(id) {
    const experience = experiences.find(item => item.id === id);
    const modal = document.getElementById("experienceModal");

    document.getElementById("modalContent").innerHTML = `
        <div class="modal-image">
            ${experience.image ? `<img src="${experience.image}" alt="${experience.title}">` : `<span class="slot-label">SEMINAR PHOTO SLOT</span>`}
        </div>

        <div class="modal-body">
            <p class="kicker">${experience.category}</p>
            <h2>${experience.title}</h2>
            <div class="meta">${experience.date}</div>

            <div class="detail">
                <h4>ABOUT THE EXPERIENCE</h4>
                <p>${experience.description}</p>
            </div>

            <div class="detail">
                <h4>PURPOSE OF THE SEMINAR / TOUR</h4>
                <p>${experience.purpose}</p>
            </div>

            <div class="detail">
                <h4>WHAT I LEARNED</h4>
                <p>${experience.learned}</p>
            </div>

            <div class="detail">
                <h4>KEY TAKEAWAYS</h4>
                <div class="takeaways">
                    ${experience.takeaways.map(takeaway => `<div class="takeaway">✓ ${takeaway}</div>`).join("")}
                </div>
            </div>

            <div class="detail">
                <h4>CERTIFICATE & BADGE</h4>
                <p>
                    ${experience.certificate ? `<a href="${experience.certificate}" target="_blank">View Certificate</a>` : "No certificate for this experience."}
                    ${experience.badge ? ` | <a href="${experience.badge}" target="_blank">View Badge</a>` : ""}
                </p>
            </div>

            <a class="btn primary" href="#gallery" onclick="closeExperience(); openAlbum(${experience.id});">
                View Photo Album (${experience.photos ? experience.photos.length : 0} Photos) →
            </a>
        </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeExperience() {
    const modal = document.getElementById("experienceModal");
    modal.classList.remove("open");
}

document.getElementById("modalClose").addEventListener("click", closeExperience);
document.getElementById("experienceModal").addEventListener("click", event => {
    if (event.target.id === "experienceModal") closeExperience();
});


/* =========================================================
   GALLERY
========================================================= */

function renderAlbums() {
    const albumGrid = document.getElementById("albumGrid");

    albumGrid.innerHTML = experiences.map(experience => `
        <article class="album-card">
            <div class="album-cover" onclick="openAlbum(${experience.id})">
                ${experience.image ? `<img src="${experience.image}" alt="${experience.title}">` : `<span class="slot-label">PHOTO ALBUM SLOT</span>`}
                <span class="count">${experience.photos ? experience.photos.length : 0} Photos</span>
            </div>

            <div class="album-info">
                <h3>${experience.title}</h3>
                <p>${experience.date} · Organized album</p>
            </div>
        </article>
    `).join("");
}


/* =========================================================
   OPEN PHOTO ALBUM & LIGHTBOX
========================================================= */

let currentAlbum = null;
let currentPhoto = 0;

function openAlbum(id) {
    const experience = experiences.find(item => item.id === id);
    if (!experience || !experience.photos || experience.photos.length === 0) {
        alert("No photos available for this album.");
        return;
    }

    currentAlbum = experience;
    currentPhoto = 0;

    updateLightbox();
    document.getElementById("lightbox").classList.add("open");
}

function updateLightbox() {
    if (!currentAlbum || !currentAlbum.photos) return;

    document.getElementById("lightboxImage").src = currentAlbum.photos[currentPhoto];
    document.getElementById("lightboxCaption").textContent = 
        `${currentAlbum.title} — Photo ${currentPhoto + 1} of ${currentAlbum.photos.length}`;
}

document.getElementById("prevPhoto").addEventListener("click", () => {
    if (!currentAlbum) return;
    currentPhoto = (currentPhoto - 1 + currentAlbum.photos.length) % currentAlbum.photos.length;
    updateLightbox();
});

document.getElementById("nextPhoto").addEventListener("click", () => {
    if (!currentAlbum) return;
    currentPhoto = (currentPhoto + 1) % currentAlbum.photos.length;
    updateLightbox();
});

document.getElementById("lightboxClose").addEventListener("click", () => {
    document.getElementById("lightbox").classList.remove("open");
});


/* =========================================================
   CERTIFICATES
========================================================= */

function renderCertificates() {
    const target = document.getElementById("certificateGrid");

    target.innerHTML = experiences
        .filter(experience => experience.certificate)
        .map(experience => `
            <article class="certificate-card">
                <div class="certificate-slot" onclick="window.open('${experience.certificate}', '_blank')">
                    <img src="${experience.certificate}" alt="${experience.title} Certificate" style="width:100%; height:100%; object-fit:cover;">
                </div>

                <div class="certificate-info">
                    <h3>${experience.title}</h3>
                    <p>${experience.date}</p>
                </div>
            </article>
        `).join("");
}


/* =========================================================
   SEARCH & INITIALIZE
========================================================= */

searchInput.addEventListener("input", renderExperiences);

renderFilters();
renderExperiences();
renderAlbums();
renderCertificates();


/* =========================================================
   STATISTICS
========================================================= */

document.getElementById("seminarCount").textContent = experiences.length;
document.getElementById("albumCount").textContent = experiences.length;
document.getElementById("certificateCount").textContent = experiences.filter(e => e.certificate).length;


/* =========================================================
   DARK / LIGHT MODE & NAVIGATION
========================================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("portfolio-theme") === "dark") {
    document.body.classList.add("dark");
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
});


/* =========================================================
   SCROLL PROGRESS & ANIMATIONS
========================================================= */

window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / height) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));