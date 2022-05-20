var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: '../img/team.jpeg'},
				{ src: '../img/team2.jpeg'},
				{ src: './img/symbol.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: '../img/team.jpeg'},
        { src: '../img/team2.jpeg'},
        { src: './img/symbol.jpg'}
			];
		}

$('#slider').vegas({
		transition: 'fade',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 1000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 8000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 15000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		// timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});