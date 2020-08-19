import React, {useState, useEffect} from 'react';
import '../App.css';
import Banner from './banner';
import Row from './row';
const axios = require('axios');

function Leaderboard() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(`https://www.stairwaylearning.com/api/v1/stub/leaderboard`)
      let data = response.data.profiles
      data.sort(function(a, b){return b.weeklyXP - a.weeklyXP})
      setUsers(response.data.profiles)
    }
    fetchData();
  }, [])

  return (
    <div className="leaderboard">
      <Banner />
      {users.map((user, index) => (
        <Row
          key={index}
          index={index}
          user={user}
          />
      ))}
    </div>
  );
}

export default Leaderboard;
