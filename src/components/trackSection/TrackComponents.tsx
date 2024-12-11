import React from "react";
import Button from "../shared/Button";

const TrackComponent = () => {
  return (
    <div className="p-6 w-full bg-black rounded-md shadow-md text-white">
      {/* <h2 className="text-xl font-bold mb-4">Track Membership</h2> */}
      <h2 className="text-center text-[30px] lg:text-[100px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
        Track Membership
      </h2>
      <div className="flex gap-4 mb-6 mx-8">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter ticket number or membership card no."
        />

        <Button variant="solid">Submit</Button>
      </div>

      <div className="space-y-6">
        <div className="mx-10">
          <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
            Membership Information
          </h3>
          <div>
            <p className="py-4">Name:</p>
            <p className="py-4">Email</p>
            <p className="py-4">Phone</p>
            <p className="py-4">Location</p>
          </div>
        </div>

        <div className="mx-10">
          <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
            Artist Information
          </h3>
          <div>
            <p className="py-4">Name:</p>
            <p className="py-4">Email</p>
            <p className="py-4">Description</p>
            <p className="py-4">Website</p>
          </div>
        </div>

        <div className="mx-10">
          <h3 className="font-semibold border border-gray-300 rounded-lg p-2 w-full text-center">
            Management Information
          </h3>

          <div className="py-5">
            <p  className="py-4">Name:</p>
            <p  className="py-4">Name</p>
            <p className="py-4">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackComponent;
