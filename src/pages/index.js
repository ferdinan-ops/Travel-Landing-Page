import Head from "next/head";
import { Header, Hero, Sections } from "../components";

export default function Home() {
  return (
    <section className="">
      <Head>
        <title>Selocate Travel</title>
        <meta name="description" content="Jadoo App Travel" />
        <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon" />
      </Head>

      <Header />
      <Hero />
      <Sections />
    </section>
  );
}
