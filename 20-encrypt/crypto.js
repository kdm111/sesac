// node 내장 모듈
const crypto = require("crypto")

// createHash()
// 지정된 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화방식).digest(인코딩 방식)
  return crypto.createHash("sha512").update(password).digest("base64")
}

// 해시함수의 한계. 단방향
// 암호화된 비번을 빠르게 역추적하여 원본을 찾아낼 수 있음
// console.log(createHashedPassword("123"))
// console.log(createHashedPassword("123"))

// pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// 비밀번호 기간 키 도출 함수. 비번 저장 시 사용
// buffer 형식의 데이터를 반환. toString()을 통해 문자열로 변환

// 단방향 암호화 생성 함수
function saltPassword (pw) {
  const salt = crypto.randomBytes(16).toString("base64") // 임의의 salt 생성
  const iterations = 100 // 반복횟수
  const keyLen = 64 // 키의 길이
  const digest = "sha512" // 알고리즘
  
  const hash = crypto.pbkdf2Sync(pw, salt, iterations, keyLen, digest).toString("base64")
  return {
    salt, hash
  }
}

const {salt, hash} = saltPassword("123")

// 2. 암호 비교 함수
// 1. inputPassword(제공 비번, savedSalt, savedHash)
// 새로운 해시를 생성하고 savedHash와 비교
function checkPassword (inpPw, savedSalt, savedHash) {
  const iterations = 100
  const keyLen = 64
  const digest = "sha512"

  const hash = crypto.pbkdf2Sync(inpPw, savedSalt, iterations, keyLen, digest).toString("base64")
  console.log(hash)
  console.log(savedHash)

  console.log(hash === savedHash)
}
// checkPassword("123", salt, hash)

// bcrypt
// 비밀번호를 암호화하는 알고리즘 중 하나
// 주로 강력한 보안이 필요할 때 사용


const bcrypt = require("bcrypt")

const originalPassword = "123"
const saltRounds = 10

// 1. 비밀번호 해싱 함수

function hashPassword(pw, saltRounds) {
  // return bcrypt.hash() // 비동기
  return bcrypt.hashSync(pw, saltRounds) // 동기
}

// 2. 비밀번호의 해시값이 해시된 비밀번호와 일치하는 지 확인하는 함수
function comparePassword(pw, hashedPw) {
  return bcrypt.compareSync(pw, hashedPw)
}

const hashedPw = hashPassword(originalPassword, saltRounds)
console.log(comparePassword(originalPassword, hashedPw)) // true





