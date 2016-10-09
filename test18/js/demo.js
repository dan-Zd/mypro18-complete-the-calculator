function Calculator(){
	this.cal = function(num1,num2,oper){
		var res = 0;
		if(oper == "+"){
			res = num1+num2;
		}else if(oper == "-"){
			res = num1-num2;
		}else if(oper == "*"){
			var n=(num1*num2).toFixed(3);
				res = parseFloat(n);
			res = num1*num2;
		}else if(oper == "/"){
			if(num2 != 0){
				var n=(num1/num2).toFixed(3);
				res = parseFloat(n);
			}else{
				res = "NaN";
                alert("除数不能为0！");
			}
		}
		return res;
	}
}
var calculator = new Calculator();
var val = 0;//输入的值
var xval = 0;//转换为number类型的值
var temp = 0;//第一次输入的值
var oper = "";//输入的操作符
var flag=false;

// 获取输入数字
var numb = document.getElementsByClassName('num');
for (var i = 0;i< numb.length;i++) {
//console.log(numb[i].value);
    addEvent(numb[i],inputEvent);
}
function inputEvent(e){
	var obj = e.srcElement || e.target;
	val = obj.value;
	var xsval = document.getElementById("txt");
	if(flag == false){
		xsval.value += val;
	}else if(flag == true){
		xsval.value = val;
		flag = false;
	}
	xval = parseFloat(xsval.value);
}


//第一行和特殊操作符
 var _btn = document.getElementsByClassName('_btn');
 for (var i = 0;i< _btn.length;i++) {
 	//console.log(_btn[i].value);
 	addEvent(_btn[i],inputP);
 }
 function inputP(e){
	var xsval = document.getElementById("txt");
	var obj = e.srcElement || e.target;
	if (obj.value == "清屏") {
		xsval.placeholder="0";
		xsval.value="";
	}else if(obj.value == "开机"){
        xsval.placeholder="0";
        xsval.value="";
	}else if(obj.value == "关机"){
       xsval.placeholder="";
       xsval.value="";
	}else if(obj.value == "log"){
		var n=(Math.log(xsval.value)).toFixed(3);
        xsval.value = parseFloat(n);
	}else if(obj.value == "power"){
		var n=(Math.pow(xsval.value,2)).toFixed(3);
        xsval.value = parseFloat(n);
	}else if(obj.value == "sin"){
		var n=(Math.sin(xsval.value*Math.PI/180)).toFixed(3);
        xsval.value = parseFloat(n);
	}else if(obj.value == "cos"){
		var n=(Math.cos(xsval.value*Math.PI/180)).toFixed(3);
        xsval.value = parseFloat(n);
	}else if(obj.value == "tan"){
		var n=(Math.tan(xsval.value*Math.PI/180)).toFixed(3);
        xsval.value = parseFloat(n);
	}else if(obj.value == "√"){
		var n=(Math.sqrt(xsval.value)).toFixed(3);
        xsval.value = parseFloat(n);
	}
 }

//操作符输入

var _oper =document.getElementsByClassName('_oper');
for(var i = 0;i<_oper.length;i++){
	addEvent(_oper[i],inputOper);
}
function inputOper(e){
	var obj = e.srcElement || e.target;
	oper = obj.value;
	if(oper == "+" || oper == "-"|| oper == "*"|| oper == "/"|| oper == "%"){
		var xsval = document.getElementById("txt");
		temp = parseFloat(xsval.value);
		xsval.value = "";
		xsval.placeholder="";
	}
}
//计算结果
var _equal = document.getElementById("_equal");
addEvent(_equal,inputEquel);
function inputEquel(e){
	var xsval = document.getElementById("txt");
	var obj = e.srcElement || e.target;
	if(obj.value == "="){
		xsval.value = calculator.cal(temp,xval,oper);
		flag = true;
	}
}
function  addEvent(obj,fn){
	if(obj.addEventListener){
    obj.addEventListener('click',fn);
    }else if(obj.attachEvent){
    obj.attachEvent("onclick",fn);
    }else{
    	obj.onclick=fn();
    }
}