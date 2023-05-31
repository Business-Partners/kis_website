import styled from "styled-components";

export const BannerTag = styled.div`
  width: 100%;
  max-height: 700px;
  height: 100vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 48px;
      line-height: 2;
      color: #f8f8f8;
      font-weight: 900;
      text-transform: capitalize;
      font-style: normal;
    }

    strong {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      font-size: 16px;
      line-height: 2;
    }

    > div {
      display: flex;

      a {
        background: #ffffff;
        color: #348888;
        width: 200px;
        height: 40px;
        border-radius: 25px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        border: 1px solid transparent;
        transition: all 0.4s;

        :hover {
          border-color: #ffffff;
          background: #348888;
          color: #ffffff;
        }
      }
    }
  }

  ::after {
    content: "KIS";
    position: absolute;
    top: 60px;
    left: 0;
    background: #348888;
    width: 100%;
    height: 100%;
    z-index: -1;

    font-size: 500px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;
