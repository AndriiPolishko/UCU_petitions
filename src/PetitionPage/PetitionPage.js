import { useState } from 'react';
import './PetitionPage.css';

function PetitionPage({ petition }) {
  const [textOrSigners, setTextOrSigners] = useState(1);
  return (
    <div className="petitionPage-container">
      <h3 className="petitionId">№{petition.Id}</h3>
      <section className="petitionData">
        <h1>{petition.name}</h1>
        <p>Автор: {petition.author}</p>
        <p className="date">Дата публікації:{petition.date}</p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <button
              onClick={() => {
                setTextOrSigners(1);
              }}
            >
              Текст публікації
            </button>
            <button
              onClick={() => {
                setTextOrSigners(0);
              }}
            >
              Підписанти
            </button>
          </div>
          {textOrSigners === 1 ? (
            <div className="textContainer">{petition.longDescription}</div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolorum quisquam moles tias! Provident necessitatibus iusto rem
            doloremque blanditi is minus, fugit delectus impe dit a saepe
            quaerat doloribus eos, voluptas voluptates excepturi?
          </p>
          <button className="">Додати в обране</button>
        </div>
      </section>
    </div>
  );
}

export default PetitionPage;
