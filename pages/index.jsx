import Head from "next/head";
import Films, { FilmsWrap } from "../components/Films";
import Main from "../components/Main";
import { H1Wrap } from "../components/H1";
import { TextWrap } from "../components/Text";
import styled from "styled-components";
import { rem } from "polished";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import axios from "axios";
import Pagination from "../components/Pagination";
import Skeleton from "../components/Skeleton";

export default function Home({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState("");
  const [page, setPage] = useState(1);
  const [tabValue, setTabValue] = useState("All");
  const findFilm = films ? films.movies.length : data.movies.length;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}?page=${page}&search=${search}&category=${tabValue}`
      )
      .then(({ data }) => setFilms(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [search, tabValue, page]);

  return (
    <>
      <Main>
        <HomeTitle>MaileHereko</HomeTitle>
        <HomeText>
          List of movies and TV Shows, I,{" "}
          <HomeTextPrimary>Pramod Poudel</HomeTextPrimary> have watched till
          date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </HomeText>
        <HomeSearch>
          <Search search={search} setSearch={setSearch} />
        </HomeSearch>
        <Tabs setTabValue={setTabValue} />
        {findFilm && !isLoading ? (
          <>
            <HomeSubtitle>
              {tabValue} <HomeSubtitleCount>({films.total})</HomeSubtitleCount>
            </HomeSubtitle>
            <Films data={films ? films : data} />
          </>
        ) : (
          <>
            {isLoading ? (
              <HomeSkeleton>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </HomeSkeleton>
            ) : (
              <FilmNotFound>Фильм не найден</FilmNotFound>
            )}
          </>
        )}
        {findFilm !== 0 && !isLoading && (
          <Pagination
            total={findFilm ? films.total : data.total}
            page={page}
            limit={findFilm ? films.limit : data.limit}
            setPage={setPage}
          />
        )}
      </Main>
    </>
  );
}

const HomeSearch = styled.div`
  width: ${rem(344)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(80)};
`;

const HomeSkeleton = styled(FilmsWrap)``;

const HomeTitle = styled(H1Wrap)`
  margin-bottom: ${rem(16)};
`;

const HomeSubtitle = styled.p`
  margin-bottom: ${rem(24)};
  font-weight: 600;
  font-size: ${rem(32)};
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #767e94;
`;

const HomeSubtitleCount = styled.span`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
`;

const HomeText = styled(TextWrap)`
  margin-bottom: ${rem(24)};
`;

const HomeTextPrimary = styled.span`
  display: inline;
  color: ${(props) => props.theme.colors.primary};
`;

const FilmNotFound = styled.h2`
  margin-bottom: ${rem(50)};
`;

export const getStaticProps = async () => {
  const { data } = await axios.get(`${process.env.API_KEY}`);
  return {
    props: {
      data,
    },
  };
};
