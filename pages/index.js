import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import {API_URL} from "@config/index";
import EventItem from "@components/EventItem";

export default function Home({ events }) {
  return (
    <Layout>
      <Head>
        <title>Dj Events</title>
        <meta name="description" content="Dj Events" />
      </Head>

      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event} />
      ))}
      {events.length > 0 && (
        <Link href="/events" >
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events/`);
  const events = await res.json();

  return {
    props: {
      events: events.slice(3),
    },
    revalidate: 1,
  };
}
