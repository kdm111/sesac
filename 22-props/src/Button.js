import './Button.css'

export default function Button (props) {
  const {link, children} = props;
  return (
    <a href={link} >
      <button className='button'>
        {children}
      </button>
    </a>
  );
};

Button.defaultProps = {
  link : 'http://google.com',
  children : '구글로 이동'
}
