import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
  UserPicture,
  UserInfo,
  PostInfo,
  ImageBackground,
  HasInfo,
  Content,
  CardContainer,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148595343.jpg?w=1060&t=st=1668807111~exp=1668807711~hmac=be48a8d52d15812db47ddcb34922cdb43e6ca47027ec301bd7395fb2433eb907" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/108671484?v=4" />
          <div>
            <h4>Vinícius Massari</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito para o curso de HTML e CSS no bootcamp dio do Global
            avanade...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
