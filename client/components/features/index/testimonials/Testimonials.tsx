import React from 'react'
import styles from './Testimonial.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

const Testimonials = () => {
    return (
        <>
            <section className={styles.partner_area}>
                <div className={` ${styles.partner_area_container}`}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        scrollbar={{ draggable: true, hide: true, dragSize: 0 }}
                        className={styles.partner_swiper}
                    >
                        <SwiperSlide className={styles.partner_swiper_slide}>
                            <a target='_blank' className={styles.partner_link} href='#'>
                                <img className={styles.partner_img} src='https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/66004102c3027767874d3ca7028b5478' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className={styles.partner_swiper_slide}>
                            <a target='_blank' className={styles.partner_link} href='#'>
                                <img className={styles.partner_img} src='https://assets-global.viveport.com/vr_developer_published_assets/author/ef9d6f5c-8857-42d4-9d8d-278905a82828/publish/icon.jpg' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className={styles.partner_swiper_slide}>
                            <a target='_blank' className={styles.partner_link} href='#'>
                                <img className={styles.partner_img} src='https://cdn.comparably.com/24749373/l/140290/company_logo_140290.png' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className={styles.partner_swiper_slide}>
                            <a target='_blank' className={styles.partner_link} href='#'>
                                <img className={styles.partner_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_O2zbw_zRHUZiGiHjVVl_3IW9UVcprizRLTZDqlveICrfLYob' />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className={styles.partner_swiper_slide}>
                            <a target='_blank' className={styles.partner_link} href='#'>
                                <img className={styles.partner_img} src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR121vxse4g4zEEGVrmJj79aW4ZK9dcqdrRBm4JypdLNZRW7v6N' />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={`${styles.testimonials_area} ${styles.testimonials_area_bg}`}>
                <div className={`container ${styles.testimonials_swiper_wrapper}`}>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className={styles.testimonials_swiper}
                        speed={1000}
                    >
                        <SwiperSlide className={styles.testimonials_swiper_slide} key={0}>
                            <div className={styles.single_testimonial}>
                                <div className={styles.client_img_wrapper}>
                                    <img
                                        className={styles.client_img}
                                        src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar2_resize-250x250.jpg" alt="image"
                                    />
                                </div>
                                <p className={styles.testimonial_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <div className={styles.client_info}>
                                    <h4>
                                        Jason Jisan
                                    </h4>
                                    <span>
                                        Founder at Brand
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.testimonials_swiper_slide} key={1}>
                            <div className={styles.single_testimonial}>
                                <div className={styles.client_img_wrapper}>
                                    <img
                                        className={styles.client_img}
                                        src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar1_resize-250x250.jpg" alt="image"
                                    />
                                </div>
                                <p className={styles.testimonial_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <div className={styles.client_info}>
                                    <h4>
                                        Jason Jisan
                                    </h4>
                                    <span>
                                        Founder at Brand
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.testimonials_swiper_slide} key={2}>
                            <div className={styles.single_testimonial}>
                                <div className={styles.client_img_wrapper}>
                                    <img
                                        className={styles.client_img}
                                        src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar3_resize-250x250.jpg" alt="image"
                                    />
                                </div>
                                <p className={styles.testimonial_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <div className={styles.client_info}>
                                    <h4>
                                        Jason Jisan
                                    </h4>
                                    <span>
                                        Founder at Brand
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>

        </>
    )
}

export default Testimonials
