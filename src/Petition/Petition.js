import React from 'react';
import { Link } from 'react-router-dom';

function Petition() {
  return (
    <Link to={'/petition/1'}>
      <div>Petition</div>
    </Link>
  );
}

export default Petition;
