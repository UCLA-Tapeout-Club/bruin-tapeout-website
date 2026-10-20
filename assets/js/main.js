// Bruin Tapeout: small progressive enhancements.
// The site works without JavaScript; this only adds the mobile menu, the
// copy-email button, and the scroll animations.

(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Copy-to-clipboard buttons, e.g. <button data-copy="text">
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var label = button.querySelector("[data-copy-label]") || button;
    var original = label.textContent;
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy");
      var done = function (message) {
        label.textContent = message;
        setTimeout(function () { label.textContent = original; }, 2000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { done("Copied!"); },
          function () { done(text); }
        );
      } else {
        done(text);
      }
    });
  });

  // Header shadow once the page scrolls under it
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Scroll animations. Skipped for visitors who prefer reduced motion.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    return;
  }

  // Things that fade up as they scroll into view (styles are in main.css)
  var REVEAL = [
    ".section-head", ".split > :not(.timeline)", ".columns > li", ".stat",
    ".team-row", ".feature > *", ".supported", ".cta", ".story",
    ".subteam", ".people > li", ".timeline-item",
    ".project-header", ".milestone", ".project-body", ".project > h3",
    ".bitfield", ".figure", ".next-list > li",
    ".resource-col", ".sponsor", ".tiers", ".contact-grid > *", ".topic-list > li"
  ].join(",");

  var revealer = new IntersectionObserver(function (entries) {
    var batch = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      revealer.unobserve(el);
      // Items that appear together come in one after another
      el.style.setProperty("--reveal-delay", Math.min(batch++, 5) * 70 + "ms");
      el.classList.add("is-visible");
      // Once it has settled, hand the element back to its normal styles
      setTimeout(function () {
        el.classList.remove("reveal", "is-visible");
        el.style.removeProperty("--reveal-delay");
      }, 1200);
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll(REVEAL).forEach(function (el) {
    // Anything already on screen stays put so the page never flickers
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("reveal");
    revealer.observe(el);
  });

  // Home page numbers count up from zero when they come into view
  var countUp = function (el, end, suffix) {
    var start = null;
    var step = function (now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / 900, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3))) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  var counter = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      counter.unobserve(el);
      countUp(el, parseInt(el.dataset.countTo, 10), el.dataset.countSuffix);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll(".stat-value").forEach(function (el) {
    var match = el.textContent.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    el.dataset.countTo = match[1];
    el.dataset.countSuffix = match[2];
    if (el.getBoundingClientRect().top >= window.innerHeight) {
      el.textContent = "0" + match[2];
    }
    counter.observe(el);
  });
})();
