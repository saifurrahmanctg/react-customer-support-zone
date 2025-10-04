import React, { use, useState } from "react";
import Banner from "./Banner";
import TicketsContainer from "./TicketsContainer";
import { toast } from "react-toastify";

const MainContainer = ({ ticketPromise }) => {
  const data = use(ticketPromise);
  const [tickets, setTickets] = useState(data);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleTicket = (ticket) => {
    const taskItems = tasks.find((item) => item.id == ticket.id);
    if (taskItems) {
      toast.error(`${ticket.title} is already in the Task`);
      return;
    }

    toast.success(`${ticket.title} has been added to the Task`);
    const newTask = [...tasks, ticket];
    setTasks(newTask);
    const changeStatus = tickets.find((item) => item.id == ticket.id);
    if (changeStatus.status == "Open") {
      changeStatus.status = "In Progress";
    }
  };

  const handleComplete = (ticket) => {
    toast.info(`${ticket.title} has been completed`);
    // const resolvedItems = tasks.find((item) => item.id == ticket.id);
    const newResolved = [...resolved, ticket];
    setResolved(newResolved);
    const remainingTickets = tickets.filter((item) => item.id !== ticket.id);
    setTickets(remainingTickets);
    const remainingTasks = tasks.filter((item) => item.id !== ticket.id);
    setTasks(remainingTasks);
  };

  const handleResolved = (ticket) => {
    toast.warning(`${ticket.title} has been cleared!`);
    const resolvedRemaining = resolved.filter((item) => item.id !== ticket.id);
    setResolved(resolvedRemaining);
  };

  return (
    // Main container
    <div className="w-11/12 mx-auto py-10">
      {/* Banner section */}
      <section className="banner-section">
        <Banner tickets={tickets} resolved={resolved} />
      </section>

      {/* Customer ticket section */}
      <section className="tickets-container">
        <TicketsContainer
          tickets={tickets}
          handleTicket={handleTicket}
          tasks={tasks}
          handleComplete={handleComplete}
          resolved={resolved}
          handleResolved={handleResolved}
        />
      </section>
    </div>
  );
};

export default MainContainer;
