// JSON
const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

// JSON.parse() 역직렬화
// json to js object
// JSON.stringify() 직렬화
// console.log(car,typeof(car)) // string
const carJSON = JSON.parse(car) // 역직렬화
// console.log(carJSON, typeof(carJSON)) // object
// JSON 객체는 키값으로 접근이 가능하다.
console.log(carJSON.model)
console.log(carJSON.options)


// JSON.stringify() JSON to string 직렬화
const c = JSON.stringify(carJSON)
console.log(c, typeof(c)) // string
// confirm.log(c.model) // 접근 불가

// json 변수는 JSON 형태의 문자열이므로 키값 접근 불가

