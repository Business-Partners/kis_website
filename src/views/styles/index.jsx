import styled, { css } from "styled-components";

export const ViewContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;

export const ContainerHeading = styled.h1`
  font-size: 32px;
  font-size: 700;
  line-height: 2;
  text-align: center;
  position: relative;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 4px;
    background: #348888;
  }

  ${({ type }) =>
    type === "white" &&
    css`
      color: #ffffff;
      ::after {
        background: #ffffff;
      }
    `}
`;
