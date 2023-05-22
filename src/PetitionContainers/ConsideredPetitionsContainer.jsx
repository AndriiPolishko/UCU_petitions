import React from 'react'
import { useState, useEffect } from 'react';
import Petition from '../Petition/Petition';

function ConsideredPetitionsContainer() {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/petitions/in_process?sort=vote`, {method: "GET"})
      .then((response) => response.json())
      .then((json) => {
        setPetitions(json.petitions);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="petitionsWrapper">
      {(petitions[0] && petitions.map(petition => <Petition key={petition._id} {...petition}/>) ) || "loading..."}
    </div>
  )
}

export default ConsideredPetitionsContainer