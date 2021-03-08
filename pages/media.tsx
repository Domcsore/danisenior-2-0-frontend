import React from "react";

import { sizes } from "../helpers/styles";

import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Grid from "../components/Grid";

import MediaArticle, {
  MediaArticleProps,
  MediaArticleTypes,
} from "../components/MediaArticle";

const Media = () => {
  const articles: MediaArticleProps[] = [
    {
      type: MediaArticleTypes.Youtube,
      title: "Aylesbury Prison",
      media: "https://www.youtube.com/embed/KpVQVavHNTw",
      text:
        "<p>Gareth Malone’s The Choir: Aylesbury Prison - Dani Senior, Assistant Songwriter</p>",
    },
    {
      type: MediaArticleTypes.MultiImage,
      title: "Ivor Novello",
      media: {
        first: {
          src: "images/multiimgone.jpeg",
          alt: "Dani at Ivor Novello",
        },
        second: {
          src: "/images/multiimgtwo.jpeg",
          alt: "Ivor Novello awards service sheet",
        },
      },
      text: `<p>The Ivor Novello Songwriting Awards 2019 – Dani Senior on the judging panel, read about the nominees <a href="https://www.bbc.co.uk/news/entertainment-arts-48038073" target="_blank">here</a></p>`,
    },
    {
      type: MediaArticleTypes.SingleImage,
      title: "Music and mental health",
      media: {
        src: "/images/articlesingle.jpg",
        alt: "Keyboard next to laptop with students in a classroom",
      },
      text: `<a href="mental-health">Music and Mental Health</a>`,
    },
  ];

  return (
    <Wrapper title="Media">
      <Grid gap={sizes.xxl}>
        <Title>Media</Title>
        <Grid mdColumns={2} gap={sizes.xxl}>
          {articles.map((article) => (
            <MediaArticle
              key={article.title}
              type={article.type}
              title={article.title}
              media={article.media}
              text={article.text}
            />
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Media;
