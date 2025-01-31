"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTicketStore } from "@/store/ticketStore";

const TicketInfo = () => {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("ticketId");
  const { membershipData, loading, errorMsg, setTicketId } = useTicketStore();

  useEffect(() => {
    setTicketId(ticketId);
  }, [ticketId, setTicketId]);

  if (ticketId && loading) {
    return (
      <div className="text-white text-center max-w-[800px] mx-auto pb-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="px-4 max-w-[800px] mx-auto">
        {membershipData ? (
          <>
            <h2 className="text-white text-center text-4xl font-bold mb-8">
              Ticket Details
            </h2>

            <div className="space-y-6 text-white">
              {/* Membership Information */}
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold">
                  Membership Information
                </h3>
                <p>Name: {membershipData?.title_name || "N/A"}</p>
                <p>Description: {membershipData?.description || "N/A"}</p>
                <p>
                  Phone:{" "}
                  {membershipData?.meta_data.member_phone_number || "N/A"}
                </p>
                <p>
                  Location:{" "}
                  {`${membershipData?.meta_data.member_city_of_origin}, ${membershipData?.meta_data.member_state_of_origin}, ${membershipData?.meta_data.member_country_of_origin}` ||
                    "N/A"}
                </p>
                <p>
                  Member Type: {membershipData?.meta_data.member_type || "N/A"}
                </p>
              </div>

              {/* Artist Information */}
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Artist Information</h3>
                <p>Name: {membershipData?.meta_data.artist_name || "N/A"}</p>
                <p>Email: {membershipData?.meta_data.artist_email || "N/A"}</p>
                <p>
                  Description:{" "}
                  {membershipData?.meta_data.artist_description || "N/A"}
                </p>
                <p>
                  Website:{" "}
                  {membershipData?.meta_data.artist_website ? (
                    <a
                      href={membershipData?.meta_data.artist_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      {membershipData?.meta_data.artist_website}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>

              {/* Management Information */}
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold">
                  Management Information
                </h3>
                <p>
                  Name: {membershipData?.meta_data.management_name || "N/A"}
                </p>
                <p>
                  Email: {membershipData?.meta_data.management_email || "N/A"}
                </p>
                <p>
                  Phone:{" "}
                  {membershipData?.meta_data.management_phone_number || "N/A"}
                </p>
                <p>
                  Address:{" "}
                  {membershipData?.meta_data.management_address || "N/A"}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-white text-center ">
            <p>{errorMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketInfo;
