import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer_section}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_container}>
                        <div className={styles.footer_row}>
                            <div className={`${styles.footer_col} col-md-6 col-lg-4`}>
                                <div className={styles.footer_about}>
                                    <h4 className={styles.footer_about_title}>
                                        ABOUT US
                                    </h4>
                                    <div className={styles.footer_about_text}>
                                        <p className={styles.about_text}>
                                            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                        </p>
                                        <ul className={styles.social_media_links_list}>
                                            <li className={styles.social_media_links_item}>
                                                <a href="https://facebook.com" target="_blank" rel="noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                                            </li>
                                            <li className={styles.social_media_links_item}>
                                                <a href="https://facebook.com" target="_blank" rel="noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                                            </li>
                                            <li className={styles.social_media_links_item}>
                                                <a href="https://facebook.com" target="_blank" rel="noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                                            </li>
                                            <li className={styles.social_media_links_item}>
                                                <a href="https://facebook.com" target="_blank" rel="noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                                            </li>
                                            <li className={styles.social_media_links_item}>
                                                <a href="https://facebook.com" target="_blank" rel="noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.footer_col} col-md-6 col-lg-3`}>
                                <div className={styles.footer_about}>
                                    <h4 className={styles.footer_about_title}>
                                        INFORMATION
                                    </h4>
                                    <div className={styles.footer_about_text}>

                                        <ul className={styles.footer_widget_list}>

                                            <li className={styles.footer_widget}>
                                                <a href='/'>About Us</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>Products</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>Contact</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>Terms & Conditions</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.footer_col} col-md-6 col-lg-2`}>
                                <div className={styles.footer_about}>
                                    <h4 className={styles.footer_about_title}>
                                        MY ACCOUNT
                                    </h4>
                                    <div className={styles.footer_about_text}>

                                        <ul className={styles.footer_widget_list}>

                                            <li className={styles.footer_widget}>
                                                <a href='/'>Login</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>My Cart</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>Wishlist</a>
                                            </li>
                                            <li className={styles.footer_widget}>
                                                <a href='/'>My account</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.footer_col} col-md-6 col-lg-3`}>
                                <div className={styles.footer_news_letter}>
                                    <h4 className={styles.footer_about_title}>
                                        NEWSLETTER
                                    </h4>
                                    <div className={styles.news_letter_form_wrapper}>
                                        <form className={styles.news_letter_form}>
                                            <div className={`mb-0 ${styles.form_group} form_group`}>
                                                <label htmlFor="newsletterInput" className={`${styles.news_letter_lable}`}>
                                                    Newsletter
                                                </label>

                                                <input
                                                    type="email"
                                                    className={styles.news_letter_input} id="newsletterInput" placeholder="Enter E-mail Adheres"
                                                />
                                                <button color="white" className={styles.news_letter_button}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path>
                                                    </svg>
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
