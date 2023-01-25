import React, {useState, useEffect} from 'react'
import Header from './Header';
import MatchCarousel from './MatchCarousel'
import Chat from './Chat'
import MatchCards from './MatchCards';

function Matches() {
  const [matches, setMatches] = useState([]);
  const [beltPosition, setBeltPosition] = useState(0)
  const [match, setMatch] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json);
        console.log(matches);
      });
  }, []);
      console.log(matches);

      function startChat(match) {
        console.log(match);
        setMatch(match)
      }



  return (
    <div>
      <Header />
      <MatchCarousel startChat={startChat} beltPosition={beltPosition} setBeltPosition={setBeltPosition}  matches = {matches.slice(beltPosition, beltPosition+4)}/>
      <div className='belt'>
      <MatchCards match={match}/>
      <Chat match={match}/>

      </div>
    </div>
    
  )
}

export default Matches