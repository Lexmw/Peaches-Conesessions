import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Officers from "components/features/ThreeColSimple.js";
import AboutUsFeature from "components/features/TwoColWithButton.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { Container } from "components/misc/Layouts";
import EventsCal from "components/misc/EventsCal";

const HighlightedText = tw.span`text-primary-500`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      {/* <FeatureStats/> */}
      <Features id="membership"
        heading={
          <>
            Become a <HighlightedText>Member</HighlightedText>
          </>
        }
      />
      <EventsCal id="events"/>
      {/* <MainFeature
        heading={
          <>
            Cloud built by and for{" "}
            <HighlightedText>Professionals</HighlightedText>
          </>
        }
      /> */}
      {/* <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      /> */}
      <AboutUsFeature
        id="about-us"
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
      <TeamCardGrid id="team" subheading={<Subheading>Our Team</Subheading>} />
      {/* <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      /> */}
      <GetStarted id="join"/>
      {/* <Footer /> */}
      {/* </Container> */}
    </AnimationRevealPage>
  );
};
