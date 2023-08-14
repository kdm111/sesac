// 구조 분해 할당
// 1. 배열 구조 분해 할당
// array destructuring assignment
// 순서가 그대로 매칭되므로 순서가 중요하다.
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = ['a', 'b', 'c']

// const [one, two, three, four, five] = arr1
// console.log(one, two, three, four, five) // 1,2,3,4,5


// const [a,b,c] = arr2
// console.log(a,b,c) // a,b,c

// 변수에 매칭되지 않을 경우 undefined가 사용된다.
// const [a,b,c,x] = arr2
// console.log(a,b,c,x) // a,b,c, undefined

// x = 1
// console.log(a,b,c,x) 

// swap 역시 가능하다.
// let n1 = 1; 
// let n2 = 2;
// [n2, n1] = [n1, n2]
// console.log(n1,n2)

// const fruits = ['apple', 'orange']
// let [f1, f2, f3 = 'grape'] = fruits
// console.log(fruits) // 2개만 들어간다.


// 객체 구조 분해 할당
// 객체는 구조 분해 할당 시 키 값을 통해 구조 분해 할당 가능하다.
let obj = {
  title : "elemental",
  content : "it's interesting",
  rate : 5,
  studio : "fixar"
}
// let {title, content, num} = obj
// console.log(title, content, num)

// :을 사용하여 새 변수명을 사용할 수 있다.
// let {title : t2} = obj
// console.log(t2)

// 키가 존재하지 않을 경우를 대비하여 =연산자를 사용하면 object 값을 할당할 수 있다.
// let {director ="peter sorn"} = obj
// director = "peter" // 재할당 가능
// console.log(director)
// 하지만 obj의 키와 밸류로 추가되는 것은 아니다.
// console.log(obj)


// let {title, ...rest} = obj

// function getInfo(lecture) {
//   // TODO: 구조 분해 할당을 사용하여 값 추출
//   const {name, part, leader} = lecture
//   // TODO: 출력 문장 생성
//   const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`
//   return output;
// }

// const lectureInfo = {
//   name: 'SESAC x CODINGOn',
//   part: 'WEB',
//   leader: 'Sean',
// };

// const result = getInfo(lectureInfo);
// console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.


// Spread 연산자
// 반복가능한 객체에 대해서 단일요소로 압축을 해제하는 역할.
// const a = [1,2,3]
// const b = [4,5]
// const spread = [...a, ...b]
// console.log(spread) // 1,2,3,4,5

// const c = [..."hello"] // "hello"를 하나씩 끊어내어 배열로 반환
// const d = "hello".split("") // 글자를 ""기준으로 떼어내서 배열로 전달.

// console.log(c) // 'h', 'e', 'l', 'l', 'o'
// console.log(d) // 


// // 스프레드 연산자를 이용하여 객체 생성
// const chip = {
//   base : "chip",
//   company : "Lotte"
// }
// const onionChip = {...chip, flavor : "onion"}
// const sweetPotatoChip = {...chip, flavor : "sweet potato"}

// console.log(onionChip)
// console.log(sweetPotatoChip)


// const word1 = "abc"
// const word2 = "xyz"
// const ans = [...word1, ...word2]
// console.log(ans)


// rest parameter
// 특별한 상황이 아니라면 rest를 사용한다. 
// 남은 부분을 스프레트 연산자를 사용하여 표현가능하다.
// 

// const values = [10,20,30]
// function get(a, ...rest) {
//   console.log(a) // 10
//   console.log(rest) // [20, 30]
// }
// get(...values)


// const iceCream = {
//   company : "Lotte",
//   flavor : "vanilla",
//   price : 1000
// }
// const {flavor, ...rest} = iceCream
// console.log(flavor)
// console.log(rest)

// const number = [1,2,3,4,5,6,7]
// const [one, two, ...rest] = number
// console.log(one, two, rest) // 1 2 [3,4,5,6,7]



// Class
// 
class House {
  // 생성자 함수로 
  // 인스턴스를 생성할 때마다 속성을 초기화한다.
  constructor(year, name, window) {
    // 여기에서 말하는 this는 인스턴스를 가리킨다.
    this.year = year
    this.name = name
    this.window = window
    if (this.name == "삼각형") {
      throw new Error("삼각형이 될 수 없다.")
      // console.log()
    }
  }
  // 메서드 1
  getAge() {
    console.log(`${this.name}은 건축한 지 ${new Date().getFullYear() - this.year}년 되었다.`)
  }

  // 메서드 2
  getWindow() {
    console.log(`${this.name}은 ${this.window}개의 창문이 존재한다.`)
  }
}


// const house = new House(2023, "castle", 1)
// console.log(house, typeof house)
// house.getAge()

// const house2 = new House(2007, "자이", 10)
// house2.getAge()
// house2.getWindow()

class Shape {
  constructor(width,height) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}



class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2)
  }
}
class Triangle extends Shape {
  constructor() {
    super()
    this.radius = radius
  }
  getArea() {
    return (super.getArea() / 2)
  }
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super()
    this.radius = radius 
  }
  getArea() {
    return (this.radius ** 2) * Math.PI
  }
}
const rectangle = new Rectangle(5,6)
console.log(rectangle.getArea())
const triangle = new Triangle(5,6)
console.log(triangle.getArea())
const circle = new Circle(1)
console.log(circle.getArea())

// super가 사용되기 전까지 this키워드는 사용될 수 없다.
// super가 호출되기 전까지 this는 초기화 될 수 없다. 이 상태에서 사용된다면 this 예외가 발생한다.
//https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-use-super-in-es6

// class Apartment extends House {
//   constructor(year, name, window, floor, windowMaker) {
//     // 부모 클래스가 가지고 있는 속성을 그대로 사용하기 위해서 super를 사용한다.
//     // 상속한 부모 클래스의 생성자를 그대로 호출한다.
//     super(year, name, window)
//     this.floor = floor
//     this.windowMaker = windowMaker
//   }
//   getAptInfo() {
//     return `${this.year}에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}입니다.`
//   }
//   // overriding 
//   // 부모 메서드의 이름을 동일하게 사용하되 내용은 다르게 사용하고 싶을 때 사용한다.
//   getWindow() {
//     return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}사에서 생성됨`
//   }
// }
// const apt1= new Apartment(2022, "래미안", 3, 20, "KCC")
// console.log(apt1.getWindow())

