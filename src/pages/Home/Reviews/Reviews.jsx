import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className="3xl text-center font-bold my-8">Reviews</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis possimus nostrum fugiat, et minima provident quaerat illo quo quasi ad blanditiis placeat sapiente recusandae eius fugit aliquid quam repellendus.
                </p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Reviews;