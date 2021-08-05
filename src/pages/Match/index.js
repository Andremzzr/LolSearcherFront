import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import api from "../../services/backend";
import { FaAngleLeft } from 'react-icons/fa';

import {
  Container,
  Content,
  Header,
  ReturnHome
} from './styles';

const Match = ({match, history}) => {
    
    const [summoner, setSummoner] = useState(Object);
    const [loading, setLoading] = useState(0);

    

    useEffect(() => {
        async function loadData() {
          setLoading(1);
          const res = await api
            .get(`/champion/${match.params.summonerId}/${match.params.championName}/${match.params.championId}`)
            .catch((e) =>{
                alert(e)
                // history.push('/')
            } 
            );
    
          if (res && res.data) {
            setSummoner(res.data);
            
          }
          setLoading(0);
        }
        loadData();
    
        //eslint-disable-next-line
      }, []);
    return ( 
        <>
        {
        !loading?
          <Container>
            <Content>
            Last Match Played with {match.params.championName}  
              <Header>
              <img src={summoner.champion}></img>
            <h2>
             {`KDA: ${summoner.kills}/${summoner.deaths}/${summoner.assists}`}
            </h2>
              </Header>
            
           
            {
              summoner.win == false ?
              <h2>
                Loose
              </h2> :
              <h1> 
                Win
              </h1>
            }
            
            <div className="spells-title">Spells:</div>
            <div className="spells">
              <img src={summoner.spell1Url}></img>
              <img src={summoner.spell2Url}></img>
            </div>

            </Content>
            <ReturnHome onClick={() => history.push('/')}>
          <FaAngleLeft size={30} color="#FFF" />
          <span>back to home</span>
       </ReturnHome>
          
          </Container>
        :
        (
          <Container>
               <Spinner animation="border" variant="light" />
          </Container>
         
        )
      }
        </>
     );
}
 
export default Match;