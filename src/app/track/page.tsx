import TicketInfo from "@/components/trackSection/TicketInfo";
import TicketInput from "@/components/trackSection/TicketInput";
import { ITicket } from "@/interfaces/track.interface";
import { getMembership } from "@/lib/data";
import { Metadata } from "next";

const pageTitle = "Ticket Information";

export const metadata: Metadata = {
  title: pageTitle,
};

type SearchParams = { [key: string]: string | string[] | undefined };

const TicketDetailsPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = props.searchParams;
  const { ticketId } = searchParams;
  const data: ITicket = await getMembership(ticketId as string);

  return (
    <div className="w-full h-full min-h-screen bg-black">
      <div className="py-[100px] lg:py-20">
        <h2 className="text-center text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
          Track Membership
        </h2>

        <div className="mb-16">
          <TicketInput />
        </div>

        {data ? (
          <TicketInfo data={data} />
        ) : (
          <div className="text-white text-center max-w-[800px] mx-auto pb-20">
            <p>Oops! No details available for this ticket.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketDetailsPage;
