import React, {useState, useEffect} from 'react'
import MatchCarousel from './MatchCarousel'

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/matches")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json)
        console.log(matches)
      });
  }, []);
      console.log(matches);



  return (
    <div>Matches
      <MatchCarousel matches = {matches}/>
    </div>
    
  )
}

export default Matches