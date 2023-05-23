import React, { useState } from "react";
import "./PetitionForm.css";
import "../App.css";
import Button from "../Button/Button";

function PetitionForm() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [buttonText, setButtonText] = useState("Створити петицію");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const petition = {
      name: name,
      author: "dummy_author_name",
      date: Date.now(),
      description: body,
      shortDescription: name,
      votes: 0,
      votesNeeded: 50,
      voters: [],
    };
    const res = await fetch(`http://localhost:5000/api/petitions/`, {
      method: "POST",
      body: JSON.stringify(petition),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(petition);
    if (res.status == 200) {
      setButtonText("Успішно створено!");
    } else {
      setButtonText(`Сталась помилка! (код ${res.status})`);
    }
    setName("");
    setBody("");
  };

  return (
    <div className="petition-form">
      <h2>Створити електронну петицію УКУ</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Назва петиції:</label>
          <input
            className="petitioin-name"
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="body">Текст петиції:</label>
          <textarea
            className="petitioin-textarea"
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          className={buttonText === "Успішно створено!" ? "success" : ""}
        >
          {" "}
          {buttonText}{" "}
        </Button>
      </form>
    </div>
  );
}

export default PetitionForm;
