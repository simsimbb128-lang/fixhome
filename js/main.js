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
document.querySelector("#contact h2").textContent = "تواصل معنا";

document.querySelector('input[type="text"]').placeholder = "الاسم الكامل";
document.querySelector('input[type="email"]').placeholder = "البريد الإلكتروني";
document.querySelector('input[type="tel"]').placeholder = "رقم الجوال";

const serviceSelect = document.querySelector("#contact select");
serviceSelect.options[0].text = "اختر الخدمة";
serviceSelect.options[1].text = "كهرباء";
serviceSelect.options[2].text = "سباكة";
serviceSelect.options[3].text = "صيانة المكيفات";
serviceSelect.options[4].text = "دهانات";
serviceSelect.options[5].text = "نجارة";
serviceSelect.options[6].text = "تنظيف";

document.querySelector("#contact textarea").placeholder = "صف طلبك";
document.querySelector("#contact button").textContent = "إرسال الطلب";
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
document.querySelector("#contact h2").textContent = "Contact Us";

document.querySelector('input[type="text"]').placeholder = "Full Name";
document.querySelector('input[type="email"]').placeholder = "Email Address";
document.querySelector('input[type="tel"]').placeholder = "Phone Number";

const serviceSelect = document.querySelector("#contact select");
serviceSelect.options[0].text = "Select Service";
serviceSelect.options[1].text = "Electrical";
serviceSelect.options[2].text = "Plumbing";
serviceSelect.options[3].text = "Air Conditioning";
serviceSelect.options[4].text = "Painting";
serviceSelect.options[5].text = "Carpentry";
serviceSelect.options[6].text = "Cleaning";

document.querySelector("#contact textarea").placeholder = "Describe your request";
document.querySelector("#contact button").textContent = "Send Request";
    }
});
const form = document.querySelector("#contact form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("تم إرسال طلبك بنجاح، وسيتم التواصل معك قريبًا.");

    form.reset();
});
