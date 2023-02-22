import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation";
import "./Technologies.css"

import { Autoplay, Pagination, Navigation } from "swiper"

const Technologies = () => {
    return (
        <div
            className='swiper-container'
            id='technologies'
        >
            <Fade direction='down' duration={1000} fraction={0.5} triggerOnce={true} cascade={true}>
                <h2 className='swiper-container__header'>
                    Tecnologias y Herramientas
                </h2>
                <p className='swiper-container__description'>
                    Estas son algunas de las tecnologias que he aprendido, y que también he utilizado para poder realizar los aplicativos que he desarrollado a lo largo de este tiempo.
                </p>
            </Fade>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="swiper"
            >
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/NTyPB5L/JS-logo.png" alt="JS Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/9rF2s07/React-logo.png" alt="React Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/8zj87js/html-logo.png" alt="HTML Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/ZMgxWWH/CSS-logo.png" alt="CSS Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/jh1Jhxp/Node-logo.png" alt="NodeJS Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/yVp9XDH/Git-logo.png" alt="Git Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/JR13Stn/Github-logo.png" alt="Github Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/0JM2q9J/Firebase-logo.png" alt="Firebase Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/1zphx93/My-SQL-logo.png" alt="MySQL Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/zsjGvdC/Vue-logo.png" alt="VueJS Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/dmX3MhH/Sass-logo.png" alt="SASS Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/tYSvvGQ/Bootstrap-logo.png" alt="Bootstrap Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/WPBNRmG/Java-logo.png" alt="Java Logo" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="https://i.ibb.co/7RgQqJh/Csharp-logo.png" alt="C# Logo" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export { Technologies }