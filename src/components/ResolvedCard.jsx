import { Pointer, Trash } from "lucide-react";
import React from "react";

const ResolvedCard = ({ ticket, handleResolved }) => {
  return (
    <div className="bg-[#E0E7FF] text-[#001931] p-4 rounded-md flex justify-between items-center gap-3">
      <p>{ticket.title}</p>
      <span onClick={() => handleResolved(ticket)} className="cursor-pointer">
        <Trash color="red" size={24} />
      </span>
    </div>
  );
};

export default ResolvedCard;
