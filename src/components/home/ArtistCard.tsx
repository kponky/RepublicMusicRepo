import React from "react";

const ArtistCard = () => {
  return (
    <div className="artist-card w-1/4 relative group">
      {/* bg image */}
      <div className="artist-image"></div>
      {/* overlay */}
      <div className="artist-overlay flex justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-yellow-100">
        <div>website</div>
        <div>social icons</div>
      </div>
      <h3 className="text-[40px] absolute bottom-5 left-5 leading-none text-white artist-name">Taylor Swift</h3>
    </div>
  );
};

export default ArtistCard;
