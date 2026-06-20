let headMenu = document.querySelector(".head");
let headli = document.querySelectorAll(".head-li");

document.addEventListener("scroll", (e) => {
  if (this.scrollY > 0) {
    headMenu.style.top = "0";
    headMenu.style.opacity = "1";
  } else {
    headMenu.style.top = "-80px";
    headMenu.style.opacity = "0";
    weblimobile.style.visibility = "hidden";
    weblimobile.style.height = "0";
    spnmenuline.forEach((spn) => {
      spn.style.backgroundColor = "#eb5424";
    });
  }
});
//   if (scrollY < 732) {
//     document.querySelector(".mhome").classList.add("active-menu");
//   } else {
//     document.querySelector(".mhome").classList.remove("active-menu");
//   }
//   if (732 < scrollY && scrollY < 1500) {
//     document.querySelector(".mmywork").classList.add("active-menu");
//   } else {
//     document.querySelector(".mmywork").classList.remove("active-menu");
//   }
//   if (1500 < scrollY && scrollY < 2300) {
//     document.querySelector(".mportfolo").classList.add("active-menu");
//   } else {
//     document.querySelector(".mportfolo").classList.remove("active-menu");
//   }
//   if (2300 < scrollY && scrollY < 2850) {
//     document.querySelector(".mresume").classList.add("active-menu");
//   } else {
//     document.querySelector(".mresume").classList.remove("active-menu");
//   }
//   if (2898 < scrollY && scrollY < 3624) {
//     document.querySelector(".mabout").classList.add("active-menu");
//   } else {
//     document.querySelector(".mabout").classList.remove("active-menu");
//   }
//   if (scrollY >= 3624) {
//     document.querySelector(".mcontact").classList.add("active-menu");
//   } else {
//     document.querySelector(".mcontact").classList.remove("active-menu");
//   }
// });

const sections = document.querySelectorAll("section");
const headA = document.querySelectorAll(".head-li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    let sectionOffsetTop = section.offsetTop - 100;

    if (scrollY >= sectionOffsetTop) {
      current = section.getAttribute("id");
    }

    headA.forEach((item) => {
      item.classList.remove("active-menu");

      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active-menu");
      }
      item.addEventListener("click", () => {
        weblimobile.style.visibility = "hidden";
        weblimobile.style.height = "0";
      });
    });
  });
});

/* ///////////////////////////////////////////////////////////////// */
var Alldata = [];
const portLi = document.querySelectorAll(".port-li");
const imgDiv = document.querySelectorAll(".img-div");

portLi.forEach((li) => {
  let liChild = li.childNodes[1];
  // console.log(li.childNodes);

  liChild.addEventListener("click", (e) => {
    e.preventDefault();
    if (liChild.className === "") {
      document.querySelector(".active").className = "";
      e.target.className = "active";
    }

    let filterData = liChild.getAttribute("data-filter");
    imgDiv.forEach((item) => {
      // console.log(item);
      item.classList.remove("show");

      if (filterData === "all" || item.classList.contains(filterData)) {
        item.classList.add("show");
      }
    });
  });
});
/* /////////////////////////////// */
let menuSpn = document.querySelector(".menu-spn");
let weblimobile = document.querySelector(".web_li_mobile");
let spnmenuline = document.querySelectorAll(".spn-menu-line");

menuSpn.addEventListener("click", () => {
  if (weblimobile.style.visibility != "visible") {
    weblimobile.style.visibility = "visible";
    weblimobile.style.height = "17rem";
    spnmenuline.forEach((spn) => {
      spn.style.backgroundColor = "black";
    });
  } else {
    weblimobile.style.visibility = "hidden";
    weblimobile.style.height = "0";
    spnmenuline.forEach((spn) => {
      spn.style.backgroundColor = "#eb5424";
    });
  }
});
