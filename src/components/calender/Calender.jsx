/* eslint-disable @next/next/no-img-element */
"use client";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { AiOutlineRight } from "react-icons/ai";
import moment from "moment";

import { useState } from "react";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: "Team Meeting",
    start: new Date(2024, 10, 13, 10, 0),
    end: new Date(2024, 10, 13, 11, 0),
    members: [
      { name: "Alice Johnson", picture: "https://via.placeholder.com/40" },
      { name: "Bob Smith", picture: "https://via.placeholder.com/40" },
    ],
  },
  {
    id: 2,
    title: "Project Deadline",
    start: new Date(2024, 10, 15, 14, 0),
    end: new Date(2024, 10, 15, 16, 0),
    members: [
      { name: "Charlie Brown", picture: "https://via.placeholder.com/40" },
      { name: "Diana Prince", picture: "https://via.placeholder.com/40" },
    ],
  },
];

// Custom Event Component to display members
const EventComponent = ({ event, view }) => {
  const isWeekView = view === "week"; // Check if the current view is week

  return (
    <div
      className="rounded-md shadow-sm h-full w-full bg-white text-black"
      style={{
        border: "none", // Ensure no border
        boxShadow: "none", // Remove default shadow
        backgroundColor: "white", // Explicitly set background color to white
      }}
    >
      <h3 className="font-semibold text-sm">{event.title}</h3>
      {isWeekView ? (
        <div className="mt-2 text-xs text-gray-500">
          <p>{moment(event.start).format("hh:mm A")}</p>
        </div>
      ) : (
        <div className="mt-2 flex items-center gap-2">
          {event.members?.map((member, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={member.picture}
                alt={member.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs">{member.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Custom Toolbar Component
function CustomToolbar({ onNavigate, onView, view, label, date }) {
  const [showModal, setShowModal] = useState(false); // Track modal state

  const formatLabel = () => {
    if (view === "week") {
      const startOfWeek = moment(date).startOf("week");
      const endOfWeek = moment(date).endOf("week");
      return `${startOfWeek.format("MMMM D")} - ${endOfWeek.format("D, YYYY")}`;
    } else if (view === "year") {
      return moment(date).format("YYYY");
    }
    return label;
  };

  // Function to handle modal open/close
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div>
      <div className="w-full h-16 bg-gray-300 flex justify-between">
        <h1 className="text-3xl font-bold p-5">Calendar</h1>
        <button
          onClick={toggleModal} // Toggle modal visibility
          className="bg-[#032D2C] m-3 rounded px-3 py-2 text-white flex"
        >
          <TiPlus size={25} /> Add Event
        </button>
      </div>

      <div className="flex justify-between items-center p-4  w-[1042px] h-[42px] mx-auto my-10">
        <div className="flex gap-2 text-[#6B7A99]">
          <button
            onClick={() => onNavigate("TODAY")}
            className="py-2 px-2 border text-[#6B7A99] rounded-full"
          >
            Today
          </button>
        </div>
        <div>
          <button
            onClick={() => onNavigate("PREV")}
            className="p-3 border rounded-full"
          >
            <MdKeyboardArrowLeft />
          </button>
          <span className="mx-4">{formatLabel()}</span>
          <button
            onClick={() => onNavigate("NEXT")}
            className="p-3 border rounded-full"
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() => onView("year")}
            className={`px-4 py-2 border rounded-l-full ${
              view === "year" ? "text-[#032D2C] font-bold" : ""
            }`}
          >
            Year
          </button>
          <button
            onClick={() => onView("month")}
            className={`px-4 py-2 border ${
              view === "month" ? "text-[#032D2C] font-bold" : ""
            }`}
          >
            Month
          </button>
          <button
            onClick={() => onView("week")}
            className={`px-4 py-2 border ${
              view === "week" ? "text-[#032D2C] font-bold" : ""
            }`}
          >
            Week
          </button>
          <button
            onClick={() => onView("day")}
            className={`px-4 py-2 border rounded-r-full ${
              view === "day" ? "text-[#032D2C] font-bold" : ""
            }`}
          >
            Day
          </button>
        </div>
      </div>

      {/* Modal for creating an event */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Event Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border rounded"
                  placeholder="Enter event title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Event Time
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Event Description
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border rounded"
                  placeholder="Enter event description"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleModal} // Close modal
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#032D2C] text-white rounded"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Calendar() {
  const [currentView, setCurrentView] = useState("month"); // Default view
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleViewChange = (view) => {
    if (["month", "week", "day", "year"].includes(view)) {
      setCurrentView(view);
    }
  };

  // Custom Year View Component
  const YearView = ({ date, onNavigate }) => {
    const currentYear = date.getFullYear();
    const months = Array.from({ length: 12 }, (_, i) => {
      const firstDay = new Date(currentYear, i, 1);
      return (
        <div
          key={i}
          className="flex-1 min-w-[250px] p-4 border"
          onClick={() => onNavigate(firstDay)}
        >
          <h3 className="text-xl font-semibold">
            {moment(firstDay).format("MMMM")}
          </h3>
        </div>
      );
    });

    return <div className="grid grid-cols-3 gap-4">{months}</div>;
  };

  return (
    <div className="bg-[#F5F5F5] h-full">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        onNavigate={setCurrentDate}
        views={{
          month: true,
          week: true,
          day: true,
          year: YearView, // Use custom YearView
        }}
        view={currentView}
        onView={handleViewChange}
        components={{
          event: EventComponent,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
