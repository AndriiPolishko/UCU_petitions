import React, { useContext, useState } from "react";
import "./PetitionForm.css";
import "../App.css";
import Button from "../Button/Button";
import UserContext from "../UserContext/UserContext";

function PetitionForm() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [buttonText, setButtonText] = useState(
    user.loggedIn ? "Створити петицію" : "Залогіньтеся аби створити петицію"
  );

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
      author: user.name,
      date: Date.now(),
      description: body,
      shortDescription: name,
      votes: 0,
      votesNeeded: 50,
      voters: [],
    };
    const res = await fetch(process.env.REACT_APP_BASE_URL, {
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
    <div className={`petition-form${!user.loggedIn ? " inactive" : ""}`}>
      <h2>Створити електронну петицію УКУ</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Назва петиції:</label>
          <input
            disabled={!user.loggedIn}
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
            disabled={!user.loggedIn}
            className="petitioin-textarea"
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <Button
          disabled={!user.loggedIn}
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
