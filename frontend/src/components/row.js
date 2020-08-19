import React from 'react';
import '../App.css';

function Row(user, index) {
  return (
    <div
      className="row"
      data-testid="users"
      style={{ background: user.user.isCurrentUser ? '#F2F5FC' : '#FFFFFF' }}>

        <h4 className="index"> {user.index + 1} </h4>
        <h4 className="name"> {user.user.username} </h4>
        <h4 className="points"> {user.user.weeklyXP}XP </h4>
    </div>
  );
}

export default Row;
