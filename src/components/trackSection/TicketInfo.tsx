import { ITicket } from "@/interfaces/track.interface";

const TicketInfo = ({ data }: { data: ITicket }) => {
  return (
    <div className="pb-20">
      <div className="px-4 max-w-[800px] mx-auto">
        <h2 className="text-white text-center text-4xl font-bold mb-8">
          Ticket Details
        </h2>

        <div className="space-y-6 text-white">
          {/* Membership Information */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Membership Information</h3>
            <p>Name: {data.title_name || "N/A"}</p>
            <p>Description: {data.description || "N/A"}</p>
            <p>Phone: {data.meta_data.member_phone_number || "N/A"}</p>
            <p>
              Location:{" "}
              {`${data.meta_data.member_city_of_origin}, ${data.meta_data.member_state_of_origin}, ${data.meta_data.member_country_of_origin}` ||
                "N/A"}
            </p>
            <p>Member Type: {data.meta_data.member_type || "N/A"}</p>
          </div>

          {/* Artist Information */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Artist Information</h3>
            <p>Name: {data.meta_data.artist_name || "N/A"}</p>
            <p>Email: {data.meta_data.artist_email || "N/A"}</p>
            <p>Description: {data.meta_data.artist_description || "N/A"}</p>
            <p>
              Website:{" "}
              {data.meta_data.artist_website ? (
                <a
                  href={data.meta_data.artist_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {data.meta_data.artist_website}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>

          {/* Management Information */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Management Information</h3>
            <p>Name: {data.meta_data.management_name || "N/A"}</p>
            <p>Email: {data.meta_data.management_email || "N/A"}</p>
            <p>Phone: {data.meta_data.management_phone_number || "N/A"}</p>
            <p>Address: {data.meta_data.management_address || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
