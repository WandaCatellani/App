// import './style.css';

import Button from '../../components/Button';
import background from '../../assets/img/background.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/game');
  };

  return (
    <section
      className='hero is-medium is-fullheight'
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1>Página Home</h1>

          <Button onClick={onClickButton} text='Ir a Game' />
        </div>
      </div>
    </section>
  );
};

export default Home;
