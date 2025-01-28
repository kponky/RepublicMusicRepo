import TicketInfo from "@/components/trackSection/TicketInfo";
import TicketInput from "@/components/trackSection/TicketInput";
import { Metadata } from "next";

const pageTitle = "Ticket Information";

export const metadata: Metadata = {
  title: pageTitle,
};

const TicketDetailsPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black">
      <div className="py-[100px] lg:py-20">
        <h2 className="text-center text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
          Track Membership 3
        </h2>

        <div className="mb-16">
          <TicketInput />
        </div>

        <TicketInfo />
      </div>
    </div>
  );
};

export default TicketDetailsPage;
