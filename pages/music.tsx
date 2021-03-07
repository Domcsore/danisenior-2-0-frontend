import React from "react";
import styled from "@emotion/styled";

import { sizes } from "../helpers/styles";

import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Grid from "../components/Grid";

const SimgCover = styled.img`
  max-width: 4rem;
`;

const SthMusicTableHeading = styled.th`
  text-align: left;
  padding: 0 ${sizes.sm} ${sizes.sm} 0;

  &:last-of-type {
    padding-right: 0;
  }
`;

const StdMusicTableEntry = styled.td`
  vertical-align: top;
  padding: ${sizes.sm} ${sizes.sm} ${sizes.sm} 0;

  &:last-of-type {
    padding-right: 0;
  }
`;

const exampleSongs: Song[] = [
  {
    image: "/images/one.jpg",
    artist: "Dani",
    record: "This is my long song name that will hopefully wrap",
    credits: "Co-write",
  },
];

export interface Song {
  image: string;
  artist: string;
  record: string;
  credits: string;
}

interface MusicTableProps {
  songs: Song[];
}

const MusicTable = ({ songs }: MusicTableProps) => (
  <table>
    <thead>
      <tr>
        <SthMusicTableHeading>Cover</SthMusicTableHeading>
        <SthMusicTableHeading>Artist</SthMusicTableHeading>
        <SthMusicTableHeading>Record</SthMusicTableHeading>
        <SthMusicTableHeading>Credits</SthMusicTableHeading>
      </tr>
    </thead>
    <tbody>
      {songs.map((song) => (
        <tr key={song.artist + song.record}>
          <StdMusicTableEntry>
            <SimgCover src={song.image} alt={song.record} />
          </StdMusicTableEntry>
          <StdMusicTableEntry>{song.artist}</StdMusicTableEntry>
          <StdMusicTableEntry>{song.record}</StdMusicTableEntry>
          <StdMusicTableEntry>{song.credits}</StdMusicTableEntry>
        </tr>
      ))}
    </tbody>
  </table>
);

const Music = () => (
  <Wrapper title="Music">
    <Grid gap={sizes.xl}>
      <Title>Music</Title>
      <MusicTable songs={exampleSongs} />
    </Grid>
  </Wrapper>
);

export default Music;
