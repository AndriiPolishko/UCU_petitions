import React from "react";
import { Link } from "react-router-dom";
import "./Petition.css";
import person from "../media/person.svg";
import plus from "../media/plus.svg";
import Button from "../Button/Button";

const Petition = ({
  _id,
  name,
  author,
  date,
  votes,
  votesNeeded,
  status
}) => {
  return (
    <Link className="pet-main-link" to={`/petition/${_id}`}>
      <div className="pet-item">
        <div className="pet-content">
          <div className="pet-left">
            <div className="pet-top">
              <span className="pet-number">{_id}</span>
              <span className="pet-separator">|</span>
              <span className="pet-tag">{author}</span>
            </div>
            <div className="pet-title">
              <h2 className="pet-link">{name}</h2>
            </div>
            <div className="pet-hide">
              <div className="pet-date-container">
                <div className="pet-date">
                  <img src={plus} className="fa-plus" /> Дата оприлюднення:{" "}
                  {(new Date(date)).toLocaleDateString("uk-UA")}
                </div>
              </div>
            </div>
          </div>
          <div className="pet-right">
            <div className="pet-stepper">
              <div className="pet-counts">
                <strong>{votes}</strong> голоси
              </div>
              <div className="pet-progress">
                <div className="progress-full">
                  <span
                    style={{ width: `${Math.round(votes / votesNeeded)}%` }}
                    className="progress-current"
                  ></span>
                </div>
              </div>
              <div className="pet-status">
                <img
                  className="pet-status-icon"
                  src={person}
                  alt="Person Icon"
                />
                {status || "Триває збір підписів"}
              </div>
              {!(status==="in_process") && <div className="pet-timer">Залишилося 93 дні</div>}
              <Button>
                <span className="button-text">В ОБРАНЕ</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Petition;
