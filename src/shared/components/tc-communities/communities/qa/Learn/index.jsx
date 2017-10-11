/**
 * Static implementation of Learn page for QA community
 *
 * It hardcodes data which is passed to dummy components,
 * thus we disable max-len eslint rule for this file
 */
/* eslint-disable max-len */

import JoinCommunity from 'containers/tc-communities/JoinCommunity';
import React from 'react';
import Section from 'components/tc-communities/Section';
import Accordion from 'components/tc-communities/Accordion/Accordion';
import AccordionItem from 'components/tc-communities/Accordion/AccordionItem';
import Banner from 'components/tc-communities/Banner';
import NewsletterSignup from 'components/tc-communities/NewsletterSignup';
import ArticleCard from 'components/tc-communities/ArticleCard';
import LinksCard from 'components/tc-communities/LinksCard';
import Text from 'components/tc-communities/Text';

import style from './style.scss';

export default function Learn() {
  return (
    <main>

      <Banner
        title="Learning & Certification"
        text="Our continuously evolving structured learning paths, constantly abreast of the latest, tailored for employees to deepen your knowledge, infuses important software capabilities that are industry specific and help you get the skills you need to succeed."
        theme={{
          container: style.bannerContainer,
          content: style.bannerContent,
          contentInner: style.bannerContentInner,
        }}
        imageSrc="/themes/qa/learn/banner.jpg"
      />

      <Section
        title="Learn The Basics"
        theme={{
          container: style.learnBasicsContainer,
        }}
      >
        <Accordion>
          <AccordionItem title="Joining the  Community">
            <Text>
              <p>First things first, ...make sure you sign up for Topcoder. It&apos;s quick and painless and opens the door to a whole new world.</p>
              <JoinCommunity />
            </Text>
          </AccordionItem>
          <AccordionItem title="How do I participate in a challenge?">
            <Text><p>Find a challenge that interests you on the <a href="/challenges">challenge listings page</a>. You can filter by challenge types, prizes, deadlines, etc. Look for challenges that are still open for registration. If you see something that interests you, click it and then you can read the details and register for the challenge. Watch the <a href="https://www.yammer.com/wipro.com/#/files/101411899">video</a>.</p></Text>
          </AccordionItem>
          <AccordionItem title="How do I submit to a challenge?">
            <Text><p>Do all of your coding/design work offline, or as specified in the challenge spec. When you are ready to submit, come back to the challenge page and click the Submit button. The Submit page will give instructions to upload your submission. Watch the <a href="https://www.yammer.com/wipro.com/#/files/101411933">video</a>.</p></Text>
          </AccordionItem>
          <AccordionItem title="Updating your Profile">
            <Text>
              <p>Everything to do with managing your profile and preferences can be found at <a href="https://www.topcoder.com/settings/account/">https://www.topcoder.com/settings/account/</a>.  If you can&apos;t find what you&apos;re looking for, send us a note at support@topcoder.com.</p>
            </Text>
          </AccordionItem>
          <AccordionItem title="I have more question. Who should I contact?">
            <Text><p>Please write to support@topcoder.com</p></Text>
          </AccordionItem>
        </Accordion>
      </Section>
/*
      <Section
        title="Courses and Tutorials"
        /*
        link={{
          title: 'View All',
          url: 'learn',
        }}
        */
        theme={{
          container: style.coursesContainer,
        }}
      >
        <ArticleCard
          title="What You Need to Join a Challenge"
          text="There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have"
          link={{
            title: 'Read More',
            url: 'learn',
          }}
          imageSrc="/themes/qa/learn/courses-01.jpg"
        />
        <ArticleCard
          title="An Ugly Myspace Profile Will Sure Ruin Your Reputation"
          text="Planning to visit Las Vegas or any other vacational resort where casinos are a major portion of their business? I have just the thing for"
          link={{
            title: 'Read More',
            url: 'learn',
          }}
          imageSrc="/themes/qa/learn/courses-02.jpg"
        />
        <ArticleCard
          title="3 Simple Ways Work Fast in Competition"
          text="If you are in the market for a computer, there are a number of factors to consider. Will it be used for your home, your office or"
          link={{
            title: 'Read More',
            url: 'learn',
          }}
          imageSrc="/themes/qa/learn/courses-03.jpg"
        />
      </Section>
*/
      <Section
        title="Resources"
        theme={{
          title: style.resourcesTitle,
          container: style.resourcesContainer,
        }}
      >
        <LinksCard
          title="Documents"
          links={[{
            title: 'State of Quality Edition 1',
            url: 'http://www.wipro.com/microsite/state-of-quality-2016/index.php',
          }, {
            title: 'Burgeoning need for Big Data Assurance',
            url: 'http://www.wipro.com/documents/the-burgeoning-need-for-Big-Data-assurance.pdf',
          }, {
            title: 'How to provision the right test data for business events?',
            url: 'http://www.wipro.com/documents/how-to-provision-the-right-test-data-for-business-events.pdf',
          }, {
            title: 'Automation Checkerboard- what moves my benefits?',
            url: 'http://www.wipro.com/documents/automation-checkerboard-what-moves-my-benefits.pdf',
          }]}
        />
        <LinksCard
          title="Videos"
          links={[{
            title: 'Accessibility Assurance',
            url: 'http://www.wipro.com/services/applications/services/testing-services/insights/research/',
          }, {
            title: 'Drivers for Test Environment Management',
            url: 'http://www.wipro.com/services/applications/services/testing-services/insights/research/',
          }, {
            title: 'Digital Assurance',
            url: 'http://www.wipro.com/services/applications/services/testing-services/insights/research/',
          }]}
        />
        <LinksCard
          title="Useful Links"
          links={[{
            title: 'Assuring Quality for Internet of Things',
            url: 'http://www.wipro.com/blogs/assuring-quality-for-internet-of-things/',
          }, {
            title: 'Assuring Holistic Quality: Move beyond the software testing paradigm',
            url: 'http://www.wipro.com/blogs/assuring-holistic-quality-move-beyond-the-software-testing-paradigm/',
          }, {
            title: 'Use Experience (UX) Assurance Demystified',
            url: 'http://www.wipro.com/blogs/user-experience-ux-assurance-demystified/',
          }, {
            title: 'Cognitive Computing: A reality in Quality Engineering (QE)',
            url: 'http://www.wipro.com/blogs/cognitive-computing-a-reality-in-quality-engineering-qe/',
          }]}
        />
      </Section>

      <NewsletterSignup
        title="Sign up for our newsletter"
        text="Don’t miss out on the latest Topcoder QA challenges and information!"
        imageSrc="/themes/qa/subscribe-bg.jpg"
      />
    </main>
  );
}
