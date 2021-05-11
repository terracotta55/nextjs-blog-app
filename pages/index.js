import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import Head from "next/head";

function HomePage(props) {
    // const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <Head>
                <title>Events App</title>
                <link rel="icon" href="/blog.ico" />
            </Head>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents,
        },
        // revalidate: 1800,
    };
}

export default HomePage;
