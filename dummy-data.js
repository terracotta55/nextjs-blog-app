const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "Programming for everyone",
        description:
            "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        location: "25 Somestreet, 12345 Somewhere City",
        date: "2021-05-12",
        image: "images/coding-event.jpg",
        isFeatured: true,
    },
    {
        id: "e2",
        title: "Networking for introverts",
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: "5 New Wall Street, 98765 New Yorkshire",
        date: "2021-05-30",
        image: "images/introvert-event.jpg",
        isFeatured: false,
    },
    {
        id: "e3",
        title: "Networking for extroverts",
        description:
            "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
        location: "12 My Street, 10115 Brokelane Town",
        date: "2022-04-10",
        image: "images/extrovert-event.jpg",
        isFeatured: true,
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}
