import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 18.75em;
`;



export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25em;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  width: 20em;
  margin-bottom: 1.25em;
  line-height: 2.75em;

  color: #fff;
`;

export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2em;

  margin-bottom: 1.25em;
  line-height: 2.75em;
`;
export const SubtitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125em;

  margin-bottom: 2.187em;
  line-height: 1.56em;
`;

export const EsqueciText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.142em;
  line-height: 1.187em;

  color: #e5e044;
`;

export const CriarText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.142em;
  line-height: 1.187em;

  color: #e23dd7;
`;
