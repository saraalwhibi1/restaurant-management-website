function togleTopNav() {
  var top_nav_menu = document.getElementById("top_nav_menu");

  if (top_nav_menu.style.display == "block")
    top_nav_menu.style.display = "none";
  else top_nav_menu.style.display = "block";
}

function setTheme(themeName) {
  console.log(themeName);
  sessionStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

(function () {
  if (sessionStorage.getItem("theme") === "theme-2") {
    setTheme("theme-2");
  } else {
    setTheme("theme-1");
  }
})();
