import React from "react";
import Paragraph from "../interface/paragraph";

export default function About() {
  return (
    <section className="about" data-scroll-section>
      <div className="container -right">
        <div className="about-desc">
          <Paragraph>
            Over the lasts years I realized - It's not enough to simply sell
            products anymore, people need brands that lead from the heart and
            share their values. That's why I focus on Branding. Whether a brand
            is looking for a refresh or finding its voice at the very begging, I
            will help find its purpose and connect with their target.
          </Paragraph>
          <Paragraph>
            I believe in creating beautiful and complete brand experiences by
            helping them connect with their intention and know-how to
            communicate their purpose.
          </Paragraph>
          <Paragraph>
            Present Currently I'm working at Walsh and also as a freelancer
            looking for new brands to create complete branding experiences and
            help them find their voice.
          </Paragraph>
          <Paragraph>
            I believe collaboration allows us to create a different narratives
            for each brand. That's why depending on the project I love
            collaborating with specialists from different fields
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
