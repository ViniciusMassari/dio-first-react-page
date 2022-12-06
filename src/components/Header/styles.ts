import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 2.93em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 2.93em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`
  width: 10.93em;
  height: 1.87em;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
`;
export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 1.125em;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
`;
export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radiu: 22px;
  border: 2px solid #fff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
`;
