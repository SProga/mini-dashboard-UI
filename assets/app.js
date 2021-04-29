let btn = document.querySelector(".nav-toggler");
let icon = document.querySelector(".nav-btn");
let menu = document.querySelector(".menu");
let category = document.querySelectorAll(".category");
let style = null;

btn.addEventListener("click", () => {
  menu.classList.toggle("toggle-menu"); //reduce width of container to 3%
  for (let i = 0; i < menu.children.length; i++) {
    if (!menu.children[i].classList.contains("nav-toggler"))
      menu.children[i].classList.toggle("toggle-menu-content");
  }
  icon.classList.toggle("rotate");
});

category.forEach((cat) => {
  cat.addEventListener("mouseenter", () => {
    style = getComputedStyle(cat);
    let background = style.getPropertyValue("background-color");
    cat.parentElement.parentElement.style.boxShadow = `0px 3px 4px ${background}`;
  });
  cat.addEventListener("mouseleave", () => {
    cat.parentElement.parentElement.style.boxShadow = "unset";
  });
});

// A little life hack for preverting transitions while the page is resized
function removeTransitions() {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("notransition");
  }
  setTimeout(() => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("notransition");
    }
  }, 500);
}

window.onresize = removeTransitions;
