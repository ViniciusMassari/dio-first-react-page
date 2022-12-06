import React from "react";
import { UserPicture, Progress, NameText, Container } from "./styles";
import IUserInfo from "./types";

export const UserInfo = ({ nome, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src="https://avatars.githubusercontent.com/u/108671484?v=4" />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};
