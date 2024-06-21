import React from "react";
import tw from "twin.macro";
import {  ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";

const Container = tw.div`relative`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
export default () => {
  return (
    <Container>
        <Heading>Events</Heading>
      <iframe
        id="calendar"
        srcDoc="<!DOCTYPE html><body><div data-events-calendar-app data-project-id='proj_enntqYcHyphxKt1x6TVQi'></div>
        <script type='text/javascript' src='//dist.eventscalendar.co/embed.js'></script>
      </body>"
        height="700"
        width="100%"
      >
        {" "}
      </iframe>
    </Container>
  );
};
