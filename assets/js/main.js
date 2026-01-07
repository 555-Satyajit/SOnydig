(function () {
    // Get current file name (index.html, about-us.html, etc.)
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".header-link").forEach(link => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  })();