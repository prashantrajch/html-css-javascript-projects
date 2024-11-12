//  Creating a responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector("header");

mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});

//  Creating a portfolio tabbed component
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  p_btn.forEach((btn) => btn.classList.remove("p-btn-active"));
  p_btn_clicked.classList.add("p-btn-active");

  // To find the number in data attribute
  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((imgActive) =>
    imgActive.classList.add("p-image-not-active")
  );
  img_active.forEach((imgActive) =>
    imgActive.classList.remove("p-image-not-active")
  );
});

// Create a swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll to top button

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class='scroll-top'></ion-icon>`;
document.querySelector("footer").after(scrollElement);

const scrollTop = () => {
  header.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

//animate number counter

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entries);

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach((countElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(countElem.dataset.number);
      const intialNum = parseInt(countElem.innerText);
      const incrementNumber = Math.floor(targetNumber / speed);
      if (intialNum < targetNumber) {
        countElem.innerText = `${Math.ceil(intialNum + incrementNumber)}+`;
        setTimeout(updateNumber, 10);
      } else {
        countElem.innerText = targetNumber + "+";
      }
    };

    updateNumber();
  });
};
const workSecObserver = new IntersectionObserver(workSectionObserve, {
  root: null,
  threshold: 0,
});

workSecObserver.observe(workSection);

// lazy loading images

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersection) return;
  console.log(entry)
  entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(() => {}, {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgRef);
