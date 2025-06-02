import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "RIKA Launch Webinar",
      description:
        "Join us for a live demonstration of the RIKA wrist band and its capabilities.",
      date: "June 21, 2024",
    },
    {
      id: 2,
      title: "Community Safety Workshop",
      description:
        "Learn the best practices for personal safety and emergency preparedness.",
      date: "July 10, 2024",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-8 sm:mb-12 lg:mb-16">
          Upcoming Events
        </h1>

        {/* Events Container */}
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Event Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {event.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Date Badge */}
                <div className="flex-shrink-0 mt-4 lg:mt-0">
                  <div className="bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
