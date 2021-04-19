import React from 'react'

function Footer() {
    return (
        <div>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            <div className="col-lg-6">
                                <form action method="post">
                                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <img src="assets/img/logo.png" alt="" />
                                    <span>FlexStart</span>
                                </a>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram" /></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin" /></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">About us</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Services</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Web Design</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Web Development</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Product Management</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Marketing</a></li>
                                    <li><i className="bi bi-chevron-right" /> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        © Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
            </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ */}
              Designed by
            </div>
                </div>
            </footer>{/* End Footer */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        </div>
    )
}

export default Footer
