// Updating copyright year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});
  
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

if (sectionHeroEl) {
  const headerHeight = headerEl.getBoundingClientRect().height;

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (!ent.isIntersecting) document.body.classList.add("sticky");
      else document.body.classList.remove("sticky");
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHeight}px`,
    }
  );

  obs.observe(sectionHeroEl);
}