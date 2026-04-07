// 헤더 - 스크롤다운 : 사라짐
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // ↓ 스크롤 → 헤더 숨김
    header.classList.add("hide");
  } else {
    // ↑ 스크롤 → 헤더 보임
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});



// 메인 배너 - 검색창 필터
var data = [
  "공산성",
  "무령왕릉",
  "부소산성",
  "유네스코 문화유산",
  "충남 역사박물관",
  "디지털 헤리티지"
];

var input = document.getElementById("searchInput");
var resultList = document.getElementById("resultList");

input.addEventListener("input", function() {
  var keyword = input.value.toLowerCase();

  resultList.innerHTML = "";

  var filtered = data.filter(function(item) {
    return item.toLowerCase().includes(keyword);
  });

  filtered.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item;
    resultList.appendChild(li);
  });
});



// 각 섹션별 - 스크롤 다운
document.querySelectorAll('main section, footer').forEach(function(section){

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.6 });

  observer.observe(section);

});




// 2003-2019-2021년도별 - 스크롤 다운
// const items = document.querySelectorAll('.timeline-item');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     }
//   });
// }, { threshold: 0.5 });

// items.forEach(item => observer.observe(item));

// const items = document.querySelectorAll('.timeline-item');

// console.log(items.length);

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // 들어올 때 → fade in
//       entry.target.classList.add('active');
//     } else {
//       // 나갈 때 → fade out 👈 이거 추가!
//       entry.target.classList.remove('active');
//     }
//   });
// }, { threshold: 0.3 });

// items.forEach(item => observer.observe(item));

// ================================
// 공통 fade-in observer (실무형)
// ================================

const observerOptions = {
  threshold: 0.3,   // 30% 보이면 실행
};

// observe 대상 (section + footer + 개별 요소)
const targets = document.querySelectorAll(
  'main section, footer, .observe, .year-sec'
);

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // 🔥 한 번만 실행 (필요 없으면 주석 처리)
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// 관찰 시작
targets.forEach(el => observer.observe(el));

// const items = document.querySelectorAll('.timeline-item');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       items.forEach(item => item.classList.remove('active'));
//       entry.target.classList.add('active');
//     }
//   });
// }, {
//   rootMargin: "-40% 0px -40% 0px"
// });

// items.forEach(item => observer.observe(item));





// const items = document.querySelectorAll('.timeline-item');
// const section = document.querySelector('.timeline-section');

// window.addEventListener('scroll', () => {

//   const rect = section.getBoundingClientRect();
//   const scrollY = -rect.top;   // 섹션 내부 스크롤값
//   const height = section.offsetHeight;

//   const progress = scrollY / height;

//   let index = Math.floor(progress * items.length);

//   if (index >= items.length) index = items.length - 1;
//   if (index < 0) index = 0;

//   items.forEach((item, i) => {
//     item.classList.toggle('active', i === index);
//   });

// });
















// const items = document.querySelectorAll('.timeline-item');
// const container = document.querySelector('.timeline-section');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// }, {
//   root: container,   // 🔥 이거 추가
//   threshold: 0.5
// });

// items.forEach(item => observer.observe(item));


// const items = document.querySelectorAll('.timeline-item');
// const container = document.querySelector('.timeline-section');

// /* 🔥 1. 첫 번째 강제 활성화 (핵심) */
// if (items.length > 0) {
//   items[0].classList.add('active');
// }

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// }, {
//   root: container,
//   threshold: 0.6,                // 🔥 좀 더 정확하게
//   rootMargin: "-10% 0px -10% 0px" // 🔥 중앙 기준 느낌
// });

// items.forEach(item => observer.observe(item));

// /* 🔥 2. 초기 진입 보정 (이거 진짜 중요) */
// container.scrollTop = 0;




