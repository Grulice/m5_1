import styled from "styled-components";

export const MainSell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
  
`;
export const CentralBlock = styled.div`
  a {
    text-decoration: none;
  }
  a p {
    width: 170px;
    padding: 15px 20px;
    border: 3px solid #833ae0;
    border-radius: 49px;
    color: #833ae0;
    margin: 0 auto;
  }
  a p:hover {
    background-color: blueviolet;
    border: 3px solid #ffffff;
    color: #ffffff;
  }
  span {
    font-size: 15px;
  }
`;
export const SellWrapper = styled.div`
  width: 100%;
`;
export const HeaderSell = styled.div`
  display: flex;
  width: 100%;
  /* padding-bottom: 56px;
  padding-top: 30px; */
  padding: 30px 30px 56px 30px;
  -webkit-box-shadow: 0px 6px 6px -6px gray;
  -moz-box-shadow: 0px 6px 6px -6px gray;
  box-shadow: 0px 6px 6px -6px gray;
  @media (max-width: 425px) {
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: blueviolet;
    font-size: 18px;
       @media (max-width: 425px) {
        font-size: 12px;
      }
  }
  a:hover {
    text-decoration: underline;
  }
  h2 {
    text-align: center;
    word-break: break-word;
    font-size: 28px;
    flex-basis: 92%;
    color: #2fc20a;
    @media (max-width: 425px) {
    flex-basis: 80%;
    font-size: 20px;
  }
  }
  img {
    width: 12px;
  }
`;
export const PriceText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 14px;
  padding-top: 56px;
  padding-bottom: 66px;
`;
export const SellFor = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 14px;
  padding-top: 66px;
  padding-bottom: 47px;
`;
export const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  button {
    color: blueviolet;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    padding: 10px;
    border: none;
    outline: none;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const InputLenght = styled.input`
  width: 100px;
  font-size: 50px;
  color: blueviolet;
  text-align: center;
  border: none;
  outline: none;
`;