import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const ReturnHome = styled.div`
  cursor: pointer;
  float: left;
  margin-top: 20px;
  span{
    size: 24px;
    color: #fff;
  }
`;

export const Content = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;

  h3{
    color: white;
    margin-top: 20px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    font-size: 32px;
  }
  padding-bottom: 20px;
  border-bottom: 2px solid #fff;

  @media(max-width: 414px){
      h2 {
        font-size: 18px;
      }

      h3{
        font-size: 14px;
      }
      img{
        width: 70px;
        height: 70px;
      }
    }

    
`;

export const IconSummoner = styled.img`
  width: 100px;
  height: 100px;
  
  margin-right: 20px;

`;

export const EloSummoner = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px;
`;

export const SummonerInfo = styled.div`
  a {
    
    color: #fff;
    transition-duration: 0.4s;
  }

  a:hover{
    color: #BCBCBC;
  }
    
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 32px;
      label {
        color: #fff;
      }
    }
  }
`;

export const CircleDiv = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  label {
    font-size: 14px;
  }
  label strong {
    font-size: 20px;
    
  }

  label strong .green {
    color: green;
    
  }
  label strong .red{
    color: red;
    
  }
`;

export const WinsLabel = styled.span`
  color: #edc988;
`;

export const LossesLabel = styled.span`
  color: #d7385e;
`;

export const Champions = styled.div`
  display: flex;
  
  
  a{
    margin:  5px;
    transition-duration : 0.5s; 
  }
  a:hover{
    border: 0.4px solid white;
  }
`;