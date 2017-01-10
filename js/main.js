// var x ="12";
// var y = 10.0;
// var z ="10.2";
// console.log(typeof x === "string" && y=== 10 && z>=y);

// var x ="8";
// var y = 6.0;
// var z ="10";
// console.log(
	// typeof x === "number" &&
	// typeof y === "number" &&
	// (x > 10 || x >y || typeof y ==="number") || z % 2 ===9);

// var x = "10";
// var y = "200";
// var z = 10;

// if (typeof y !=="number"){
// x=y;}
// else if (typeof z !== "number"){
// x = z};
// else (
// x = null;)
// console.log(x); 	

// var x = "10";
// var y = "200";
// var z = 10;
// if (y !==false){
	// x = "true";}
// else {
	// x=z;}
// console.log(x);	


// //it is function;
// function fn(){}
// var object =()

// //it is method;
// object.method = dunction (){};

// //it is functional expression;
// var functionX = function (){}; 

// //it is functional expression;
// var functionX = function FnName (){
	// if (true){
		// FnName();
	// } 
// }; 

// console.log(functionX);


// var NewFnName = new Function("x","return x");
// console.log(NewFnName(256));

// (function(){
	// console.log("test 1");
// })
// (function({
	// console.log("test 2");
// })

// var test = (function privatName(x){
	// console.log(x);
	 // privatName(x+1);
// }
// return x ;
// console.log(test);
// (function privatName ()
// {})

// var arrayWithFunctions = [
	// function () {return 0;}
	// function () {return 1;}
	// function () {return 2;}
	// ];
// arrayWithFunctions.methodOfArray= function (){
	// return ("i am a method")
// }
// console.log(arrayWithFunctions[1]());
// console.log(arrayWithFunctions.methodOfArray());
// console.log(FnName);


// var objct = {
	// x:10
// }
// console.log(objct.x);

// changeX(objct)
// function changeX(objct){
	// objct.x=25;
// }
// console.log(objct.x);

// var x = 10;
// var y = x;
// console.log("old x =",x);
// console.log("old y=",y);
// x+1;
// changeX(x);
// function changeX(test){
	// test=25;
// }
// console.log("new x=",x);
// console.log("old y=",y);

// var x = true ? function(){return 25;}():false 
// console.log(x);

// var fn = x = 25 && function(){return 50}
// console.log(fn);

// function test (number,name){
	// console.log(arguments);
	// console.log(number+=10);
	// console.log("hello",name);
	// var x = Array.apply(null,arguments)
	// console.log(x);
// }
// test (1,"Epistifokl",null,[],256,"test");


// var x=123;//123;
// var x=0xF;//15;
// var x=5e3;//5000;
// var x=5e-3;//0.005;

// var infinity=Infinity;
// var nan=NaN;
// var number=123;

// console.log(isFinite(infinity));
// console.log(isFinite(nan));
// console.log(isFinite(number));

// console.log(+"56");//56;
// console.log(+"");//0;

// console.log(parseInt("12px"));//12
// console.log(parseInt(""));//NaN;
// console.log(parseFloat("10.5.5"));//10.5;
// console.log(parseFloat("as10.5"));//NaN;
// console.log(parseInt("FF",16));//255;

// //rgb(255,255,255,0,5)
// //#fffff;

// console.log(isNaN(10));
// console.log(isNaN("25,5"));
// console.log(isNaN("test"));
// console.log(isNaN(null));
// console.log(isNaN(true));



// function isNumber (n){
	// return !isNaN(parseFloat(n) && isFinite(n))
// }
// console.log(isNaN(Infinity));

// console.log(Math.round(1.5));//2
// console.log(Math.round(1.4));//1
// console.log(Math.ceil(1.1));//2
// console.log(Math.floor(1.9));//1
// console.log(15.5678.toFixed(2));//10.57 STRING
// console.log(Math.round(10.255*100)/100);//10.26

// var x = 0.1 + 0.2//0.300000000000004;
// console.log(x);//0.300000000000004;
// console.log((0.1*10+0.2*10))/10;//0.3;
// console.log(+(0.1+0.2).toFixed(10));//0.3;
// console.log(Math.round((0.1+0.2)*10)/10);//0.3;
// console.log(99999999999999999999999999999999999);

// var string = "string";
// var string = 'string';
// var string = 'it\'s test string';

//console.log("first line \n next line ");
//console.log("\\");
var x = "A and B";
// console.log('test   '.length);//7;
// console.log('test',charAt(5));//"t";
// console.log('test'[0]);//"t";
// console.log("test",charAt[05]);
// console.log('test'[5]);//undefined

console.log("A and B".toUpperCase());
console.log("A and B".toLowerCase());
console.log(x);

x=x.toLowerCase();//replace string with new in variable
console.log(x);//now new string is variable





























