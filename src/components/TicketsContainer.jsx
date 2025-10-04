import React from "react";
import TicketCard from "./TicketCard";
import { CircleCheckBig, TicketCheck, TriangleAlert } from "lucide-react";
import TaskCard from "./TaskCard";
import ResolvedCard from "./ResolvedCard";

const TicketsContainer = ({
  tickets,
  handleTicket,
  tasks,
  handleComplete,
  resolved,
  handleResolved,
}) => {
  return (
    <div className="mt-10 md:grid grid-cols-12 gap-6">
      {/* Customer tickets */}
      <div className="col-span-8 lg:col-span-9">
        <h1 className="text-2xl font-semibold text-[#34485A]">
          Customer Ticket
        </h1>
        {/* Ticket cards */}
        <div className="ticket-card mt-5">
          {tickets.length == 0 && (
            <div className="bg-linear-to-b from-[#632ee370] to-[#54CF6870] p-20 rounded-xl shadow-md text-center text-gray-500">
              <TriangleAlert className="mx-auto mb-4" size={60} />
              <strong>There is no ticket right now</strong>
            </div>
          )}
          <div className=" grid lg:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                handleTicket={handleTicket}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Task status */}
      <div className="col-span-4 lg:col-span-3 mt-8 md:mt-0">
        <div>
          <h1 className="text-2xl font-semibold text-[#34485A]">Task Status</h1>
          <div className="mt-5 space-y-4">
            {tasks.length == 0 && (
              <div className="bg-linear-to-b from-[#ffffff90] to-[#fcb70040] p-4 rounded-xl shadow-md text-center text-gray-400">
                <TicketCheck className="mx-auto mb-4" size={60} />
                <strong>Select a ticket to add in the Task</strong>
              </div>
            )}

            {tasks.map((ticket) => (
              <TaskCard
                key={ticket.id}
                ticket={ticket}
                handleComplete={handleComplete}
              />
            ))}
          </div>
        </div>

        {/* Resolved task */}
        <div className="resolved-task mt-6 ">
          <h1 className="text-2xl font-semibold text-[#34485A]">
            Resolved Task
          </h1>

          <div className="mt-4 space-y-3">
            {resolved.length == 0 && (
              <div className="bg-linear-to-b from-[#ffffff90] to-[#00193140] p-4 rounded-xl shadow-md text-center text-gray-500">
                <CircleCheckBig className="mx-auto mb-4" size={50} />
                All tasks has been <strong>Resolved!</strong>
              </div>
            )}
            {resolved.map((ticket) => (
              <ResolvedCard
                key={ticket.id}
                ticket={ticket}
                handleResolved={handleResolved}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsContainer;
