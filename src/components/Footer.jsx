import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer_container">
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>NUMERO INFO</h4>
                <p>
                  Numero Info IT Services is an IT Division of Numero Mobile Private Limited.
                  Numero Mobile is the innovation leader in providing most robust and intelligent
                  mobility solutions &amp; services to its customers.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/portfolio">Portfolio</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-0 ml-auto">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>B 123 First Floor Sector 54 Gurgaon Haryana 122003</span>
                  </a>
                  <a href="tel:+917011370445">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Phone : +91 70113 70445</span>
                  </a>
                  <a href="mailto:info@numeroinfo.asia">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>info@numeroinfo.asia</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved By{' '}
            <a href="https://numeroinfo.asia/">NUMERO INFO</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
