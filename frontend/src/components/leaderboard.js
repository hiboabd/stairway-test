import React, {useState, useEffect} from 'react';
import '../App.css';
import Banner from './banner';
import Row from './row';
const axios = require('axios');

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    async function fetchData(){
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get(`https://www.stairwaylearning.com/api/v1/stub/leaderboard`)
        let data = response.data.profiles
        data.sort(function(user1, user2){return user2.weeklyXP - user1.weeklyXP})
        setUsers(data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData();
  }, [])

  return (
    <div className="leaderboard">
      <Banner />

      {isError && <div className="error-msg"> <h3> Something went wrong... </h3> </div>}

      { isLoading ? (
        <div className="loading-msg"> <h3> Loading... </h3> </div>
      ) : (
        <>
        {users.map((user, index) => (
          <Row
            key={index}
            index={index}
            user={user}
            />
        ))}
        </>
      )}
    </div>
  );
}

export default Leaderboard;
