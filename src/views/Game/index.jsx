import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import QuestionCard from '../../components/QuestionCard';
import { useNavigate } from 'react-router-dom';

const API_URL =
  'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <section className='section'>
        <nav className='breadcrumb' aria-label='breadcrumbs'>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>

            <li className='is-active'>
              <Link to='/game'>Juego</Link>
            </li>
          </ul>
        </nav>

        {loading ? (
          <Loader />
        ) : (
          <form>
            {questions.map((pregunta) => {
              return (
                <QuestionCard key={pregunta.id} preguntaActual={pregunta} />
              );
            })}
          </form>
        )}

        <h1>Página Game</h1>

        <Button onClick={onClickButton} text='Ir a Home' />
      </section>
    </div>
  );
};

export default Game;
