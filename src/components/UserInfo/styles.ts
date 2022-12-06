import styled from "styled-components";
import IUserInfoStyled from "./types"

export const Container = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const UserPicture = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 22px;
  border: 3px solid #fff;
  margin-right: 0.75em;
`;

export const NameText = styled.div`
  font-family: "Open sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125em;
  line-height: 1.562em;
  color: #fff;
`;

export const Progress = styled.div<IUserInfoStyled>`
  width: 11.25em;
  height: 6px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a;
  }
`;


