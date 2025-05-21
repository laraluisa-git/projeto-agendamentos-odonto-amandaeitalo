// js/script.js
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("legalNoticeBtn");
  const aviso = document.getElementById("legalNotice");

  if (btn && aviso) {
    btn.addEventListener("click", function () {
      aviso.classList.toggle("hidden");
    });
  }
});