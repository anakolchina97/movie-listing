import React from "react";
import styled from "styled-components";
import { ContainerWrap } from "../components/Container";
import { ButtonWrap } from "../components/Button";
import { Wrap } from "../components/H2";
import { rem } from "polished";
import { TextWrap } from "../components/Text";
import NotFoundImg from "../public/notfound.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundContainer>
        <NotFoundImgBox>
          <NotFoundImg />
        </NotFoundImgBox>
        <NotFoundTitle>Lost your way?</NotFoundTitle>
        <NotFoundText>
          Oops! This is&nbsp;awkward. You are looking for something that
          doesn&rsquo;t actually exist.
        </NotFoundText>
        <Link href={"/"}>
          <NotFoundButton>Go Home</NotFoundButton>
        </Link>
      </NotFoundContainer>
    </NotFoundWrap>
  );
};

const NotFoundWrap = styled.div`
  display: flex;
  height: 100vh;
  margin-top: ${rem(-160)};
`;

const NotFoundContainer = styled(ContainerWrap)`
  margin-block: auto;
`;

const NotFoundImgBox = styled.div`
  text-align: center;
  max-width: ${rem(400)};
  width: 100%;
  margin: 0 auto;
`;

const NotFoundTitle = styled(Wrap)`
  margin-bottom: ${rem(10)};
`;

const NotFoundText = styled(TextWrap)`
  text-align: center;
  margin: 0 auto;
  margin-bottom: ${rem(24)};
`;

const NotFoundButton = styled(ButtonWrap)`
  margin: 0 auto;
  text-align: center;
`;

export default NotFound;
