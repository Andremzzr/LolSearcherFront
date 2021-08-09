import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    color: #black;
    strong {
      color: #A73AFC;
    }
  }

  form {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 50px;

    input {
      padding: 10px;
      border: 0.1px solid black;
      border-radius: 4px;
      text-align: center;
      width: 60%;
    }

    label {
      color: #fff;
      text-align: center;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      width: 15%;
      margin: 0;
    }

    button {
      color: #fff;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
    }
      
  }

  @media(max-width: 414px){
      form{
        width: 350px;
      }
      h1{
        font-size: 20px;
      }
    }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  img {
    height: 150px;
    width: 150px;
  }
  span {
    font-size: 48px;
    color: #A73AFC;
  }

  @media(max-width: 414px){
      width: 400px;
      span{
        font-size: 30px;
      }
    }
`;

export const Img = styled.img`
  
  width: 187px;
  height: 300px;

  @media(max-width: 414px){
      width: 360px;
      height: 230px;
    }
`;