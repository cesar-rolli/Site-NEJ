import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;