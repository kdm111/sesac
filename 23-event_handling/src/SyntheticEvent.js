export default function SyntheticEvent () {
  // 이벤트가 발생하는 객체가 자동으로 들어간다.
  function syntheticEvent (e) {
    console.log('SyntheticFunction called')
    console.log(e)
    // 콘솔에 찍히는 e 객체는 합성 이벤트를 나타낸다.
    // 브라우저마다 이벤트이름과 종류가 다르기 때문에 동일하게 처리하기위한 리액트 이벤트 객체 e
    // e.preventDefault()
  }
  function printInputValue (e) {
    console.log(e.target.value)
  }
  return (
    <div>
      {/* e는 따로 매개변수로 넘겨주지 않아도 사용이 가능하다. */}
      <button onClick={syntheticEvent}>click</button>
      <input type='text' placeholder='입력' onChange={printInputValue}/>
    </div>
  )
}