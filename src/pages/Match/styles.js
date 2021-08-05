import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1{
    color: white;
  }
`;

export const Content = styled.div`
  display: flex-box;
  border-radius: 5px
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  color: white;
  background: rgba(255, 255, 255, 0.15);


  .spells-title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }
  img {
    width: 100px;
    heigth : 100px;
  }
  .spells img {
    width: 100px;
    heigth : 100px;

    margin:10px;
    border-radius: 5px
  }
  h2 {
    margin-top: 5px;
  }
`;

export const Header = styled.div`
  width: 100%;

  img {
    margin-bottom: 5px;
    margin-top: 15px;
  }
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
