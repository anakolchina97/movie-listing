import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Rating from "./Rating";

const Film = ({ name, img, rating }) => {
  return (
    <FilmWrap>
      <Rating rating={rating} />
      <FilmImgBox>
        <FilmImg src={img} alt={name} />
      </FilmImgBox>
      <FilmTitle>{name}</FilmTitle>
    </FilmWrap>
  );
};

const FilmWrap = styled.div`
  position: relative;
  padding: ${rem(8)} ${rem(8)} ${rem(24)};
  min-height: ${rem(480)};
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(${rem(40)});
  border-radius: ${rem(12)};
`;

const FilmImgBox = styled.div`
  border-radius: ${rem(8)};
  overflow: hidden;
  height: ${rem(400)};
  margin-bottom: ${rem(25)};
`;

const FilmImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

const FilmTitle = styled.div`
  font-weight: 600;
  font-size: ${rem(16)};
  line-height: 150%;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.grey.fifty};
  padding-left: ${rem(9)};
`;

export default Film;
