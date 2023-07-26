
let str1='Strawberry Moon';
let str2='    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0] + str1[12] + str1[14] + str1[9]);

// 문자열의 길이, length는 공백을 포함한다.
console.log(str1.length)
console.log(str2.length)

// 대소문자 변환
console.log(str1.toLowerCase()) // 모두 소문자
console.log(str1.toUpperCase()) // 모두 대문자

// 양끝 공백 제거
console.log(str2.trim().length) // 메소드 체이닝

// indexOf() 글자 위치 찾기
// 없는 문자의 경우 -1을 반환한다.
console.log(str1.indexOf('r')) // 가장 먼저 나타난 글자 위치를 찾는다.

// slice()
console.log(str1.slice(11)) // 11번 부터 끝까지
console.log(str1.slice(1,3)) // 1부터 2까지의 글자

// replace(), replaceAll 문자열 바꾸기
console.log(str1.replace('r', 'a')) // 가장 먼저나타난 글자 변경
console.log(str1.replaceAll('r', '*')) // 모든 글자 변경
console.log(str1.replace('y ', '~')) // 문자열가능

// split()
let date = new Date()
console.log(date.toString().split(' ')) // 문자열을 아규먼트 기준으로 자르고 배열로 반환

// repeat()
let hi = "hi"
console.log(hi.repeat(4)) // 문자열을 n번 반복함

// 배열 관련 메서드
let arr1 = [1,2,3,4,5]
let arr2 = ['rabbit', 'puppy', 'hamster']

// 배열에 값 추가
// 인덱스 내에서 어떤 값이 되던 지 
// 오브젝트 이므로 추가 가능
arr1[-1] = 6;
console.log(arr1[-1])

// push() 맨 오른쪽에 값 추가
arr1.push(2)
console.log(arr1)

// pop 맨 끝 요소 제거
arr1.pop()
console.log(arr1)

// shift() 맨 앞 요소 제거
arr1.shift()
console.log(arr1)

// unshift() 맨 앞 요소 추가
arr1.unshift(4)
console.log(arr1)

// includes() : 요소 밌는 지 없는 지 검사(true, false)
console.log(arr1.includes(2))

// reverse() : 원본 배열이 뒤집혀서 변경됨
console.log(arr1.reverse())

// join : 배열이 아규먼트 기준으로 합쳐진다.
console.log(arr1.join(" "))

// 메서드 체이닝 (method chaining)
// 여러 메서드를 연결해서 사용, 메서드가 반환값을 가지고 있는 경우에만 가능
// reverse() : 뒤집혀진 배열을 반환, split() : 배열을 문자열로 만들어 가능

console.log('hello'.split('').reverse().join(""))




