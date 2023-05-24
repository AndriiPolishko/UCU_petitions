import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './PetitionPage.css';
import Button from '../Button/Button';
import CircleDiagram from '../CircleDiagram/CircleDiagram';
import UserContext from '../UserContext/UserContext';

function PetitionPage() {
  const [petition, setPetition] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.petition);
        setPetition(json.petition);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const { user, setUser } = useContext(UserContext);
  const handleSign = () => {
    const newVotes = petition.votes + 1;
    !user.loggedIn
      ? alert('Залогіньтеся, щоб голосувати')
      : fetch(`${process.env.REACT_APP_BASE_URL}/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            voters: [
              ...petition.voters,
              { id: user.googleId, name: user.name },
            ],
            votes: newVotes,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  };

  const [textOrSigners, setTextOrSigners] = useState(1);
  return (
    <div className="petitionPage-container">
      <h3 className="petitionId">№{petition && petition._id}</h3>
      <section className="petitionData">
        <h1>{petition && petition.name}</h1>
        <p>Автор: {petition && petition.author}</p>
        <p className="date">
          Дата публікації:
          {petition && new Date(petition.date).toLocaleDateString('uk-UA')}
        </p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <Button
              onClick={() => {
                setTextOrSigners(1);
              }}
              className={
                textOrSigners === 1
                  ? 'green span-select-left-button'
                  : 'span-select-left-button'
              }
            >
              Текст публікації
            </Button>
            <Button
              onClick={() => {
                setTextOrSigners(0);
              }}
              className={
                textOrSigners === 0
                  ? 'green span-select-right-button'
                  : 'span-select-right-button'
              }
            >
              Підписанти
            </Button>
          </div>
          {textOrSigners === 1 ? (
            <div className="textContainer">
              {petition && petition.description && petition.description}
            </div>
          ) : (
            <div className="textContainer">
              {petition &&
                petition.voters &&
                petition.voters.length > 1 &&
                petition.voters
                  .slice(1)
                  .map((voter) => <li key={voter.id}>{voter.name}</li>)}
            </div>
          )}
        </div>
      </section>
      <section className="importantInfo">
        <div className="importantDataContainer">
          {petition.votes && petition.votesNeeded && (
            <CircleDiagram
              totalSigns={petition.votes}
              neededSigns={petition.votesNeeded}
            />
          )}
          <div className="importantDataContainer_text">
            <p>
              {petition && petition.votes} / {petition && petition.votesNeeded}
            </p>
            <p>Статус: {petition.status || 'триває збір підписів'}</p>
          </div>
          <Button
            className="petition-sign-button"
            onClick={handleSign}
          >
            Підписати
          </Button>
          <div className="petitionGist ">
            <Button className="add-to-chosen-button">Додати в обране</Button>
          </div>
          <div>{petition.shortDescription}</div>
        </div>
      </section>
    </div>
  );
}

export default PetitionPage;
