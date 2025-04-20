import PageBanner from "@/components/events/EventsBanner";
import EventsCard from "@/components/events/EventsCard";
import ComingSoon from "@/components/shared/ComingSoon";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <PageBanner title={"Innovation Event"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default EventsPage;
