import React, { useRef, useState } from "react";
import styles from './Navbar.module.css';
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {
    EffectFlip, Pagination, Navigation, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, EffectFlip, Pagination, Navigation]);

const Navbar = () => {

    return (
        <div className={styles.advertisement_panel}>


            <Swiper
                direction={'vertical'}
                effect={'flip'}
                autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": false
                }}
                centeredSlides={true}
                className={styles.navbar_panel_slider}
            >
                <SwiperSlide className={styles.navbar_panel_slide}>
                    <p>
                        <strong>Enjoy an extra 20% off</strong> select sales styles with code                         <strong>OFF20</strong>
                    </p>
                </SwiperSlide>
                <SwiperSlide className={styles.navbar_panel_slide}>
                    <p>
                        <strong>Discover new arrival products with 50% off</strong> on total bill using code                         <strong>NEW50</strong>

                    </p>
                </SwiperSlide>
                <SwiperSlide className={styles.navbar_panel_slide}>
                    <p>
                        <strong>Shop whole collection with 30% off</strong> when apply code
                        <strong> COLLECT30</strong>
                    </p>
                </SwiperSlide>
                <SwiperSlide className={styles.navbar_panel_slide}>
                    <p>
                        <strong>Sales up to 50% for specific items</strong> with code
                        <strong> ITEM50</strong>
                    </p>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Navbar
