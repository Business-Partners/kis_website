import styled from "styled-components";
import { ViewContainer } from "../../styles";

export const PriceContainer = styled(ViewContainer)`
  background: #348888;

  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PriceCard = styled.li`
  margin: 3px 25px;
  width: 250px;
  background: #f8f8f8;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border-bottom: 5px solid #232323;
  padding-bottom: 25px;
  transition: all 0.4s;

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 150px;
    width: 100%;
    background: #9ef8ee;

    border-radius: 8px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;

    margin-bottom: 30px;

    strong {
      color: #3f3f3f;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      text-transform: uppercase;
    }

    h3 {
      color: #111111;
      font-size: 28px;
      font-weight: 900;
      margin: 7px auto 10px;

      span {
        font-size: 12px;
        font-weight: 400;
      }
    }

    p {
      font-size: 11px;
      color: #666666;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 25px;

    li {
      line-height: 2;
      color: #666666;
      font-weight: 400;
    }
  }

  a {
    width: 70%;
    height: 40px;
    color: #ffffff;
    margin: 0 auto;
    background: #348888;
    border-radius: 25px;
    transition: all 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      color: #348888;
      background: #ffffff;
      border: 1px solid #348888;
    }
  }
`;
