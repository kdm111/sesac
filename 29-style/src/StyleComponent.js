import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div` // react component는 항상 대문자로 시작한다.
  display : flex;
`;
// css in js js 안에 CSS를 작성함. styled-components
// 기타 emotion, styled-jxs도 존재함
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: ((props) => props.bgColor || 'blue'); */
  &:hover {
    transform: translateY(-100px);
    transition-duration: 0.4s;
  }
`

export default function StyleComponent() {
  return (
    <>
      <h1>STYLE COMPONENT</h1>
      <StyledContainer>
        <StyledBox bgColor="red"></StyledBox>
        <StyledBox bgColor="orange"></StyledBox>
        <StyledBox bgColor="yellow"></StyledBox>

      </StyledContainer>
    </>
  )
}
