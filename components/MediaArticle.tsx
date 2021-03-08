import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { sizes } from "../helpers/styles";

const SdivAspectSixteenNine = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: ${sizes.md};
`;

interface SdivMediaContainerProps {
  type: MediaArticleTypes;
}

const mediaContainerTypeStyle = ({ type }: SdivMediaContainerProps) => {
  switch (type) {
    case MediaArticleTypes.MultiImage:
      return css`
        display: flex;
        justify-content: space-between;
      `;
    default:
      return null;
  }
};

const SdivMediaContainer = styled.div<SdivMediaContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${mediaContainerTypeStyle}
`;

const SiframeArticle = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const SimgArticleSingle = styled.img`
  width: 100%;
`;

const SimgArticleMulti = styled.img`
  height: 100%;
  display: inline;
`;

export enum MediaArticleTypes {
  Youtube,
  Video,
  SingleImage,
  MultiImage,
}

export interface MediaArticleProps {
  type: MediaArticleTypes;
  title: string;
  media: any;
  text: string;
}

const MediaArticle = ({ type, title, media, text }: MediaArticleProps) => {
  const renderYoutube = () => (
    <SiframeArticle
      title={title}
      src={media}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );

  const renderVideo = () => (
    <video controls>
      <source src={media.src} />
      <track
        src={media.trackSrc}
        kind="captions"
        srcLang="en"
        label="english_captions"
      />
      Your browser does not support video.
    </video>
  );

  const renderSingleImage = () => (
    <SimgArticleSingle src={media.src} alt={media.alt} />
  );

  const renderMultiImage = () => (
    <>
      <SimgArticleMulti src={media.first.src} alt={media.first.alt} />
      <SimgArticleMulti src={media.second.src} alt={media.second.alt} />
    </>
  );

  const renderMedia = (mediaType: MediaArticleTypes) => {
    switch (mediaType) {
      case MediaArticleTypes.Youtube:
        return renderYoutube();
      case MediaArticleTypes.Video:
        return renderVideo();
      case MediaArticleTypes.SingleImage:
        return renderSingleImage();
      case MediaArticleTypes.MultiImage:
        return renderMultiImage();
      default:
        return null;
    }
  };

  return (
    <div>
      <SdivAspectSixteenNine>
        <SdivMediaContainer type={type}>{renderMedia(type)}</SdivMediaContainer>
      </SdivAspectSixteenNine>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default MediaArticle;
