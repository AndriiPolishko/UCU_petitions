import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PetitionPage.css";
import Button from "../Button/Button";
import CircleDiagram from "../CircleDiagram/CircleDiagram";

function PetitionPage() {
  const { id } = useParams();
  const testPost = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  const petitions = [
    {
      id: 1,
      name: "Sample",
      author: "Andrii",
      date: "15.05.2023",
      longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit magnam, corporis laudantium delectus repellat \
        sit nobis corrupti praesentium quibusdam maxime pariatur sunt explicabo accusantium debitis necessitatibus perspiciatis \
        esse consequatur?`,
      signers: [
        "first name second name",
        "first name second name",
        "first name second name",
        "first name second name",
        "first name second name",
      ],
      signs: 123,
      signsNeeded: 321,
      status: "Очікування",
    },
    {
      id: 2,
      name: "Sample 2",
      author: "Roman",
      date: "15.05.2320",
      longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
      signers: [
        "first name second name",
        "first name second name",
        "first name second name",
      ],
      signs: 3,
      signsNeeded: 100,
      status: "Очікування",
    },
  ];

  const petition = petitions.find((obj) => obj.id === +id);

  const [textOrSigners, setTextOrSigners] = useState(1);
  return (
    <div className="petitionPage-container">
      <h3 className="petitionId">№{petition.id}</h3>
      <section className="petitionData">
        <h1>{petition.name}</h1>
        <p>Автор: {petition.author}</p>
        <p className="date">Дата публікації: {petition.date}</p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <Button
              onClick={() => {
                setTextOrSigners(1);
              }}
              className={
                textOrSigners === 1
                  ? "green span-select-left-button"
                  : "span-select-left-button"
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
                  ? "green span-select-right-button"
                  : "span-select-right-button"
              }
            >
              Підписанти
            </Button>
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
          <CircleDiagram
            totalSigns={petition.signs}
            neededSigns={petition.signsNeeded}
          />
          <div className="importantDataContainer_text">
            <p>Статус: {petition.status}</p>
            <p>Залишилось часу: Lorem</p>
          </div>
          <Button className="petition-sign-button">Підписати</Button>
        </div>
        <div className="petitionGist ">
          <p className="petitionGist_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolorum quisquam moles tias! Provident necessitatibus iusto rem
            doloremque blanditi is minus, fugit delectus impe dit a saepe
            quaerat doloribus eos, voluptas voluptates excepturi?
          </p>
          <Button className="add-to-chosen-button">Додати в обране</Button>
        </div>
      </section>
    </div>
  );
}

export default PetitionPage;
