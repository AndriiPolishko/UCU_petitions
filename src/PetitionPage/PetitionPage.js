import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PetitionPage.css";

function PetitionPage() {
  const [petition, setPetition] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPetition(json.petition);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  const [textOrSigners, setTextOrSigners] = useState(1);
  return (
    <div className="petitionPage-container">
      <h3 className="petitionId">№{petition && petition._id}</h3>
      <section className="petitionData">
        <h1>{petition && petition.name}</h1>
        <p>Автор: {petition && petition.author}</p>
        <p className="date">Дата публікації:{petition && (new Date(petition.date)).toLocaleDateString("uk-UA")}</p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <button
              onClick={() => {
                setTextOrSigners(1);
              }}
              className={textOrSigners === 1 ? "green" : null}
            >
              Текст публікації
            </button>
            <button
              onClick={() => {
                setTextOrSigners(0);
              }}
              className={textOrSigners === 0 ? "green" : null}
            >
              Підписанти
            </button>
          </div>
          {textOrSigners === 1 ? (
            <div className="textContainer">{(petition && petition.description) && petition.description}</div>
          ) : (
            <div className="textContainer">{petition && petition.voters && petition.voters.map(voter => <li key={voter.id}>{voter.name}</li>)}</div>
          )}
        </div>
      </section>
      <section className="importantInfo">
        <div className="importantDataContainer">
          <div className="importantDataContainer_text">
            <p>
              {petition && petition.votes} / {petition && petition.votesNeeded}
            </p>
            <p>Статус: {petition.status || "триває збір підписів"}</p>
            <p>Залишилось часу: {petition && (new Date(petition.date)).toLocaleDateString("uk-UA")}</p>
          </div>
          <button className="button">Підписати</button>
        </div>
        <div className="petitionGist ">
          {petition && petition.voters &&
            petition.voters.slice(4).map((user) => (
              <li key={user.id} className="petitionGist_text">
                {user.name}
              </li>
            ))}
          <button className="">Додати в обране</button>
        </div>
      </section>
    </div>
  );
}

export default PetitionPage;
