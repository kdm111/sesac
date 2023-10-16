import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register, // input 할당, 변경 감지
    handleSubmit, // submit시 호출
    watch, // 특정 폼의 값을 실시간 활용
    formState: {errors,} // 폼 상태 객체
  }= useForm({})
  // handleSubmit 은 두 개의 함수를 받을 수 있다.
  // funA는 필수 유효할 때 실행
  // funB는 유효하지 않을 때 실행
  const onValid = (data) => {
    console.log('onValid', data)
  }
  const onInvalid = (error) =>{
    console.log('onInvalid', error)
  }
  console.log('errors', errors)
  console.log('watch', watch('username'))
  return (
    <div>
      <h1>react hook form</h1>
      <form
        onSubmit={
          handleSubmit(onValid, onInvalid)
        }
      >
        <input 
          type="text" 
          placeholder='username'
          {...register('username', {
            required : "이름을 입력해주세요",
            minLength :{message : '이름은 최소 2글자 이상입니다.', value : 2}
          })}
          
        />
        <br />
        {errors.username?.message}
        <br />
        
        <input 
          type="email" 
          placeholder='email'
          {...register('email', {
            required : '이메일을 입력해주세요',
            validate : {useGmail : (value) => 
              value.includes('gmail.com') || 'gmail로만 가입가능'
            }
          })}
          
        />
        <br />
        {errors.email?.message}
        <br />
        <input 
          placeholder='password'
          {...register('password', {
            required : '패스워드가 필요합니다.',
          })}
        />
        <button 
          type='submit' >제출</button>
      </form>
    </div>
  )
}
// Optional Chaining
// ES2020
// 안전하게 객체의 데이터에 접근
// a?.title : undefined
// a?.title ?? "hello" : hello
// a 같은 변수는 반드시 선언되어야 한다.