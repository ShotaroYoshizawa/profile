//Homeの実績一覧

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  }
}
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 5000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}
next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});
startAutoPlay();

//lode用
function load_effect() {
  var element = document.getElementsByClassName('load-fade');
  if (!element) return; // 要素がない場合は終了

  for (var i = 0; i < element.length; i++) {
    element[i].classList.add('is-show');
  }
}
setTimeout(load_effect, 600); // 600ミリ秒経過後に実行

//scroll用
function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if (!element) return;

  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; // 要素を表示するタイミング
  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;
    if (scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行


//スクロールバー
$(document).ready(function () {
  const content = $('.scroll-wrap');

  const bar = $('.progress-bar');
  const windowHeight = $(window).height();

  const barH = $('.progress-bar-h');
  const box = $('.progress-box');


  const Introduction = $('.Introduction');


  $(window).on('scroll', function () {
    const contentTop = content.offset().top - $(window).scrollTop();
    const contentBottom = windowHeight - contentTop - content.height();
    const scrollPercent = (contentTop / (windowHeight - content.height())) * 100;
    bar.css('width', scrollPercent + '%');

    //    barH.css('height', scrollPercent + '%');
    //    box.css('top', 100 - scrollPercent + '%');

  });
});

// Top画像の切り替え
const pushBtn = (btn, src) => {
  document.getElementById(btn).onclick = function () {
    document.getElementById("pics").src = src;
  }
}

pushBtn("btn1", "picture\diy\bed2.jpg")
pushBtn("btn2", "picture\diy\light2.jpg")
pushBtn("btn3", "picture\diy\table1.jpg")
pushBtn("btn4", "picture\back\back3-1.jpg")
pushBtn("btn5", "picture\back\back4-1.jpg")
pushBtn("btn6", "picture\back\back5-1.jpg")