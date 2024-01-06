/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {Keyboard, Autoplay,Navigation ,Pagination} from "swiper/modules";
import LoadingSpinner from "../../helper/Spinner";
import CatCard from "../category/catCard";
import CustomeButton from "../../utils/CustomeButton";

const Categorycontainer = ({ catLoading, category }) => {
  return (
    <>
      <CustomeButton
        name="Category"
        pathname="/category"
        title="All Categories"
      />
      <div className="p-4 rounded-xl bg-white  dark:bg-gray-800 dark:border-gray-700">
        <Swiper
      slidesPerView={1}
      spaceBetween={20}
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
          {catLoading ? (
            <LoadingSpinner />
          ) : (
            category &&
            category.map((cat,index) => {
              return (
                <SwiperSlide key={index}>
                  <CatCard  name={cat.name} image={cat.image} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Categorycontainer;
