document.addEventListener("DOMContentLoaded", () => {
  // 헤더 숨김
  const header = document.querySelector("header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }

      lastScroll = currentScroll;
    });
  }


// [모바일] 햄버거 메뉴 아이콘 눌렀을 경우, 나오는 창 (오->왼)

document.querySelector('.mobile_menu_toggle').addEventListener('click', function() {
  document.body.classList.add('menu_active');
});

document.querySelector('#mobile-nav #close').addEventListener('click', function() {
  document.body.classList.remove('menu_active');
});

document.querySelector('.menu-overlay').addEventListener('click', function() {
  document.body.classList.remove('menu_active');
});




  // 메인 배너 - 검색창 필터
  const data = [
    "공산성",
    "무령왕릉",
    "부소산성",
    "유네스코 문화유산",
    "충남 역사박물관",
    "디지털 헤리티지"
  ];

  const input = document.getElementById("searchInput");
  const resultList = document.getElementById("resultList");

  if (input && resultList) {
    input.addEventListener("input", () => {
      const keyword = input.value.toLowerCase();

      resultList.innerHTML = "";

      const filtered = data.filter((item) => {
        return item.toLowerCase().includes(keyword);
      });

      filtered.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        resultList.appendChild(li);
      });
    });
  }





// 섹션별 -- 조금 더 부드럽게 스크롤다운
// const main = document.querySelector("main");
// const sections = document.querySelectorAll("main section, main footer");

// let currentIndex = 0;
// let isScrolling = false;

// main.addEventListener("wheel", (e) => {
//   e.preventDefault();

//   if (isScrolling) return;

//   isScrolling = true;

//   if (e.deltaY > 0) {
//     currentIndex = Math.min(currentIndex + 1, sections.length - 1);
//   } else {
//     currentIndex = Math.max(currentIndex - 1, 0);
//   }

//   sections[currentIndex].scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   });

//   setTimeout(() => {
//     isScrolling = false;
//   }, 1000);
// }, { passive: false });

// 부드럽게 +++ 높이 조정
const main = document.querySelector("main");
const sections = document.querySelectorAll("main section, main footer");

let currentIndex = 0;
let isScrolling = false;

main.addEventListener("wheel", (e) => {
  if (window.innerWidth <= 1024) return;

  e.preventDefault();

  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  sections[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}, { passive: false });









// 섹션별 스크롤 다운
  // document.querySelectorAll("main section:not(#sec1):not(#sec2):not(#sec3), footer").forEach((section) => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("active");
  //       }
  //     });
  //   }, {
  //     threshold: 0.25
  //   });

  //   observer.observe(section);
  // });



// 문화유산 소개 - 카드 슬라이드
  // if (document.querySelector(".introSwiper")) {
  //   const introSwiper = new Swiper(".introSwiper", {
  //     slidesPerView: "auto",
  //     spaceBetween: 46,
  //     loop: true,

  //     autoplay: {
  //       delay: 2700,
  //       disableOnInteraction: false,
  //     },

  //     pagination: {
  //       el: ".introSwiper > .swiper-pagination",
  //       clickable: true,
  //     },

  //     // svg 페이지네이션 아이콘 넣기
  //     renderBullet: function (index, className) {
  //       return `
  //         <span class="${className}">
  //           <img src="image/page-icon-off.svg" alt="page">
  //         </span>
  //       `;
  //     },

  //     breakpoints: {
  //       0: {
  //         // slidesPerView: 1.2,
  //         spaceBetween: 16,
  //       },
  //       640: {
  //         // slidesPerView: 1.8,
  //         spaceBetween: 20,
  //       },
  //       1024: {
  //         // slidesPerView: 2.2,
  //         spaceBetween: 30,
  //       },
  //       1280: {
  //         // slidesPerView: 2.5,
  //         spaceBetween: 46,
  //       },
  //     },
  //   });
  // }







// 문화유산 소개 - 카드 슬라이드
let introSwiper;

function initIntroSwiper() {
  const swiperEl = document.querySelector(".introSwiper");

  if (!swiperEl) return;

  if (window.innerWidth > 1024) {
    if (!introSwiper) {
      introSwiper = new Swiper(".introSwiper", {
        slidesPerView: "auto",
        spaceBetween: 46,
        loop: true,

        autoplay: {
          delay: 2700,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".introSwiper > .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `
              <span class="${className}">
                <img src="image/page-icon-off.svg" alt="page">
              </span>
            `;
          },
        },

        breakpoints: {
          1280: {
            spaceBetween: 46,
          },
        },
      });
    }
  } else {
    if (introSwiper) {
      introSwiper.destroy(true, true);
      introSwiper = undefined;
    }
  }
}

initIntroSwiper();

window.addEventListener("resize", initIntroSwiper);







// 문화유산의 기록들 (마우스 원형 커서)
const section = document.querySelector(".history");
const cursor = document.querySelector(".custom-cursor");

const images = document.querySelectorAll(
  ".img-box-01, .img-box-02, .img-box-03, .img-box-04"
);

section.addEventListener("mouseenter", () => {
  cursor.classList.add("show");
});

section.addEventListener("mouseleave", () => {
  cursor.classList.remove("show");
  cursor.classList.remove("active");
});

section.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

images.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});


// 문화유산 기록들 -- 호버 시, 이미지 변경
document.querySelectorAll(
  ".img-box-01 img, .img-box-02 img, .img-box-03 img, .img-box-04 img"
).forEach((img) => {

  img.addEventListener("mouseenter", () => {
    img.src = img.dataset.hover;
  });

  img.addEventListener("mouseleave", () => {
    img.src = img.dataset.origin;
  });

});




// 연도 -- 블러효과
const sinceText = document.querySelector(".since-text");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sinceText.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

observer.observe(document.querySelector(".since-year"));








// 연도별 역사
const historySections = document.querySelectorAll("#sec1, #sec2, #sec3");

if (historySections.length > 0) {
    let currentIndex = 0;
    let isScrolling = false;

    const showSection = (index) => {
      historySections.forEach((section) => {
        section.classList.remove("active");
      });

      historySections[index].classList.add("active");
    };

    window.addEventListener("wheel", (e) => {
      if (isScrolling) return;

      isScrolling = true;

      if (e.deltaY > 0) {
        currentIndex++;
      } else {
        currentIndex--;
      }

      currentIndex = Math.max(0, Math.min(currentIndex, historySections.length - 1));

      showSection(currentIndex);

      setTimeout(() => {
        isScrolling = false;
      }, 900);
    });
  }
});



// 연도별 -- fade 효과
// const historySections = document.querySelectorAll("#sec1, #sec2, #sec3");

// const historyObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       historySections.forEach(section => {
//         section.classList.remove("active");
//       });

//       entry.target.classList.add("active");
//     }
//   });
// }, {
//   threshold: 0.35
// });

// historySections.forEach(section => {
//   historyObserver.observe(section);
// });




















