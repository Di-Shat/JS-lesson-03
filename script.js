 //Task-1
 // Объявите функцию без формальных параметров, которая выводит в консоль сама себя и все переданные ей аргументы
 // Вызовите эту функцию с аргументами 10, false, "google"
 function testFunc(){
    console.log ( arguments.callee );
    for (var i = 0; i < arguments.length; i++ ){
        console.log(arguments[i]);
    }    
}
testFunc(10, false, "google");
//////////////////////////////////////////////////////////////////////
//Task-2
// Объявите функцию userInfo, которая выводит в консоль:
// свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true
// сообщение "Незарегистрированный пользователь: " + свойство name в противном случае
// ( используйте переменные в литералах )
// Создайте два объекта с одинаковым набором свойств:
// name ( строка )
// registered ( логическое значение )
// data ( дата в формате "дд.мм.гг" )
// Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo
// Вызовите каждый метод
function userInfo() {
	if(this.registered) {
		console.log( "Дата регистрации: " + this.data);
	} else {
		console.log( "Незарегистрированный пользователь: " + this.name);
	};
};

var userFirst = {
	name:'Dima',
	registered: true,
	data: new Date().toLocaleString().split(", ")[0],  
	getInfo: userInfo
};

var userSecond = {
	name:'Vika',
	registered: false,
	data: new Date().toLocaleString().split(", ")[0],
	getInfo: userInfo
};

console.log(userFirst.getInfo());
console.log(userSecond.getInfo());
//////////////////////////////////////////////////////////////////////////////
