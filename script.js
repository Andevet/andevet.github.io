// 1. תפיסת האלמנטים מה-DOM
const toggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// 2. בדיקת זיכרון הדפדפן בעת טעינת העמוד
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  htmlElement.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "☀️";
}

// 3. האזנה ללחיצה על הכפתור והחלפת המצב
toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    htmlElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});
