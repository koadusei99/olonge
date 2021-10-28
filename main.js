const navlist = document.getElementById("navitems");
const toggle = document.getElementById("toggle");
console.log(navlist, toggle);
toggle.addEventListener("click", () => {
  let disp = window.getComputedStyle(navlist, null).getPropertyValue("display");

  if (disp === "none") {
    navlist.style.display = "block";
  } else {
    navlist.style.display = "none";
  }
});
