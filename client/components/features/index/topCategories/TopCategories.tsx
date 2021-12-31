import React from 'react';
import styles from './TopCategories.module.css';

const TopCategories = () => {
    return (
        <>
            <section className={styles.top_categories_section}>
                <div className={`${styles.top_categories_container}`}>
                    <div className={`${styles.top_categories_row} row mx-0`}>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src={`../../../../static/images/categories/bedroom-resize-450-600.png`}/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Bedroom</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src='../../../../static/images/categories/dining-room-resize-450-600.png'/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Dining Room</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src='../../../../static/images/categories/living-room-resize-450-600.png'/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Living Room</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.top_categories_row} row mx-0`}>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src='../../../../static/images/categories/office-lounge-resize-450-600.png'/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Office Lounges</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src='../../../../static/images/categories/office-chair-resize-450-600.png'/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Office Chair</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.top_category_col} col-6 col-md-4 px-0`}>
                            <a href='/' className={styles.top_category_link}>
                                <div className={styles.category_cover}>
                                </div>
                                <div className={styles.category_image_wrapper}>
                                    <img className={styles.category_image} src='../../../../static/images/categories/office-table-resize-450-600.png'/>
                                </div>
                                <div className={styles.category_text}>
                                    <h2>Office Table</h2>
                                    <span>Discover</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TopCategories
