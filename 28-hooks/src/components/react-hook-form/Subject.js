import React from 'react'
import {useForm} from 'react-hook-form'
export default function Subject() {
  const {
    register,
    handleSubmit,
    watch,
    formState : {errors, }
  } = useForm({})
  const onValid = (data) => {
    console.log(data)
  }
  const inValid = (error) => {
    console.log(error)
  }
  return (
    <div style={{marginTop : '200px'}}>
      <form 
        onSubmit={handleSubmit(onValid, inValid)}
      >
        <input 
          type='text'
          placeholder='name'
          {...register('username', {
            required : "이름은 필수항목입니다.",
          })}
        />
        {errors.username?.message}
        <br />
        <input 
          type='number'
          {...register('age', {
            validate : {checkAge : (v) => {
              return v >= 0 || '나이는 0이상이여야합니다.'
            }
            }}
          )}
          placeholder='age'
        />
        {errors.age?.message}

        <button type='submit'>제출</button>
      </form>

    </div>
  )
}
