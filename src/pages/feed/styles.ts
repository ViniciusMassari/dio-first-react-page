import styled from "styled-components";
import IColumn from "./types";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
font-family: "Open Sans";
font-style: normal;
font-weight: 700;
font-size: 2em;
width: 20em;
margin-bottom: 1.25em;
line-height: 2.75em;

color: #fff;
`

export const TitleHightLight = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125em;
  margin-bottom: 1.25em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #ffffff7c;
`

export const Column = styled.div<IColumn>`
  flex:${({ flex }) => flex};
  padding-right: 1.5em;
`
