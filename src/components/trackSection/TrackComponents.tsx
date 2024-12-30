import TicketInput from "./TicketInput";

const TrackComponent = () => {
  return (
    <section className="py-20 block lg:min-h-[80vh] h-full">
      <h2 className="text-center text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
        Track Membership
      </h2>

      <TicketInput />
    </section>
  );
};

export default TrackComponent;
