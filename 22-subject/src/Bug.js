
function Bug() {
  const headStyle = {
    position : 'relative',
    backgroundColor : 'darkblue', 
    width : '100px', 
    height : '100px', 
    borderRadius : '50%'}
  const eyeStyle = {
    backgroundColor : 'white', 
    position : 'relative', 
    width : '30px', 
    height : '30px', 
    borderRadius : '50%',
    top : '25%',
    left : '10%'
  }
  const pupilStyle = {
    position : 'absolute',
    backgroundColor : 'black',
    width : '20px', 
    height : '20px', 
    borderRadius : '50%',
    top : '25%'
  }
  return (
    <div style={headStyle}>
      <div style={eyeStyle}>
        <div style={pupilStyle}></div>
      </div>
      <BugBody
        color='blue'
        top='75%'
        left='20%'
      >
      </BugBody>
      <BugBody 
        color='skyblue'
        top='100%'
        left='80%'
      />
      <BugBody 
        color='aqua'
        top='110%'
        left='150%'
      />
      <BugBody 
        color='aquamarine'
        top='120%'
        left='190%'
      />
    </div>
  )
}

function BugBody(props) {
  const bodyStyle = {
    position : 'absolute', 
    backgroundColor : `${props.color}`, 
    width : '100px', 
    height : '100px', 
    borderRadius : '50%',
    top : `${props.top}`,
    left : `${props.left}`
  }
  return (
    <div 
      style={bodyStyle} 
    />
  )
}
export {
  Bug
}