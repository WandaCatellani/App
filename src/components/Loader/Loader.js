import './index.css';

import spinner from '../../assets/gifs/spinner-dos.gif';

const Loader = () => {
  return (
    <div className='container spinner'>
      <img className='spinner-img' src={spinner} alt='loading spinner' />
    </div>
  );
};

export default Loader;
