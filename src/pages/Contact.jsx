import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      <section className="about_section layout_padding layout_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <p>Phone : +91 9667687077</p>
                <p>Website : https://numeroinfo.asia/about-us/</p>
                <p>Email : info@numeroinfo.asia</p>
                <p>Address : B 123 First Floor Sector 54 Gurgaon Haryana 122003</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about-img.png" alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
