class Car {
  constructor(year) {
    this.year = year
  }
  getYear() {
    return 'Car ' + this.year
  }
}

class Truck extends Car {
  // constructor() {
  //   super(this)
  // }
  // super() 구문은 자식 클래스에서 부모 클래스의 생성자나 메서드를 호출할 때 사용됩니다.
  // 
  getYear() {
    return 'Truck ' + this.year
  }
}

const car = new Car(10)
const truck = new Truck(15)

console.log(car.getYear())
console.log(truck.getYear())