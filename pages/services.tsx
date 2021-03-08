import React from "react";
import styled from "@emotion/styled";

import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Grid from "../components/Grid";
import { breakpoints, media, sizes } from "../helpers/styles";
import Heading from "../components/Heading";
import LinkButton from "../components/LinkButton";
import MediaArticle, {
  MediaArticleProps,
  MediaArticleTypes,
} from "../components/MediaArticle";

const SHeadingServices = styled(Heading)`
  text-align: center;

  ${media(breakpoints.md)} {
    text-align: left;
  }
`;

const SGridCredits = styled(Grid)`
  ${media(breakpoints.md)} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Services = () => {
  const credits: MediaArticleProps[] = [
    {
      type: MediaArticleTypes.Youtube,
      media: "https://www.youtube-nocookie.com/embed/WNOmzbDWHCI",
      title: "Nora En Pure - Tell my heart",
      text: "<p>Nora En Pure - Tell my heart</p>",
    },
    {
      type: MediaArticleTypes.Youtube,
      media: "https://www.youtube-nocookie.com/embed/wCU4Hzt5bc4",
      title: "Sander van Doorn & LVNDSCAPE - Need To Feel Loved",
      text: "<p>Sander van Doorn & LVNDSCAPE - Need To Feel Loved</p>",
    },
  ];

  return (
    <Wrapper title="Services">
      <Grid gap={sizes.xxl}>
        <Title>Vocal Recording Services</Title>
        <Grid columns={2} mdColumns={4} gap={sizes.xxl}>
          <SHeadingServices>Recording</SHeadingServices>
          <SHeadingServices>Comping</SHeadingServices>
          <SHeadingServices>Mixing</SHeadingServices>
          <SHeadingServices>Tuning</SHeadingServices>
        </Grid>
        <p>
          As a vocalist I know that great vocal recording and producing is an
          art, and is often a time-consuming part of the creative process. I
          offer a complete service, from vocals and backing vocals to recording,
          tuning and mixing. I work remotely, using my own studio setup, or for
          artist recording I work at Tileyard Studios, Kings Cross, London UK.
        </p>
        <div>
          <LinkButton href="/connect" title="Get in touch to find out more" />
        </div>
        <div>
          <Heading>Credits</Heading>
          <SGridCredits gap={sizes.xxl}>
            {credits.map((article) => (
              <MediaArticle
                key={article.title}
                type={article.type}
                title={article.title}
                media={article.media}
                text={article.text}
              />
            ))}
          </SGridCredits>
        </div>
      </Grid>
    </Wrapper>
  );
};

export default Services;
