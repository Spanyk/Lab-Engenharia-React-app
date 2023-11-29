import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import styled from "styled-components";

const Menu = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  margin: 5px;
`;

const Title = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 28px;
  letter-spacing: 5px;
`;

const MenuItems = styled.section`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
`;

const CardLink = styled.div`
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
  transition: all 0.3s ease-in-out;
  text-align: center;
  border: 1px solid #fff;
  margin: 10px;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <Menu>
      <Title> Laboratorio de Engenharia: Paulo Augusto da Cruz Peixoto</Title>
      <MenuItems>
        <Link to="/exercicio/atv1">
          <CardLink>Atividade 1 - Letreiro/Contador</CardLink>
        </Link>
        <Link to="/exercicio/atv2">
          <CardLink>Atividade 2 - Contador de Pessoas</CardLink>
        </Link>
        <Link to="/exercicio/atv3">
          <CardLink>Atividade 3 - Componentes Diversos</CardLink>
        </Link>
        <Link to="/exercicio/atv4">
          <CardLink>Atividade 4 - Calculadora</CardLink>
        </Link>
        <Link to="/exercicio/atv5">
          <CardLink>Atividade 5 - Jogo da Memoria</CardLink>
        </Link>
      </MenuItems>
    </Menu>
  );
};
