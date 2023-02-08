import Head from "next/head";
import Films from "../components/Films";
import Main from "../components/Main";
import { H1Wrap } from "../components/H1";
import { TextWrap } from "../components/Text";
import styled from "styled-components";
import { rem } from "polished";
import Search from "../components/Search";
import { useState, useEffect } from "react";

export default function Home({ data }) {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState("");
  const findFilm = films ? films.movies.length : data.movies.length;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}?search=${search}`)
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, [search]);

  return (
    <>
      <Head>
        <title>Movie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <HomeTitle>MaileHereko</HomeTitle>
        <HomeText>
          List of movies and TV Shows, I,{" "}
          <HomeTextPrimary>Pramod Poudel</HomeTextPrimary> have watched till
          date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </HomeText>
        <Search search={search} setSearch={setSearch} />
        {findFilm ? (
          <Films data={films ? films : data} />
        ) : (
          <h2>Фильм не найден</h2>
        )}
      </Main>
    </>
  );
}

const HomeTitle = styled(H1Wrap)`
  margin-bottom: ${rem(16)};
`;

const HomeText = styled(TextWrap)`
  margin-bottom: ${rem(24)};
`;

const HomeTextPrimary = styled.span`
  display: inline;
  color: ${(props) => props.theme.colors.primary};
`;

export async function getStaticProps() {
  return fetch(`${process.env.API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      return {
        props: { data },
      };
    });
}
