import Head from "next/head";
import { Footer, Gap, Header, Hero, Sections } from "../components";
import { desc } from "../config/desc";

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
      <Sections isTop desc={desc.top} />
      <Gap height={140} />
      <Sections desc={desc.more} />
      <Gap height={140} />
      <Footer />
    </section>
  );
}
