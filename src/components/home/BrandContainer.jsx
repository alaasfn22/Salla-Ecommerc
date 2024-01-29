/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react";

import {Autoplay, Keyboard, Pagination, Navigation} from "swiper/modules";
import LoadingSpinner from "../../helper/Spinner";
import BrandCard from "../brand/BrandCard";
import CustomeButton from "../../utils/CustomeButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {imageAPi} from "../../Api/imageAPI";

const BrandContainer = ({brands, brandLoading}) => {
  return (
    <>
      <div className="py-4  dark:bg-gray-800 dark:border-gray-700">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={false}
          
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
            reverseDirection: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="mySwiper  "
        >
          {brandLoading ? (
            <LoadingSpinner />
          ) : (
            brands.data &&
            brands.data.map((brand) => {
              return (
                <SwiperSlide key={brand._id}>
                  <div className="py-4 mt-20">
                    <Link
                      to={`/products/brand?brandId=${brand._id}&name=${brand.name}`}
                    >
                      <div className="h-40 w-40 md:h-44 md:44 bg-main-Color-2   border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl flex flex-col gap-4 items-center justify-center text-center duration-300 hover:bg-gray-50 hover:shadow-xl">
                        <LazyLoadImage
                          className="max-h-20"
                          src={imageAPi + brand.image.slice(9)}
                          alt={brand.name}
                          title={brand.name}
                        />
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })
          )}
          <div className="absolute w-full top-0 left-0 z-10">
            <CustomeButton
              title="Featured Brands"
              pathname="/brand"
              name="swiper"
            />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default BrandContainer;
