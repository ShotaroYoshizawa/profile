var changeAreaElement = document.getElementById('change-image-box'),
    changeNavigation  = document.getElementById('change-image-navigation');

if (changeAreaElement && changeNavigation) {
	var changeAreaImage        = changeAreaElement.getElementsByTagName('img'),
	    changeNavigationTmps   = changeNavigation.childNodes,
	    changeNavigations      = [],
	    changeNavigationAnchor = [],
	    defaultImagePath       = '',
	    index                  = 0,
	    len                    = 0;

	// 初期画像の取得
	if (changeAreaImage.length > 0) {
		defaultImagePath = changeAreaImage[0].src;
	}

	/**
	 * マウスオーバー時
	 */
	var onImage = function() {
		changeImage(this.href);
	};

	/**
	 * マウスアウト時
	 */
	var offImage = function() {
		changeImage(defaultImagePath);
	};

	/**
	 * 画像の切り替え
	 */
	var changeImage = function(targetPath) {
		if (changeAreaImage.length > 0 && targetPath) {
			changeAreaImage[0].src = targetPath;
		}
	};

	// アンカー要素にマウスオーバーとマウスアウトのイベントを割り当て
	for (index = 0, len = changeNavigationTmps.length; index < len; index++) {
		if (changeNavigationTmps[index].nodeType === 1) {
			changeNavigationAnchor = changeNavigationTmps[index].getElementsByTagName('a');
			if (changeNavigationAnchor.length > 0) {
				changeNavigationAnchor[0].onmouseover = onImage;
				changeNavigationAnchor[0].onmouseout  = offImage;
			}
		}
	}
}

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