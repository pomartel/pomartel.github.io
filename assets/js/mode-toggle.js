function setPrismTheme() {
  let theme = "prism.min.css";

  if (Theme.visualState === "dark") {
    theme = "prism-tomorrow.min.css";
  }

  const link = document.getElementById("prism-theme");
  if (link) {
    link.href = "https://unpkg.com/prismjs/themes/" + theme; // Updated to use the theme parameter
  }
}

// Toggle between light and dark mode
document.getElementById("mode-toggle").addEventListener("click", function () {
  setPrismTheme();
});

setPrismTheme();
