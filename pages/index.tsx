import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <Title>Hello Next.js 👋</Title>
    </Layout>
  );
};

const Title = styled.h1`
  color: red;
`;

export default Index;
