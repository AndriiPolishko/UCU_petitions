import React from 'react';

function PetitionPage() {
  return (
    <>
      <section className="petitionData">
        <p>petition.Id</p>
        <p>petition.name</p>
        <p>petition.author</p>
        <div className="textAndSigners">
          <div className="buttonContainer">
            <button></button>
            <button></button>
          </div>
          <div className="textContainer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            magnam! Excepturi accusamus, molestias corporis est perspiciat is at
            illo saepe eos odio error tempore, veniam quibusdam sint possimus
            aspernatur, illum ullam.
          </div>
        </div>
      </section>
      <section className="importantInfo">
        <div className="importantDataContainer">
          <div className="importantDataContainer_text">
            <p>Кількість підписів / Потрібна кількість підписів</p>
            <p>Статус</p>
            <p>Залишилось часу</p>
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
    </>
  );
}

export default PetitionPage;
