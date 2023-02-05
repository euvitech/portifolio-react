import React from "react";
import { Data } from "./Data";
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "./testimonials.css"

// // Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">O que meus clientes dizem</h2>
            <span className="section__subtitle">Depoimento</span>

            <Swiper className="testimonial__container"
            loop={false}
            grabCursor={true}
            slidesPerView={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
              }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                // "@1.00": {
                //     slidesPerView: 2,
                //     spaceBetween: 40,
                // },
                // "@1.50": {
                //     slidesPerView: 3,
                //     spaceBetween: 50,
                // },
            }}
            modules={[Pagination, Navigation]}
            >
                {Data.map(({id, image, title, description}) => {
                    return(
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="Depoimento" className="testimonial__img" />

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>


    )
}

export default Testimonials