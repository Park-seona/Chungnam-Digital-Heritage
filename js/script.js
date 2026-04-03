document.querySelectorAll('main section').forEach(function(section){

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.6 });

  observer.observe(section);

});




// 2003-2019-2021 년도별 스크롤 다운

const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));