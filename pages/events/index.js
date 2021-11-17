import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import {API_URL} from "@config/index";
import EventItem from "@components/EventItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <Head>
        <title>Events</title>
        <meta name="description" content="Dj Events" />
      </Head>

      <h1>Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} evt={event} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events/`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
