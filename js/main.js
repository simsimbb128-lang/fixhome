// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// Language Toggle
// ===============================
const languageBtn = document.getElementById("language-btn");

languageBtn.addEventListener("click", () => {
    const isEnglish = document.documentElement.lang === "en";

    if (isEnglish) {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        languageBtn.innerHTML = "EN | AR";

        document.querySelector("#about h2").textContent = "عن FixHome";
        document.querySelector("#about p").textContent =
            "FixHome منصة موثوقة للخدمات المنزلية تربط العملاء بالفنيين المحترفين.";
        document.querySelector("#about .primary-btn").textContent = "احجز خدمة";
        document.getElementById("services-title").textContent = "خدماتنا";
document.getElementById("service1-title").textContent = "الكهرباء";
document.getElementById("service2-title").textContent = "السباكة";
document.getElementById("service3-title").textContent = "التكييف";
document.getElementById("service4-title").textContent = "الدهانات";
document.getElementById("service5-title").textContent = "النجارة";
document.getElementById("service6-title").textContent = "التنظيف";
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        languageBtn.innerHTML = "AR | EN";

        document.querySelector("#about h2").textContent = "About FixHome";
        document.querySelector("#about p").textContent =
            "FixHome is a trusted home services platform that connects customers with experienced technicians.";
        document.querySelector("#about .primary-btn").textContent = "Book a Service";
        document.getElementById("services-title").textContent = "Our Services";
document.getElementById("service1-title").textContent = "Electrical";
document.getElementById("service2-title").textContent = "Plumbing";
document.getElementById("service3-title").textContent = "Air Conditioning";
document.getElementById("service4-title").textContent = "Painting";
document.getElementById("service5-title").textContent = "Carpentry";
document.getElementById("service6-title").textContent = "Cleaning";
    }
});
