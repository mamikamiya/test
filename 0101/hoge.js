// window.onload = function(){
// 	document.getElementById("wrp").onclick = function(){
// 		window.alert('ボタンが押されました');
// 	};
// };


(window.onload = function(){

	////////HTML読み終わったかテスト
	window.alert("HTMLを読み込みました");
	////////

	////////<div id="btn_wrp">の中の<button>タグを見つけられてるかテスト
	var wrp =document.getElementById("wrp"); //Element"s"にして失敗した
	var btn =wrp.getElementsByTagName('button');
	var num = btn.length;
	window.alert('buttonタグが' + num + '個見つかりました！');
	////////




	// btn[0].onclick = function(){
	// 	window.alert('ボタンが押されました');
	// }
	// btn[1].onclick = function(){
	// 	window.alert('押すなと言ったのに');
	// }

	////////
	var rsltTag =wrp.getElementsByClassName('result');
	var num = rsltTag.length;
	window.alert('resultのクラス名をもつタグが' + num + '個見つかりました！');
	////////
	var rslt =rsltTag[0]



	// for(var i=0 ; i<=1 ; i++){

	// 	if(i==0){
	// 		btn[i].onclick =function(){
	// 			rslt.innerHTML='ボタンが押されました';
	// 		};
	// 	}else if(i==1){
	// 		btn[i].onclick =function(){
	// 			window.alert('押すなと言ったのに');
	// 		};
	// 	};

	// };



	btn[1].onclick = function(){
	 			window.alert('押すな!!!!!');
	 		};


	var kaisu = 0;
	btn[0].onclick = function(){
		if(kaisu<=100){
			check3baisu();
			// rslt.innerHTML= ++kaisu;
		}else if(kaisu<11){
			rslt.innerHTML= '押しすぎ！！！！';
		}
	}



	////////
	function check3baisu(){
		// for
		//  (i = 1; i<= 100; i++){
			var i=kaisu++;

			if(i==0){
				rslt.innerHTML= i;

			}else if( i%3 == 0){
				rslt.innerHTML= i+'!!<br>'+'<img src="nabeatsu.jpg">';

			}else{
				rslt.innerHTML= i;
			}
		// }
	};
	////////


});


///////////////////////////////////////////////////////////////////////




/////////////3の倍数か調べるのは・・・num%3 == 0
// var num = 4;
// if(num%3 == 0){
// 	document.write('３の倍数です');
// }else{
// 	document.write('３の倍数では無いです');
// }
//////////////////////////////////////////


// var i = -1, num = 0;
// // num += i;
// // window.alert(num);

// do{
// 	num += i;
// 	document.write(num + ' ');
// 	i++;
// }
// while(i < 0);

// i =0;
// while (++i < 10){
// 	document.write(i + '　')
// }


// for(var i = 0; i < 5; i++){
// 	document.write(i);
// }

// var i =0;
// while (i < 5){
// 	document.write(i);
// 	i++;
// }

// var num = 100;
// var i = 1;
// while (i <= num) {
// 	document.write(i);
// 	document.write(' ');
// 	i++;
// }

// for (var i = 0; i < 10 ; i++){
// 	document.write(i + '<br>');
// }


// var point = 3;
// switch(point) {
// 	case 1 :
// 	case 2 :
// 		window.alert('1または2ですね。残念！');
// 		break;
// 	case 3 :
// 		window.alert('おめでとうございます！');
// 		break;
// 	default:
// 		window.alert('1~3以外のポイントは無効です。')
// 		break;
// }


// 



// var a, b, c;
// a=0 || 10;
// b=5 || 10;
// c='' || 'Hello';

// window.alert(a);
// window.alert(b);
// window.alert(c);


// var a = 10, b = 20;
// var c = a > 20 || b < 30;

// window.alert(c);

// var a,b,c;

// a=0 && 10;
// b=5 && 10;
// c=5 && 'Hello';

// window.alert(a);
// window.alert(b);
// window.alert(c);



// var bool = num > 5;
// window.alert(bool == 1);
// window.alert(bool == 0);