let number:number = 2
number = 4
console.log(number)

let b:boolean = false
let c:string = 'str'
let d:undefined = undefined
let e:null = null

console.log(b)
console.log(c)
console.log(d)
console.log(e)


// 배열
let numbers:number[] = [1,2,3]
numbers.push(4)
// numbers.push('111') // 숫자 배열은 숫자만 들어갈 수 있음
console.log(numbers)

let strs:Array<String> = ['11', '22']
// strs.push(0)
console.log(strs)

let arrs:(number | boolean | string)[] = []
arrs.push(...['*', '11', 1, true])
console.log(arrs)

// 어떤 자료형이든 상관 없음
let arrs2:any[] = []
arrs2.push(...[123.12321,2323,'113', undefined])
console.log(arrs2)

let obj:object = {"name" : "name"}
// obj.prop = 'name2'
// 객체를 수정할 경우 새로운 객체를 만들어서 사용한다.
let obj2:object = {...obj, 'hi' :'hi'}
console.log(obj)
console.log(obj2)


// tuple
// 배열과 거의 같지만 요소의 길이와 타입이 고정된 특수한 배열
// 
let tuple:[string, number] = ["111", 1]
tuple[0] = '11111'
// tuple.push(0) // push가 가능하지만 하지 않는 것이 좋다. 고정된 배열이라는 점을 훼손하게 되므로
console.log(tuple)

let readonly:readonly[string, string] = ['h', 'e']
// readonly[0] = 'x' 수정이 불가
console.log(readonly)

// enum은 숫자 열거와 문자 열거로 나뉜다.
enum users{
    admin = 110,
    customer = 2,
}
enum cafe {
    '아메리카노' = 'americano',
    '라떼' = 'latte'
}

// 선언이 되어있지 않으면 자동 숫자 열거로 나뉜다.
enum cake {
    chocolate,
    kiwi,
    vanilla
}
console.log(users.admin, cafe.아메리카노)
console.log(cake)

// any는 빈 배열이나 데이터의 타입이 확실하지 않은 경우 사용한다.
let any:any
any = 1; any = '22'
// 암묵적 any 선언
let any2;
any2 = '2'; any2=33

const olympicGame:readonly [object, boolean] = [
    {
        name : '쇼트트랙',
        type : '혼성계주'
    },
    true
]
// olympicGame[1] = false
console.log(olympicGame)