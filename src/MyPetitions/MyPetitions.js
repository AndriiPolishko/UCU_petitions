import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Petition from '../Petition/Petition';
import './MyPetitions.css';
import UserContext from '../UserContext/UserContext';

function AllPetitionsContainer() {
  const { user, setUser } = useContext(UserContext);
  const [petitions, setPetitions] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}?sort=vote`, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => {
        setPetitions(json.petitions);
        setPetitions(
          petitions.filter((item) => item.author === 'Роман Мутель')
        );
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [petitions, user.name]);
  return (
    <div className="petitionsWrapper">
      {!user.loggedIn ? (
        <div>Log in</div>
      ) : (
        petitions[0] &&
        petitions.map((petition) => (
          <Petition
            key={petition._id}
            {...petition}
          />
        ))
        //||
        //'loading...'
      )}
    </div>
  );
}

export default AllPetitionsContainer;
