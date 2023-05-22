import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PetitionPage.css';

function PetitionPage() {
  const [petition, setPetition] = useState([]);

  const { id } = useParams();

  const fillerObj = {
    name: 'Sample',
    author: 'Andrii',
    date: '15.05.2023',
    longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit magnam, corporis laudantium delectus repellat \
  sit nobis corrupti praesentium quibusdam maxime pariatur sunt explicabo accusantium debitis necessitatibus perspiciatis \
  esse consequatur?`,
    signers: [
      'first name second name',
      'first name second name',
      'first name second name',
      'first name second name',
      'first name second name',
    ],
    signs: 123,
    signsNeeded: 321,
    status: 'Очікування',
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPetition({...fillerObj, ...json});
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const [textOrSigners, setTextOrSigners] = useState(1);
  return (
    <div className="petitionPage-container">
      <h3 className="petitionId">№{petition.id}</h3>
      <section className="petitionData">
        <h1>{petition && petition.name}</h1>
        <p>Автор: {petition.author}</p>
        <p className="date">Дата публікації:{petition.date}</p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <button
              onClick={() => {
                setTextOrSigners(1);
              }}
              className={textOrSigners === 1 ? 'green' : null}
            >
              Текст публікації
            </button>
            <button
              onClick={() => {
                setTextOrSigners(0);
              }}
              className={textOrSigners === 0 ? 'green' : null}
            >
              Підписанти
            </button>
          </div>
          {textOrSigners === 1 ? (
            <div className="textContainer">{petition.body}</div>
          ) : (
            <div className="textContainer">{petition.signers}</div>
          )}
        </div>
      </section>
      <section className="importantInfo">
        <div className="importantDataContainer">
          <div className="importantDataContainer_text">
            <p>
              {petition.signs} / {petition.signsNeeded}
            </p>
            <p>Статус: {petition.status}</p>
            <p>Залишилось часу: Lorem</p>
          </div>
          <button className="button">Підписати</button>
        </div>
        <div className="petitionGist ">
          <p className="petitionGist_text">
            {petition.body}
          </p>
          <button className="">Додати в обране</button>
        </div>
      </section>
    </div>
  );
}

export default PetitionPage;
