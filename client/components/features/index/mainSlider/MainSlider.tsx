import React from 'react'
import SwiperCore, {
    EffectFade, Navigation, Pagination
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './MainSlider.module.css';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const MainSlider = () => {
    return (
        <>
            <div className={styles.swiper_wrapper}>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    className={styles.swiper_banner}
                    speed={1500}
                    modules={[EffectFade]} effect="fade"
                >

                    <SwiperSlide>
                        {({ isActive }) => (
                            // <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                            <div className={`${isActive ? styles.swiper_slide_active : ''} ${styles.slide_content_wrapper}`}>
                                <div className={styles.image_banner}>
                                    <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-1.jpg" alt="Chicago"></img>
                                </div>
                                <div className={styles.introduce_center}>
                                    <h4
                                        className={styles.slide_product_subtitle}>
                                        New Product
                                    </h4>
                                    <h1
                                        className={`${styles.slide_product_name} $`}>
                                        Flexible Sofa Set
                                    </h1>
                                    <p
                                        className={`${styles.slide_product_desc}`}>
                                        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna
                                    </p>
                                    <a
                                        className={`${styles.slide_product_link} `}>
                                        Shop now
                                    </a>
                                </div>
                            </div>
                        )}

                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={`${isActive ? styles.swiper_slide_active : ''} ${styles.slide_content_wrapper}`}>
                                <div className={styles.image_banner}>
                                    <img src="https://htmldemo.hasthemes.com/furns/furns/assets/images/slider-image/slider-2-2.jpg" alt="Chicago"></img>
                                </div>
                                <div className={styles.introduce_center}>
                                    <h4
                                        className={styles.slide_product_subtitle}>
                                        New Product
                                    </h4>
                                    <h1
                                        className={`${styles.slide_product_name} $`}>
                                        Flexible Sofa Set
                                    </h1>
                                    <p
                                        className={`${styles.slide_product_desc}`}>
                                        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br /> eiusmo tempor incididunt ut labore et dolore magna
                                    </p>
                                    <a
                                        className={`${styles.slide_product_link} `}>
                                        Shop now
                                    </a>
                                </div>
                            </div>
                        )}

                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default MainSlider;
