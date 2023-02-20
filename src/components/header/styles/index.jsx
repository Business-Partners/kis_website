import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 60px;
  width: 100%;
  box-shadow: 1px 1px 5px #333333;
  // background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  > a {
    display: flex;
    align-items: center;

    img {
      width: 48px;
    }

    strong {
      color: #333333;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5;
      margin-left: 10px;
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        margin: 0 3px;
        position: relative;

        :hover {
          ul {
            height: 125px;
          }
        }

        ul {
          position: absolute;
          display: flex;
          flex-direction: column;
          margin-top: 55px;
          width: 200px;
          background: #ffffff;
          transition: all 0.4s;
          height: 0;
          overflow: hidden;

          li {
            a {
              width: 100%;
              justify-content: flex-start;
              padding-left: 10px;
              border: none;
              border-right: 5px solid #ffffff;
              transition: 0.3s;
              margin: 3px 0;

              :hover {
                border-color: #348888;
              }
            }
          }
        }

        a {
          font-size: 14px;
          color: #333333;
          font-weight: 500;
          text-transform: capitalize;
          width: 100px;
          height: 55px;
          transition: all 0.4s;
          border-bottom: 5px solid transparent;

          display: flex;
          align-items: center;
          justify-content: center;

          :hover {
            border-bottom-color: #348888;
          }
        }
      }
    }
  }

  > div {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 40px;
      border-radius: 25px;
      background: #348888;
      color: #ffffff;
      transition: all 0.3s;
      border: 1px solid transparent;

      :hover {
        background: transparent;
        color: #348888;
        border: 1px solid #348888;
      }
    }
  }
`;
