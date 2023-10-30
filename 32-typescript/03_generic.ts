// 선언을 할 때 타입을 지정하기 어려운 케이스
// 데이터 타입을 호출시 외부에서 지정하는 것을 generic이라고 한다.
// 재사용성이 증가한다.
// => 타입을 변수화할 수 있다.
// <T> 형태로 주로 사용

// function numArrLen(arr: number[]):number {
// 	return arr.length
// }

// function strArrLen(arr: string[]):number {
// 	return arr.length
// } 

// 오버로드 : 항상 선언문을 먼저 선언한 뒤 구현해야 한다.

function arrLen<T>(arr: T[]) {
	return arr.length
}


console.log(arrLen<string>(['1', '2']))
console.log(arrLen<number>([1, 2]))
console.log(arrLen<number | string>([1, '2']))

function printSum<T>(a:T, b:T):void {
	console.log(a,b)
}
printSum<string>('hi', 'hello')
printSum<number>(100, 200)
printSum<boolean[]>([true, false], [false,false])

function printSum2<T, U>(a:T, b:U):void {
	console.log(a,b)
}

interface Phone<T> {
	company : string;
	createdAt : Date;
	option: T;
}

type iphoneOption = {
	color : string;
	storage : number;
}


const iphone15Phone: Phone<iphoneOption> = {
	company : 'apple',
	createdAt : new Date('2001-01-01'),
	option : {
		color : 'black',
		storage : 256
	}
}

type galaxyOption = {
	color : string;
	samsungPay : boolean;
}

const galaxy23Phone: Phone<galaxyOption> = {
	company : 'samsung',
	createdAt : new Date('2001-01-01'),
	option : {
		color : 'white',
		samsungPay : true
	}
}

function getElement<T>(arr: T[], index: number): boolean | T{
	if (index < 0 || index >= arr.length) {
		return false
	}
	return arr[index];
}

function allSum(...arr:number[]):number {
	let ret:number = 0;
	for (let num of arr) {
		ret += num
	}
	return ret;
}

console.log(allSum(1,2,3))
console.log(allSum(1,4,6))
