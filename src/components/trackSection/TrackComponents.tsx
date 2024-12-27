"use client"
import React, { useState } from "react";
import Button from "../shared/Button";

const TrackComponent = () => {
  const [inputValue, setInputVaue] = useState("");
  const [membershipData, setMembershipData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVaue(e.target.value);
  }; // handleInputChange

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setError("Please enter a valid ticket number or membership ID.");
      return;
    }

    setError("");
    setLoading(true);
    setMembershipData(null);

    try {
      const response = await fetch(
        `https://backend.republicmanagement.org/public/api/v1/nellalink/smart-meta-manager/entity/ticketmembership/retrieve-by-meta-key/${inputValue}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch membership details.");
      }

      const data = await response.json();
      setMembershipData(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full bg-black rounded-md shadow-md">
      {/* <h2 className="text-xl font-bold mb-4">Track Membership</h2> */}
      <h2 className="text-center text-[30px] lg:text-[100px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
        Track Membership
      </h2>
      <div className="flex gap-4 mb-6 mx-8 mt-10">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 w-full text-red-400 "
          placeholder="Enter ticket number or membership card no."
          
        />

        <Button variant="solid" onClick={handleSubmit}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </div>

      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      {membershipData && (
        <div className="space-y-6">
          {/* Membership Information */}
          <div className="mx-10 ">
            <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
              Membership Information
            </h3>
            <div>
              <p className="py-4">
                Name: {membershipData.membership?.name || "N/A"}
              </p>
              <p className="py-4">
                Email: {membershipData.membership?.email || "N/A"}
              </p>
              <p className="py-4">
                Phone: {membershipData.membership?.phone || "N/A"}
              </p>
              <p className="py-4">
                Location: {membershipData.membership?.location || "N/A"}
              </p>
            </div>
          </div>

          {/* Artist Information */}
          <div className="mx-10">
            <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
              Artist Information
            </h3>
            <div>
              <p className="py-4">
                Name: {membershipData.artist?.name || "N/A"}
              </p>
              <p className="py-4">
                Email: {membershipData.artist?.email || "N/A"}
              </p>
              <p className="py-4">
                Description: {membershipData.artist?.description || "N/A"}
              </p>
              <p className="py-4">
                Website: {membershipData.artist?.website || "N/A"}
              </p>
            </div>
          </div>

          {/* Management Information */}
          <div className="mx-10">
            <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
              Management Information
            </h3>
            <div className="py-5">
              <p className="py-4">
                Name: {membershipData.management?.name || "N/A"}
              </p>
              <p className="py-4">
                Contact: {membershipData.management?.contact || "N/A"}
              </p>
              <p className="py-4">
              Location: {membershipData.membership?.location || "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackComponent;
