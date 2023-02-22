import styled from "styled-components";
import { ViewContainer } from "../../styles";

export const AboutContainer = styled(ViewContainer)`
  width: 90%;
  max-width: 1024px;

  > div {
    width: 100%;
    display: flex;
    aling-items: center;
    justify-content: space-between;
    margin: 15px 0;

    div {
      width: 48%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      p {
        font-size: 16px;
        color: #343434;
        margin: 5px 0;
        line-height: 1.5;
        text-align: justify;
      }

      img {
        width: 100%;
        height: auto;
        border: 2px solid #348888;
        border-radius: 25px;
      }
    }
  }
`;
