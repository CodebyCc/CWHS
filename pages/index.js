import Head from "next/head";
import Image from "next/image";
import Block from "../components/Block";
import BlockContainer from "../components/BlockContainer";
import BlockDark from "../components/BlockDark";
import BlockDomain from "../components/BlockDomain";
import BlockFeatured from "../components/BlockFeatured";
import BlockHeader from "../components/BlockHeader";
import Testimonial from "../components/Testimonial";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import CardPrimary from "../components/CardPrimary";
import CardSection from "../components/CardSection";

export default function Home() {
  const block = [
    {
      id: 1,
      svg: "/images/sprite.svg#easy",
      h3: "Super Easy Cloud To Use",
      p: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem distinctio assumenda accusantium possimus ducimus nonnulla repellendus pariatur mollitia id eligendi alias nostrum esseoptio, natus voluptatum tempore dolore error.",
      img: "/images/easy@2x.jpg ",
    },
    {
      id: 2,
      svg: "/images/sprite.svg#wordpress",
      h3: "Wordpress made easy",
      p: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!Lorem ipsum dolor sit amet, consectetur .",
      img: "/images/wordpress@2x.jpg ",
    },
  ];
  return (
    <div>
      <Head>
        <title>CWHS Go online for just $5</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block />
      <BlockDomain />
      <CardSection />
      <BlockHeader />
      <BlockContainer
        key={block[0].id}
        svg={block[0].svg}
        h3={block[0].h3}
        p={block[0].p}
        img={block[0].img}
      />
      <BlockFeatured />
      <BlockContainer
        key={block[1].id}
        svg={block[1].svg}
        h3={block[1].h3}
        p={block[1].p}
        img={block[1].img}
      />
      <BlockDark />
      <Testimonial />
    </div>
  );
}
