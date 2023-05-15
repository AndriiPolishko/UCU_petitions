import React from 'react';
import './Petition.css';
import person from '../media/person.svg';
import plus from '../media/plus.svg';

const Petition = () => {
    return (
        <div className="pet-item">
            <div className="pet-content">
                <div className="pet-left">
                    <div className="pet-top">
                        <span className="pet-number">№22/192830-еп</span>
                        <span className="pet-separator">|</span>
                        <span className="pet-tag">#Без теми</span>
                    </div>
                    <div className="pet-title">
                        <a className="pet-link" href="/petition/192830">
                            ТУТ МАЄ БУТИ ЗАГОЛОВОК.
                        </a>
                    </div>
                    <div className="pet-hide">
                        <div className="pet-date-container">
                            <div className="pet-date">
                                <img src={plus} className="fa-plus" /> Дата оприлюднення: 15 травня 2023
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pet-right">
                    <div className="pet-stepper">
                        <div className="pet-counts">
                            <strong>3</strong> голоси
                        </div>
                        <div className="pet-progress">
                            <div className="progress-full">
                                <span style={{ width: '2%' }} className="progress-current"></span>
                            </div>
                        </div>
                        <div className="pet-status">
                            <img className="pet-status-icon" src={person} alt="Person Icon" />
                            Триває збір підписів
                        </div>
                        <div className="pet-timer">Залишилося 93 дні</div>
                        <div className="pet-hide">
                            <a className="pet-btn">В ОБРАНЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Petition;
