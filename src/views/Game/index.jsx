import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const API_URL =
  'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter';

const Game = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Página de Game</h1>
      <Button onClick={onClickButton} text='Ir a Home' />

      {loading && <span>Cargando</span>}
    </>
  );
};

export default Game;
