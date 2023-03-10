import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Films from "../components/Films";
import { H1Wrap } from "../components/H1";
import Main from "../components/Main";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { rem } from "polished";

export default function tvShows({ data }) {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState("");
  const [page, setPage] = useState(1);
  const findFilm = films ? films.movies.length : data.movies.length;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}?page=${page}&search=${search}&category=TV%20Shows`
      );
      setFilms(data);
    };
    fetchData();
  }, [search, page]);

  return (
    <Main>
      <MoviesTitle>Movies</MoviesTitle>
      <TvShowsSearch>
        <Search search={search} setSearch={setSearch} />
      </TvShowsSearch>
      {findFilm ? (
        <Films data={films ? films : data} />
      ) : (
        <FilmNotFound>Фильм не найден</FilmNotFound>
      )}
      {findFilm !== 0 && (
        <Pagination
          total={findFilm ? films.total : data.total}
          page={page}
          limit={findFilm ? films.limit : data.limit}
          setPage={setPage}
        />
      )}
    </Main>
  );
}

const TvShowsSearch = styled.div`
  width: ${rem(344)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(80)};
`;

const MoviesTitle = styled(H1Wrap)``;

const FilmNotFound = styled.h2`
  margin-bottom: ${rem(50)};
`;

export async function getStaticProps() {
  return fetch(`${process.env.API_KEY}?category=TV%20Shows`)
    .then((res) => res.json())
    .then((data) => {
      return {
        props: { data },
      };
    });
}
