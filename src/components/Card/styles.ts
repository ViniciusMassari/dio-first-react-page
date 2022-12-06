import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #384651;
  position: relative;
  margin-bottoom: 1.5em;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 11.25em;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
`;

export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 0.75em;

  div {
    margin-left: 0.75em;
  }

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 1.562em;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125em;
    line-height: 1.562em;
    color: #fff;
  }
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 22px;
  border: 3px solid #fff;
`;

export const PostInfo = styled.div`
  margin-bottom: 0.75em;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 1.562em;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75em;
    line-height: 1em;
  }
`;

export const HasInfo = styled.div`
  margin-bottom: 0.75em;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 1.562em;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75em;
    line-height: 1.375em;
  }
`;
