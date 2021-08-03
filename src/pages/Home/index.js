import {Container, Header, Img} from './styles.js';
import logo from '../../assets/imgs/logo.png';
import img from '../../assets/imgs/lol.png';
import { useState } from 'react';

export default function Home({history}) {
    const [summoner, setSummoner] = useState('');
    return <Container>
        <Header>
            <img src={logo} alt="logo"></img>
            <span>
                <strong>LOL STATS</strong>
            </span>
        </Header>
        <h1>
            
           Search for the <strong>summoner</strong>
        </h1>
         <form>
             <input 
                placeholder="Summoner name..."
                value={summoner}
                onChange={e => setSummoner(e.target.value)}
             />
             <label>BR1</label>
             <button
                onClick={() => history.push(`/summoner/${summoner}`)}
             >Search</button>
         </form>
            
                <Img src={img} />
            
    </Container>
}