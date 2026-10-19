// Bruin Tapeout: small progressive enhancements.
// The site works without JavaScript; this only adds the mobile menu and the
// copy-email button.

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
})();
