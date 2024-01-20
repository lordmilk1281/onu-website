"use client";

import { Fragment } from "react";
import Container from "./Container";

type Props = {};

function Footer({}: Props) {
  const itemData = [
    [
      "ABOUT",
      "Newsroom",
      "Learn about new features",
      "Letter from our founders",
      "Careers",
      "Investors",
    ],
    [
      "Support",
      "Help Center",
      "AirCover",
      "Cancellation options",
      "Safety information",
      "Report a neighborhood concern",
    ],
    [
      "Community",
      "Newsroom",
      "Learn about new features",
      "Letter from our founders",
      "Careers",
      "Investors",
    ],
    [
      "Hosting",
      "Try hosting",
      "AirCover for Hosts",
      "Explore hosting resources",
      "Safety information",
      "How to host responsibly",
    ],
  ];

  return (
    <footer className=" bg-zinc-100 sm:px-32 py-14">
      <Container className="grid gap-y-10 md:grid-cols-4">
        {itemData.map((item, index) => (
          <FooterColumn index={index} data={item} key={index} />
        ))}
      </Container>
    </footer>
  );
}

export default Footer;

("user client");

type FooterColumnProps = {
  index: number;
  data: Array<string>;
};

function FooterColumn({ index, data }: FooterColumnProps) {
  return (
    <div className="space-y-4 text-sm text-zinc-800">
      {data.map((item, index) => (
        <Fragment key={index}>
          {index === 0 ? <h5 className="font-bold">{item}</h5> : <p>{item}</p>}
        </Fragment>
      ))}
    </div>
  );
}
