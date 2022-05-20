var beforePos = 0;//スクロールの値の比較用の設定

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
var headerH = $("#header").outerHeight(true);//headerの高さを取得  
$('#navi li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - headerH;//header分の高さを引いた高さまでスクロール
  $('body,html').animate({ scrollTop: pos }, 500);
  return false;
});