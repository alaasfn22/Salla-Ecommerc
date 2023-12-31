/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";
import LoadingSpinner from "../../helper/Spinner";
import BrandCard from "../brand/BrandCard";
import CustomeButton from "../../utils/CustomeButton";
const BrandContainer = ({ brands, brandLoading }) => {
  return (
    <>
      <CustomeButton name="Brand" pathname="/brand" title="All Brands" />
      <div className="p-4  rounded-xl  bg-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {brandLoading ? (
            <LoadingSpinner />
          ) : (
            brands.data &&
            brands.data.map((cat) => {
              return (
                <SwiperSlide key={cat.id}>
                  <BrandCard name={cat.name} image={cat.image} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </>
  );
};

export default BrandContainer;
