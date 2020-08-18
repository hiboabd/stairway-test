import React, {useState, useEffect} from 'react';
import '../App.css';
import Banner from './banner';
import Row from './row';
const axios = require('axios');

function Leaderboard() {

  let [row, setRow] = useState([]);


  return (
    <div className="leaderboard">
      <Banner />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default Leaderboard;


// useEffect(() => {
//   async function fetchData(){
//     const response = await axios.get(`https://www.stairwaylearning.com/api/v1/stub/leaderboard`)
//     console.log(response)
//     setRow(response.profiles)
//   }
//   fetchData();
// }, [])

// {row.map((row, index) => (
//   <Row key={index} index={index} row={row} />
// ))}
