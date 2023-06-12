import styled from "styled-components";
import { ViewContainer } from "../../styles";

export const ContactsContainer = styled(ViewContainer)`
  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
  }
`;
export const FormContainer = styled.div`
  > h3 {
    color: #348888;
  }

  width: 360px;
  height: 240px;
  row-gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > input {
    width: 280px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #cccc;
    padding: 8px;
    background-color: #ffff;
  }

  > textarea {
    width: 280px;
    border-radius: 4px;
    border: 1px solid #cccc;
    padding: 8px;
    background-color: #ffff;
  }
`;

export const ContactsContent = styled.div`
  > h2 {
    font-size: 20px;
    font-weight: 600;
    color: #348888;
  }

  > span {
    font-size: 16px;
    color: #716e6e;
  }
  width: 240px;
  height: 140px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 15px;
`;

export const ContactsTag = styled.div`
  width: 800px;
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
