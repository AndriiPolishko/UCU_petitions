import React, { useState } from "react";
import "./PetitionForm.css";
import "../App.css";
import Button from "../Button/Button";

function PetitionForm() {
  const [theme, setTheme] = useState("");
  const [text, setText] = useState("");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you we perform further actions such as sending the petition data to an API or performing other operations

    // Reset the form after submission
    setTheme("");
    setText("");
  };

  return (
    <div className="petition-form">
      <h2>Створити електронну петицію УКУ</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="theme">Суть звернення:</label>
          <textarea
            class="petitioin-textarea"
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="text">Текст петиції:</label>
          <textarea
            class="petitioin-textarea"
            id="text"
            value={text}
            onChange={handleTextChange}
            required
          ></textarea>
        </div>
        <Button type="submit"> Створити петицію </Button>
      </form>
    </div>
  );
}

export default PetitionForm;
