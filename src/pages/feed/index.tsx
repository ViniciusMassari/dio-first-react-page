import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHightLight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHightLight># ranking 5 top da semana</TitleHightLight>
          <UserInfo
            percentual={35}
            nome="Vinícius Massari"
            src="https://avatars.githubusercontent.com/u/108671484?v=4"
          />
          <UserInfo
            percentual={90}
            nome="Vinícius Massari"
            src="https://avatars.githubusercontent.com/u/108671484?v=4"
          />
          <UserInfo
            percentual={12}
            nome="Vinícius Massari"
            src="https://avatars.githubusercontent.com/u/108671484?v=4"
          />
          <UserInfo
            percentual={45}
            nome="Vinícius Massari"
            src="https://avatars.githubusercontent.com/u/108671484?v=4"
          />
          <UserInfo
            percentual={60}
            nome="Vinícius Massari"
            src="https://avatars.githubusercontent.com/u/108671484?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
