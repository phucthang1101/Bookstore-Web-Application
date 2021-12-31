import React from 'react'
import styles from './CategorySlider.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
const DUMMY_DATA = [
    {
        cat_name: 'Living',
        cat_img: 'https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F04_cfed02f9-b7d9-4428-bc23-21bb03b94f25.png%3Fv%3D1632202616/96/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F04_cfed02f9-b7d9-4428-bc23-21bb03b94f25.png%3Fv%3D1632202616&w=96&q=75'
    },
    {
        cat_name: 'Bedroom',
        cat_img: 'https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F01.png%3Fv%3D1632202342/96/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F01.png%3Fv%3D1632202342&w=96&q=75'
    },
    {
        cat_name: 'Dining',
        cat_img: 'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F03.png%3Fv%3D1632202420&w=256&q=75'
    },
    {
        cat_name: 'Lounge',
        cat_img: 'https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F02.png%3Fv%3D1632202467/256/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F02.png%3Fv%3D1632202467&w=256&q=75'
    },
    {
        cat_name: 'Office Chair',
        cat_img: 'https://furns-react.netlify.app/nextimg/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F4.png%3Fv%3D1636861994/96/75?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fcollections%2F4.png%3Fv%3D1636861994&w=96&q=75'
    }
];
const CategorySlider = () => {
    return (
        <section className={styles.category_slide_section}>
            <div className={`container ${styles.category_slide_container}`}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    scrollbar={{ draggable: true, hide: true, dragSize:0 }}
                    className={styles.category_swiper}
                >
                    {
                        DUMMY_DATA.map(cat => (
                            <SwiperSlide className={styles.category_swiper_slide}>
                                <a className={styles.category_swiper_slide_content}>
                                    <div className={styles.category_slide_wrapper}>
                                        <div className={styles.test}>
                                            <div className={styles.category_slide_bg_wrapper}>
                                                <img className={styles.category_slide_bg} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+' />

                                            </div>
                                            <img className={styles.category_slide_img} src={cat.cat_img} />


                                        </div>
                                        <h4 className={styles.category_name}>{cat.cat_name}</h4>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
        </section>
    )
}

export default CategorySlider
