/* eslint-disable max-len */
import React from 'react';

import { sizes } from '../helpers/styles';

import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Grid from '../components/Grid';

const Me = () => (
  <Wrapper>
    <Grid gap={sizes.xl}>
      <Title>Me</Title>
      <div>
        <Grid columns={3} gap={sizes.xl}>
          <img src="/images/two.jpg" alt="Test" />
          <img src="/images/two.jpg" alt="Test" />
          <img src="/images/two.jpg" alt="Test" />
        </Grid>
      </div>
      <div>
        <p>Dani Senior is a London based platinum-selling songwriter, artist, recording engineer, vocal producer and DJ, and began her career signed to AATW/Universal in the UK, collaborating with critically acclaimed artists such as Plan B and Wretch 32. She is notable for her versatile writing style and has written across a range of genres. As a leading light in the dance-pop arena she has just teamed up with Eskei83 and ReauBeau to release ‘Get No Better’ on Circus Records (Flux Pavilion and Doctor P’s label). She has also featured and toplined on EDM hit singles such as ‘Run This Town’ for OFFAIAH ft. Shenseea (Positiva), nominated for Best Single at the Urban Music Awards, ‘Tell My Heart’ for Nora En Pure (Spinnin’) and ‘Need to Feel Loved’ with Sander van Doorn &amp; LVNDSCAPE (Spinnin’) amongst others. As a songwriter Dani recently co-wrote Rationale’s ‘Hurts The Most’ released on Bastille’s label Best Laid Plans and Warner UK band Dusky Grey’s single ‘One Night’ and is currently working on a number of other album projects.</p>
        <p>Dani has a hugely successful presence in the J Pop/K Pop and Cantopop world and has written for the likes of SHINee (#1 DVD/album ‘I’m Your Boy’), Jolin Tsai (#1 album ‘Myself’, Dani wrote the #1  lead single ‘Honey Trap’ which received a Golden Melody Award nomination&nbsp;for Best Music Video), Kara (#6 album ‘Girl’s Story’), FEMM (touted as ones to watch by Billboard, hitting the World Albums chart at #10), Twins and TWICE amongst a long list of others. She co-wrote the official fan single ‘One In A Million’ for Twice. The album sold a record-breaking 36 thousand units in one day, and&nbsp;it was reported that&nbsp;Twicecoaster: Lane 1 recorded more than 165,000 physical&nbsp;sales&nbsp;on the Gaon Chart within a week. It hit #1 in 8 countries and #3 in the Billboard World Albums chart becoming the biggest album of the year in South Korea. Since its release, it has returned to the top of the Korean charts a record-breaking three times.</p>
        <p>Dani was also involved with the UK top 20 hit with Gareth Malone for The Choir for the lnvictus Games, ‘Flesh and Blood’, and was accredited the role of Music Consultant by the accompanying BBC series. She has enjoyed a good working relationship with Gareth and more recently performed the role of Assistant Songwriter on the critically acclaimed two-part BBC series The Choir: Aylesbury Prison. During Dani’s time working on the TV show she entered the prison each day working with the residents to help them prepare their song lyrics and ideas for Gareth.</p>
        <p>As a graduate in English Literature, and also a graduate of LAMDA (London Academy of Music and Dramatic Art), Dani has a wide range of interests in the creative world; this year 2020 Dani successfully signed her first TV treatment to a leading international Television production company. Simultaneously she is working on a number of artist projects and looks forward to some exciting releases.</p>
      </div>
    </Grid>
  </Wrapper>
);

export default Me;