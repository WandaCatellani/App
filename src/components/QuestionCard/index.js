import './index.css';

function QuestionCard({ question }) {
  return (
    <div className='box'>
      <div className='questionCard'>
        <span className='tag is-rounded is-primary is-light'>
          {question.id}
        </span>

        <span>
          <strong> {question.question}</strong>
        </span>
      </div>

      {question.answers.map((opcion) => (
        <div key={opcion.id}>
          <input
            type='radio'
            id={`${opcion.id}`}
            name={opcion.id}
            value={opcion.answer}
          ></input>

          <label htmlFor={`${opcion.id}`}> {opcion.answer}</label>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;
