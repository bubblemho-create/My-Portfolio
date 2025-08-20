// Smooth scroll with offset for nav links and buttons
document.querySelectorAll(".nav-links a, .btn, .logo").forEach(link => { // เพิ่ม .logo a
  link.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("href");

    // ตรวจสอบว่า href เป็น ID ในหน้าเว็บหรือไม่
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();

      if (targetId === "#top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight; // ความสูง navbar
          let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; 

          // ถ้าเป็น section #project ให้เลื่อนต่ำลงมาอีกหน่อย
          if (targetId === "#project") {
            targetPosition += 80; // ปรับค่าตามต้องการ
          }

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  });
});

// ================= Scroll Animation for About Section =================
const aboutContent = document.querySelector(".about-content");
const aboutImg = document.querySelector(".about-img");

const observerOptions = {
  threshold: 0.2 // เห็น 20% ของ element ก็เริ่มแสดง
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible"); // เอาออกถ้าเลื่อนออก (แสดงซ้ำได้)
    }
  });
}, observerOptions);

observer.observe(aboutContent);
observer.observe(aboutImg);
