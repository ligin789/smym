import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import '../assets/aos/aos.css'
import AOS from "aos";

import HeroImg from '../assets/img/jesus.jpg'
import AboutImg from '../assets/img/about.jpg'
import Img1 from '../assets/img/values-1.png'
import Img2 from '../assets/img/values-2.png'
import Img3 from '../assets/img/values-3.png'
import Feature from '../assets/img/features.png'
import Feature2 from '../assets/img/features-2.png'
import Feature3 from '../assets/img/features-3.png'

import Pricing from '../assets/img/pricing-free.png'
import pricing2 from '../assets/img/pricing-starter.png'
import pricing3 from '../assets/img/pricing-business.png'
import pricing4 from '../assets/img/pricing-ultimate.png'

import Portfolio1 from '../assets/img/portfolio/portfolio-1.jpg'
import Portfolio2 from '../assets/img/portfolio/portfolio-2.jpg'
import Portfolio3 from '../assets/img/portfolio/portfolio-3.jpg'
import Portfolio4 from '../assets/img/portfolio/portfolio-4.jpg'
import Portfolio5 from '../assets/img/portfolio/portfolio-5.jpg'
import Portfolio6 from '../assets/img/portfolio/portfolio-6.jpg'
import Portfolio7 from '../assets/img/portfolio/portfolio-7.jpg'
import Portfolio8 from '../assets/img/portfolio/portfolio-8.jpg'
import Portfolio9 from '../assets/img/portfolio/portfolio-9.jpg'

import Testimonial1 from '../assets/img/testimonials/testimonials-1.jpg'
import Testimonial2 from '../assets/img/testimonials/testimonials-2.jpg'
import Testimonial3 from '../assets/img/testimonials/testimonials-3.jpg'
import Testimonial4 from '../assets/img/testimonials/testimonials-4.jpg'
import Testimonial5 from '../assets/img/testimonials/testimonials-5.jpg'

import Team1 from '../assets/img/team/team-1.jpg'
import Team2 from '../assets/img/team/team-2.jpg'
import Team3 from '../assets/img/team/team-3.jpg'
import Team4 from '../assets/img/team/team-4.jpg'

import Client1 from '../assets/img/clients/client-1.png'
import Client2 from '../assets/img/clients/client-2.png'
import Client3 from '../assets/img/clients/client-3.png'
import Client4 from '../assets/img/clients/client-4.png'
import Client5 from '../assets/img/clients/client-5.png'
import Client6 from '../assets/img/clients/client-6.png'
import Client7 from '../assets/img/clients/client-7.png'
import Client8 from '../assets/img/clients/client-8.png'

import Blog1 from '../assets/img/blog/blog-1.jpg'
import Blog2 from '../assets/img/blog/blog-2.jpg'
import Blog3 from '../assets/img/blog/blog-3.jpg'

import Slider from "./Slider";




function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div>
       {/* ======= Hero Section ======= */}
       <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Syro Malabar Youth Movement</h1>
                <h2 data-aos="fade-up" data-aos-delay={400}>Syro Malabar church is blessed with youth. There are more than 14 lakhs of youth in ..</h2>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <div className="text-center text-lg-start">
                    <Link to="/about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                <img src={HeroImg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <Slider/>

        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row gx-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                  <div className="content">
                    <h3>Who We Are</h3>
                    <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                    <p>
                      Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link to="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Read More</span>
                        <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                  <img src={AboutImg} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Values Section ======= */}
          <section id="values" className="values">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Our Values</h2>
                <p>Odit est perspiciatis laborum et dicta</p>
              </header>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box" data-aos="fade-up" data-aos-delay={200}>
                    <img src={Img1} className="img-fluid" alt="" />
                    <h3>Ad cupiditate sed est odio</h3>
                    <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="fade-up" data-aos-delay={400}>
                    <img src={Img2} className="img-fluid" alt="" />
                    <h3>Voluptatem voluptatum alias</h3>
                    <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="fade-up" data-aos-delay={600}>
                    <img src={Img3} className="img-fluid" alt="" />
                    <h3>Fugit cupiditate alias nobis.</h3>
                    <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Values Section */}
          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile" />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-headset" style={{color: '#15be56'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-people" style={{color: '#bb0852'}} />
                    <div>
                      <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Counts Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Features</h2>
                <p>Laboriosam et omnis fuga quis dolor direda fara</p>
              </header>
              <div className="row">
                <div className="col-lg-6">
                  <img src={Feature} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={200}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Eos aspernatur rem</h3>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Facilis neque ipsa</h3>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Volup amet voluptas</h3>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Rerum omnis sint</h3>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Alias possimus</h3>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={700}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h3>Repellendus mollitia</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* / row */}
              {/* Feature Tabs */}
              <div className="row feture-tabs" data-aos="fade-up">
                <div className="col-lg-6">
                  <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>
                  {/* Tabs */}
                  <ul className="nav nav-pills mb-3">
                    <li>
                      <Link className="nav-link active" data-bs-toggle="pill" to="#tab1">Saepe fuga</Link>
                    </li>
                    <li>
                      <Link className="nav-link" data-bs-toggle="pill" to="#tab2">Voluptates</Link>
                    </li>
                    <li>
                      <Link className="nav-link" data-bs-toggle="pill" to="#tab3">Corrupti</Link>
                    </li>
                  </ul>{/* End Tabs */}
                  {/* Tab Content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                      <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                      </div>
                      <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Incidunt non veritatis illum ea ut nisi</h4>
                      </div>
                      <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    </div>{/* End Tab 1 Content */}
                    <div className="tab-pane fade show" id="tab2">
                      <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                      </div>
                      <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Incidunt non veritatis illum ea ut nisi</h4>
                      </div>
                      <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    </div>{/* End Tab 2 Content */}
                    <div className="tab-pane fade show" id="tab3">
                      <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                      </div>
                      <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>Incidunt non veritatis illum ea ut nisi</h4>
                      </div>
                      <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    </div>{/* End Tab 3 Content */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={Feature2} className="img-fluid" alt="" />
                </div>
              </div>{/* End Feature Tabs */}
              {/* Feature Icons */}
              <div className="row feature-icons" data-aos="fade-up">
                <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>
                <div className="row">
                  <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay={100}>
                    <img src={Feature3} className="img-fluid p-4" alt="" />
                  </div>
                  <div className="col-xl-8 d-flex content">
                    <div className="row align-self-center gy-4">
                      <div className="col-md-6 icon-box" data-aos="fade-up">
                        <i className="ri-line-chart-line" />
                        <div>
                          <h4>Corporis voluptates sit</h4>
                          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                        <i className="ri-stack-line" />
                        <div>
                          <h4>Ullamco laboris nisi</h4>
                          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                        <i className="ri-brush-4-line" />
                        <div>
                          <h4>Labore consequatur</h4>
                          <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                        <i className="ri-magic-line" />
                        <div>
                          <h4>Beatae veritatis</h4>
                          <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                        </div>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                        <i className="ri-command-line" />
                        <div>
                          <h4>Molestiae dolor</h4>
                          <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                        </div>
                      </div>
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                        <i className="ri-radar-line" />
                        <div>
                          <h4>Explicabo consectetur</h4>
                          <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* End Feature Icons */}
            </div>
          </section>{/* End Features Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Services</h2>
                <p>Veritatis et dolores facere numquam et praesentium</p>
              </header>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                  <div className="service-box blue">
                    <i className="ri-discuss-line icon" />
                    <h3>Nesciunt Mete</h3>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                  <div className="service-box orange">
                    <i className="ri-discuss-line icon" />
                    <h3>Eosle Commodi</h3>
                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="service-box green">
                    <i className="ri-discuss-line icon" />
                    <h3>Ledo Markt</h3>
                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                  <div className="service-box red">
                    <i className="ri-discuss-line icon" />
                    <h3>Asperiores Commodi</h3>
                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                  <div className="service-box purple">
                    <i className="ri-discuss-line icon" />
                    <h3>Velit Doloremque.</h3>
                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
                  <div className="service-box pink">
                    <i className="ri-discuss-line icon" />
                    <h3>Dolori Architecto</h3>
                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                    <Link to="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Pricing Section ======= */}
          <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Pricing</h2>
                <p>Check our Pricing</p>
              </header>
              <div className="row gy-4" data-aos="fade-left">
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="box">
                    <h3 style={{color: '#07d5c0'}}>Free Plan</h3>
                    <div className="price"><sup>$</sup>0<span> / mo</span></div>
                    <img src={Pricing} className="img-fluid" alt="" />
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li className="na">Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <Link to="#" className="btn-buy">Buy Now</Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="box">
                    <span className="featured">Featured</span>
                    <h3 style={{color: '#65c600'}}>Starter Plan</h3>
                    <div className="price"><sup>$</sup>19<span> / mo</span></div>
                    <img src={pricing2} className="img-fluid" alt="" />
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <Link to="#" className="btn-buy">Buy Now</Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="box">
                    <h3 style={{color: '#ff901c'}}>Business Plan</h3>
                    <div className="price"><sup>$</sup>29<span> / mo</span></div>
                    <img src={pricing3} className="img-fluid" alt="" />
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <Link to="#" className="btn-buy">Buy Now</Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                  <div className="box">
                    <h3 style={{color: '#ff0071'}}>Ultimate Plan</h3>
                    <div className="price"><sup>$</sup>49<span> / mo</span></div>
                    <img src={pricing4} className="img-fluid" alt="" />
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <Link to="#" className="btn-buy">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Pricing Section */}
          {/* ======= F.A.Q Section ======= */}
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
              </header>
              <div className="row">
                <div className="col-lg-6">
                  {/* F.A.Q List 1*/}
                  <div className="accordion accordion-flush" id="faqlist1">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                          Non consectetur a erat nam at lectus urna duis?
                        </button>
                      </h2>
                      <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                          Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                        </button>
                      </h2>
                      <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                        </button>
                      </h2>
                      <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* F.A.Q List 2*/}
                  <div className="accordion accordion-flush" id="faqlist2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                          Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                        </button>
                      </h2>
                      <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                          Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                        </button>
                      </h2>
                      <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                          Varius vel pharetra vel turpis nunc eget lorem dolor?
                        </button>
                      </h2>
                      <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End F.A.Q Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Portfolio</h2>
                <p>Check our latest work</p>
              </header>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src={Portfolio1} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio1} data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src={Portfolio2} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio2} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src={Portfolio3} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio3} data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src={Portfolio4} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio4} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src={Portfolio5} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio5} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src={Portfolio6} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio6} data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src={Portfolio7} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio7} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src={Portfolio8} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio8} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src={Portfolio9} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <Link to={Portfolio9} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></Link>
                        <Link to="portfolio-details.html" title="More Details"><i className="bi bi-link" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Portfolio Section */}
          {/* ======= Testimonials Section ======= */}
          <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Testimonials</h2>
                <p>What they are saying about us</p>
              </header>
              <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      </p>
                      <div className="profile mt-auto">
                        <img src={Testimonial1} className="testimonial-img" alt="" />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      </p>
                      <div className="profile mt-auto">
                        <img src={Testimonial2} className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      </p>
                      <div className="profile mt-auto">
                        <img src={Testimonial3} className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      </p>
                      <div className="profile mt-auto">
                        <img src={Testimonial4} className="testimonial-img" alt="" />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      </p>
                      <div className="profile mt-auto">
                        <img src={Testimonial5} className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                      </div>
                    </div>
                  </div>{/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>{/* End Testimonials Section */}
          {/* ======= Team Section ======= */}
          <section id="team" className="team">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Team</h2>
                <p>Our hard working team</p>
              </header>
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member">
                    <div className="member-img">
                      <img src={Team1} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member">
                    <div className="member-img">
                      <img src={Team2} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <div className="member-img">
                      <img src={Team3} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                  <div className="member">
                    <div className="member-img">
                      <img src={Team4} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Team Section */}
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Our Clients</h2>
                <p>Temporibus omnis officia</p>
              </header>
              <div className="clients-slider swiper-container">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide"><img src={Client1} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client2} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client3} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client4} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client5} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client6} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client7} className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src={Client8} className="img-fluid" alt="" /></div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>{/* End Clients Section */}
          {/* ======= Recent Blog Posts Section ======= */}
          <section id="recent-blog-posts" className="recent-blog-posts">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Blog</h2>
                <p>Recent posts form our Blog</p>
              </header>
              <div className="row">
                <div className="col-lg-4">
                  <div className="post-box">
                    <div className="post-img"><img src={Blog1} className="img-fluid" alt="" /></div>
                    <span className="post-date">Tue, September 15</span>
                    <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
                    <Link to="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-box">
                    <div className="post-img"><img src={Blog2} className="img-fluid" alt="" /></div>
                    <span className="post-date">Fri, August 28</span>
                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                    <Link to="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-box">
                    <div className="post-img"><img src={Blog3} className="img-fluid" alt="" /></div>
                    <span className="post-date">Mon, July 11</span>
                    <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                    <Link to="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Recent Blog Posts Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </header>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-geo-alt" />
                        <h3>Address</h3>
                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-telephone" />
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-envelope" />
                        <h3>Email Us</h3>
                        <p>info@example.com<br />contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-clock" />
                        <h3>Open Hours</h3>
                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        </div>
    )
}

export default Main
