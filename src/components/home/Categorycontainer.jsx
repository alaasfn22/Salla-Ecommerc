/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {Keyboard, Autoplay, Navigation, Pagination} from "swiper/modules";
import LoadingSpinner from "../../helper/Spinner";
import CustomeButton from "../../utils/CustomeButton";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {imageAPi} from "../../Api/imageAPI";

const Categorycontainer = ({catLoading, category}) => {
  return (
    <>
      <div className=" py-4  dark:bg-gray-800 dark:border-gray-700">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          {catLoading ? (
            <LoadingSpinner />
          ) : (
            category &&
            category.map((cat) => {
              return (
                <SwiperSlide key={cat._id}>
                  <div className="py-4 mt-20">
                    <Link
                      to={`/products/category?categoryId=${cat._id}&name=${cat.name}`}
                    >
                      <div className="w-40 h-40 md:h-44 md:w-44 rounded-full  bg-main-Color-2 overflow-hidden    border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  flex flex-col gap-2 items-center justify-center text-center duration-300 hover:bg-gray-50 hover:shadow-xl">
                        <LazyLoadImage
                          className="max-h-20"
                          src={imageAPi + cat.image.slice(9)}
                          alt={cat.name}
                          title={cat.name}
                        />
                        <span className="font-semibold  text-gray-700 dark:text-gray-400 ">
                          {" "}
                          {cat.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })
          )}
          <div className="absolute top-0 left-0 w-full z-10">
            <CustomeButton
              title="Featured Categories"
              pathname="/category"
              name="s"
            />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Categorycontainer;
