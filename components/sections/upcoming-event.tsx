import Image from "next/image";
import React from "react";
import imgaeSrc from "../../assets/HUMAN_SAFETY_poster-2.png";

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
        <div className="flex align-center justify-center">
          <Image
            className="w-3/4 rounded-lg shadow-lg"
            src={imgaeSrc}
            alt="upcoming events"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
