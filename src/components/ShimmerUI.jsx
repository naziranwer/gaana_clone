import React from "react";
import { Image, Shimmer } from "react-shimmer";
const ShimmerUI = () => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/hl8zoliad/image/fetch/f_auto/https%3A%2F%2Fuser-images.githubusercontent.com%2F10860624%2F127360456-7d3646d0-5490-438d-bcda-a83f105e34b5.png"
        fallback={<Shimmer width={1500} height={600} />}
      />
    </div>
  );
};

export default ShimmerUI;
