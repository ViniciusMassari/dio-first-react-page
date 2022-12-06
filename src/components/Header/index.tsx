import React from "react";
import Button from "../Button";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import IHeader from "./types";

const Header = ({ authenticated }: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          {authenticated ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/108671484?v=4" />
            </>
          ) : (
            <>
              <MenuRight href="">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
