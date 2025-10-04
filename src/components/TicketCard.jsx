import React from "react";
import calendar from "../assets/calender.png";

const TicketCard = ({ ticket, handleTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div
      onClick={() => handleTicket(ticket)}
      className="ticket-card bg-white p-4 rounded-xl shadow-md cursor-pointer"
    >
      <div className="ticket-head flex justify-between items-start gap-2">
        <h3 className="text-lg font-medium text-[#001931] flex-1">{title}</h3>
        <button
          className={`flex gap-1.5 items-center justify-center ${
            status === "Open"
              ? "bg-[#B9F8CF] text-[#0b5e06]"
              : "bg-[#F8F3B9] text-[#9C7700]"
          } text-base font-medium  rounded-full px-2 py-1`}
        >
          <span
            className={`w-4 h-4 ${
              status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            } rounded-full`}
          ></span>
          {status}
        </button>
      </div>
      <p className="mt-2 text-[#627382]">{description}</p>
      <div className="ticket-foot flex justify-between items-center text-sm text-[#627382] mt-4">
        <div className="flex justify-between items-center gap-2 font-medium">
          <p>#{id}</p>
          <p
            className={`${priority === "HIGH" ? "text-[#F83044]" : ""}
            ${priority === "URGENT" ? "text-[#F83044] font-bold" : ""}
            ${priority === "MEDIUM" ? "text-[#efbb0c]" : ""}
            ${priority === "LOW" ? "text-green-500" : ""}
            ${priority === "DEFAULT" ? "text-green-600 font-bold" : ""}`}
          >
            {priority} PRIORITY
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p>{customer}</p>
          <div className="ticket-date flex justify-between items-center gap-0.5">
            <img className="w-5" src={calendar} alt="" />
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
