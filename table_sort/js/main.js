$(function() {
	// リストの初期化
	var arrId = [];		// ID
	var arrTr = [];		// DOM要素
	var arrName = [];	// 名前
	var arrArea = [];	// 面積

	// リストに値を格納
	$("#lstBdy tr").each(function(i) {
		// ID（元の順番）を格納
		arrId.push(i);

		// DOM要素を格納
		arrTr.push($(this));
// 配列の末尾に新しい項目を追加するpush
		// 名前（tdの0番目の文字列）を格納
		arrName.push($(this).find("td").eq(0).text());

		// 面積（tdの1番目の文字列の数値化）を格納
		arrArea.push($(this).find("td").eq(1).text() * 1);
	});

	// 名前でソート
	var sortName = function(a, b) {
		var aName = arrName[a];
		var bName = arrName[b];
		return aName > bName ? 1 : -1;
	};

	// 面積でソート
	var sortArea = function(a, b) {
		var aArea = arrArea[a];
		var bArea = arrArea[b];
		return aArea < bArea ? 1 : -1;
	};

	// ソートを反映
	var reflect = function() {
		// tbody を空に
		$("#lstBdy").empty();

		// tr を id の順に追加
		$.each(arrId, function(i, id) {
			$("#lstBdy").append(arrTr[id]);
		});
	};

	// ［名前でソート］ボタンのイベントを登録
	$("#btnSortName").click(function() {
		arrId.sort(sortName);	// 名前でソート
		reflect();	// ソートを反映
	});

	// ［面積でソート］ボタンのイベントを登録
	$("#btnSortArea").click(function() {
		arrId.sort(sortArea);	// 面積でソート
		reflect();	// ソートを反映
	});
});




// let arr = ["日","月","火"];
// let arr = "日月火".split(""); /*一列づつ区切って配列してくれる*/
  let arr = [12,36,48,60,7];
  arr.sort(function(a,b){
	//   return a > b ? 1 : -1; //条件演算子
	　return a-b;//これでもOK
  });
console.log(arr);


