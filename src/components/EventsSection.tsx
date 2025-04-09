
import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const EventsSection = () => {
  const isMobile = useIsMobile();
  const [showPastEvents, setShowPastEvents] = useState(false);
  
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "July 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub Conference Center",
      type: "Workshop",
      description: "A hands-on workshop exploring the latest in AI and machine learning technologies."
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "August 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      type: "Bootcamp",
      description: "Intensive training on full-stack development with React and Node.js."
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      date: "August 20, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Design Studio, Downtown",
      type: "Masterclass",
      description: "Learn advanced UI/UX design principles and tools from industry experts."
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Cloud Computing Symposium",
      date: "March 10, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Metropolitan Convention Center",
      type: "Symposium",
      description: "A deep dive into modern cloud architectures and best practices."
    },
    {
      id: 5,
      title: "Data Science Summit",
      date: "February 22, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Tech Hotel",
      type: "Summit",
      description: "Exploring the latest trends and technologies in data science and analytics."
    }
  ];

  const renderEventsTable = (events) => (
    <div className={`w-full ${isMobile ? "" : "overflow-auto"}`}>
      {isMobile ? (
        <div className="space-y-6">
          {events.map(event => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{event.type}</div>
              <div className="flex items-center text-sm mb-2">
                <Calendar className="h-4 w-4 mr-2 text-trizen-purple" />
                {event.date}
              </div>
              <div className="flex items-center text-sm mb-2">
                <Clock className="h-4 w-4 mr-2 text-trizen-purple" />
                {event.time}
              </div>
              <div className="flex items-center text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2 text-trizen-purple" />
                {event.location}
              </div>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <Button variant="outline" className="text-trizen-purple border-trizen-purple hover:bg-trizen-purple/10 w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map(event => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-trizen-purple" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-2 text-trizen-purple" />
                    <span>{event.time}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-trizen-purple" />
                    <span>{event.location}</span>
                  </div>
                </TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="text-trizen-purple hover:text-trizen-purple/90">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-dark mb-4">Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, webinars, bootcamps, and other events to enhance your skills and knowledge.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-trizen-dark mb-6">Upcoming Events</h3>
          {renderEventsTable(upcomingEvents)}
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-trizen-dark">Past Events</h3>
            <Button 
              variant="ghost" 
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="text-trizen-purple hover:text-trizen-purple/90"
            >
              {showPastEvents ? (
                <>Hide <ChevronUp className="ml-1 h-4 w-4" /></>
              ) : (
                <>Show <ChevronDown className="ml-1 h-4 w-4" /></>
              )}
            </Button>
          </div>
          
          {showPastEvents && renderEventsTable(pastEvents)}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
