import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import api from "../../services/backend";

import {
  Container
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
            <h1>
            {summoner.kills}/{summoner.deaths}/{summoner.assists}
          </h1>
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