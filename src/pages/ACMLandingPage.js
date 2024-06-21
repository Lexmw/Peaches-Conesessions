import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/ThreeColWithSideImage.js";
import AboutUsFeature from "components/features/TwoColWithButton.js";

import GetStarted from "components/cta/GetStartedLight.js";
import EventsCal from "components/misc/EventsCal";

const HighlightedText = tw.span`text-primary-500`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features id="membership"
        heading={
          <>
            Become a <HighlightedText>Member</HighlightedText>
          </>
        }
      />
      <EventsCal id="events"/>
      <AboutUsFeature
        
        subheading={<Subheading>About ACM-W, ACM and 614ACMW </Subheading>}
        heading="614 ACM-W the Professional Chapter"
        description="ACM-W (ACM's Women in Computing) advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to members and working in the larger community to advance the contributions of technical women.
        ACM, is the world's largest educational and scientific computing society, delivers resources that advance computing as a science and a profession. ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career resources. (acm.org)
        What is an ACM Professional chapter?
        Participation in a Professional Chapter provides a unique combination of social interaction and professional dialogue among peers, in their own geographic area. Chapter members' backgrounds represent all facets of computing, from academia, research, business and industry. Chapters organize activities and events like tech talks, socials, professional networking, career advice, mentoring, hackathons, celebrations, conferences, and community service"
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc= {require("images/logo-sq-violet-trans.png")}
      />
      <TeamCardGrid  subheading={<Subheading>Our Team</Subheading>} />

      <GetStarted />
    </AnimationRevealPage>
  );
};
