import { getAllEvents } from "@/http/eventApi";
import EventCard from "../components/EventCard";

export default async function EventList() {
    const events = await getAllEvents();

    return (
        <div className="flex gap-5 items-stretch flex-col  w-full">
            {events && events.map((event) => {
                return (
                    <EventCard
                        key={event.id}
                        title={event.title}
                        price={event.price}
                        prettyName={event.prettyName}
                    />
                )
            })}
        </div>
    )
}