import React from "react";

const TaskCard = ({ ticket, handleComplete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <h2 className="text-lg font-medium text-[#001931]">{ticket.title}</h2>
      <button
        onClick={() => handleComplete(ticket)}
        className="w-full bg-[#02A53B] text-white font-semibold rounded-sm mt-2 cursor-pointer"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
