(function () {
  var hour = new Date().getHours();
  var isDay = hour >= 6 && hour < 18;
  document.documentElement.setAttribute("data-theme", isDay ? "day" : "night");

  var indicator = document.getElementById("themeIndicator");
  if (indicator) {
    indicator.textContent = isDay ? "白天模式" : "夜间模式";
  }
})();

document.getElementById("year").textContent = new Date().getFullYear();

var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("is-open");
  });
});

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
} else {
  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("is-visible");
  });
}
