import React from 'react'
import styles from './Advertisement.module.css';

const Advertisement = () => {
    return (
        <>
            <section className={styles.advertisement_section}>
                <div className={`${styles.advertisement_section_container} container-fluid`}>
                    <div className={`${styles.advertisement_section_row} row mx-auto`}>
                        <div className={`col-lg-6 ${styles.advertisement_section_col}`}>
                            <a href='/shop' className={styles.advertisement_section_link}>
                                <figure>
                                    <div className={styles.advert_figure}>
                                        <img
                                            className={styles.advert_img}
                                            src='https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F1.jpg/1920/75?url=%2Fimages%2Fbanner%2F1.jpg&w=1920&q=75'
                                        />
                                    </div>
                                </figure>
                                <div className={styles.advert_info_left}>
                                    <div className={styles.advert_title}>
                                        <h3 className={styles.advert_title_text}>Sale Furniture <br />
                                            For Summer
                                        </h3>
                                        <p className={styles.advert_desc}>
                                            Great Discounts Here
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`col-lg-6 ${styles.advertisement_section_col}`}>
                            <a href='/shop' className={styles.advertisement_section_link}>
                                <figure>
                                    <div className={styles.advert_figure}>
                                        <img
                                            className={styles.advert_img}
                                            src='https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F2.jpg/1920/75?url=%2Fimages%2Fbanner%2F2.jpg&w=1920&q=75'
                                        />
                                    </div>
                                </figure>
                                <div className={styles.advert_info_right}>
                                    <div className={styles.advert_title}>
                                        <h3 className={styles.advert_title_text}>
                                            Office Chair  <br />
                                            For Best Offer
                                        </h3>
                                        <p className={styles.advert_desc}>
                                            Great Discounts Here
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertisement
