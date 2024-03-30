
//lode用
function load_effect() {
	var element = document.getElementsByClassName('load-fade');
	if(!element) return; // 要素がない場合は終了
	
	for(var i = 0; i < element.length; i++) { 
	  element[i].classList.add('is-show');
	}
  }
  setTimeout(load_effect, 600); // 600ミリ秒経過後に実行
  
  //scroll用
  function scroll_effect() {
	var element = document.getElementsByClassName('scroll-up');
	if(!element) return;
						
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;
	var showTiming = 200; // 要素を表示するタイミング
	for(var i = 0; i < element.length; i++) { 
	  var elemClientRect = element[i].getBoundingClientRect(); 
	  var elemY = scrollY + elemClientRect.top; 
	  if(scrollY > elemY - windowH + showTiming) {
		element[i].classList.add('is-show');
	  }
	}
  }
  window.addEventListener('scroll', scroll_effect); // スクロール時に実行

  
  // DIY画像の切り替え
const pushBtn = (btn,src) => {
	document.getElementById(btn).onclick = function(){
	  document.getElementById("pics").src=src;
	}
  }
  
  pushBtn("diyBtn01","picture/diy/table1.jpg")
  pushBtn("diyBtn02","picture/diy/table2.jpg")
  pushBtn("diyBtn03","picture/diy/bed1.jpg")
  pushBtn("diyBtn04","picture/diy/bed2.jpg")
  pushBtn("diyBtn05","picture/diy/fun1.jpg")
  pushBtn("diyBtn06","picture/diy/step1.jpg")
  pushBtn("diyBtn07","picture/diy/glass1.jpg")
  pushBtn("diyBtn08","picture/diy/hanger1.jpg")
  pushBtn("diyBtn09","picture/diy/light1.jpg")
  pushBtn("diyBtn10","picture/diy/light2.jpg")
  pushBtn("diyBtn11","picture/diy/chair1.jpg")
  pushBtn("diyBtn12","picture/diy/chair2.jpg")