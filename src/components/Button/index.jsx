// import './style.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='button btn is-info'>
      {text}
    </button>
  );
};

export default Button;
