import styled, { css } from "styled-components";

export const WrapperAlmostDone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.4s;

  ${(props: { flex: boolean }) =>
    props.flex === true
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  > img {
    :first-child {
      width: 70px;
      height: 70px;
    }

    :last-child {
      width: 300px;
    }
  }

  h3 {
    margin: 50px auto 75px;
    color: #348888;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }

  a {
    width: 200px;
    height: 36px;
    color: #ffffff;
    background: #348888;
    margin: 50px auto 75px;
    border-radius: 8px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background: transparent;
      color: #348888;
      border: 2px solid #348888;
    }
  }
`;
