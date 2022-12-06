import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.png";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHightLight } from "./styles";

import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightLight>
              Implemente
              <br />
            </TitleHightLight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </Container>
    </>
  );
};

export default Home;
