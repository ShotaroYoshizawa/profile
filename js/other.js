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