const perfumeImg1 = document.querySelectorAll(".perfume-bottle-1");
const perfumeImg2 = document.querySelectorAll(".perfume-bottle-2");
const perfumeImg3 = document.querySelectorAll(".perfume-bottle-3");

const article1 = document.querySelector(".wrapper-1");
const article2 = document.querySelector(".wrapper-2");
const article3 = document.querySelector(".wrapper-3");

const price = document.querySelector(".price");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 1;

price.innerHTML = "$20.99";
startAnimation(article1)

nextButton.addEventListener("click", () => {
  if (currentIndex === 1) {
    price.innerHTML = "$59.99";
    hidePerfume(perfumeImg1);
    showPerfume(perfumeImg2);
    article2.classList.remove('not-active');
    article1.classList.add('not-active');
    startAnimation(article2)
  } else if (currentIndex === 2) {
    price.innerHTML = "$39.99";
    hidePerfume(perfumeImg2);
    showPerfume(perfumeImg3);
    article3.classList.remove('not-active');
    article2.classList.add('not-active');
    startAnimation(article3)
  }
  currentIndex++;
  disableButtonNext();
});

prevButton.addEventListener("click", () => {
  if (currentIndex === 3) {
    price.innerHTML = "$59.99";
    showPerfume(perfumeImg2);
    hidePerfume(perfumeImg3);
    article3.classList.add('not-active');
    article2.classList.remove('not-active');
    startAnimation(article2)

  } else if (currentIndex === 2) {
    price.innerHTML = "$20.99";
    showPerfume(perfumeImg1);
    hidePerfume(perfumeImg2);
    article2.classList.add('not-active');
    article1.classList.remove('not-active');
    startAnimation(article1)
  }
  currentIndex--;
  disableButtonPrev();
});

function showPerfume(element) {
  element.forEach((element) => {
    element.classList.add("show-perfume");
    element.style.animation = "show-bottle 2s both";
  });
}

function hidePerfume(element) {
  element.forEach((element) => {
    element.classList.add("hide-perfume");
    element.style.animation = "hide-bottle  2s both";
  });
}

const disableButtonNext = () => {
  if (currentIndex === 3) {
    nextButton.disabled = true;
    prevButton.disabled = false;
  } else {
    nextButton.disabled = false;
  }
};

const disableButtonPrev = () => {
  if (currentIndex === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else {
    prevButton.disabled = false;
  }
};

function startAnimation() {
  anime({
    targets: ".perfume .a",
    opacity: [0, 1],
    translateX: [-50, 0],
    delay: anime.stagger(100), // delay between each element
    duration: 800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".perfume ul li",
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, { start: 500 }), // stagger animation for list items
    duration: 1000,
    easing: "easeInOutQuad",
  });
}
