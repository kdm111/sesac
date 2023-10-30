// 선택적 매개변수가 가장 뒤에 있어야 하는 이유
function print(a:number, b:number, c?:number):void {
	// 파라미터에 ?를 붙이면 있어도 되고 없어도 되는 것을 의미
	console.log(a)
	console.log(b)
	console.log(c)
}

print(1,2,3)
print(1,2) // 끝에 c가 지정되지 않았으므로 undefined가 뜨게 된다.


// 초기값 설정 역시 가능
function print2(a:number, b:number, c:number = 100):void {
	console.log(a)
	console.log(b)
	console.log(c)
}

function hello():void {
	console.log('hello')
}
function hello2():string {
	return 'hello'
}


function concatString(a:string, b:string):string {
	return a+b
}

// number = int + float
function circleArea(a:number):number{
	return Math.PI * a * a
}

// 화살표 함수
const squareNumber = (a:number):number => {
	return a * a
}
// 화살표 함수 & 리턴 구문 생략
const triangleNumber = (a:string, b:string):number => 
	parseInt(a, 10) * parseInt(b, 10) / 2

interface Greet {
	name : string;
	hi(): string;
	bye(a:number):string;
}

const h1: Greet = {
	name : 'hi',
  hi() {
    return '여기는 ' + this.name + ' 영등포 캠퍼스';
	},
	bye(a:number) {
		return a + '번 인사했음'
	}
}


// 함수의 끝에 도달하지 못하는 경우
function infinite():never {
	while (true) {
		console.log('go')
	}
}

// JAVA에서 중요한 개념이다.
// 오버라이딩 vs 오버로딩

// 1. 오버라이딩 
// Class에서 상위 클래스에서 상속 받을 때 같은 이름의 메소드를 재정의 하는 방법

// 2. 오버로딩
// 함수의 이름은 같지만 매개변수 vs 반환 타입이 다른 여러 같은 이름의 함수를 가질 수 있다.
// 선언부 : 매개변수의 타입과 반환 타입만 지정
// 구현부 : 실제 함수의 구현
// 함수 이름은 동일해야 한다.

function sum(a:string|number, b:string|number):string // 선언부
// function sum(a:number, b:number):number // 선언부

// 구현부
function sum(a:any, b:any):any {
	return a + b
}

console.log("sum(1,2)", sum('a',2))
console.log("sum(a,b)", sum('a','b'))
