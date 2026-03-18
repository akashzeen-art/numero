import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  { img: 'anand-khanna-profile-image-225x300.jpg', name: 'Mr. Anand Khanna', role: 'Business Head Founder Member' },
  { img: 'mamta.jpg', name: 'Mamta Parashar', role: 'Founder', style: { maxHeight: 350, maxWidth: 300, objectFit: 'cover' } },
  { img: 'd7604cd7-5afa-49e1-b97d-8746a9a3b3d6-compressed-300x300.jpg', name: 'Mr. Roshan Singh', role: 'Digital Head' },
]

const partners = [
  '1-copy-compressed-_1_-150x150.webp',
  '2-copy-compressed-_1_-300x240.webp',
  '3-copy-compressed-300x240.webp',
  '4-copy-compressed-300x240.webp',
  '5-copy-compressed-300x240.webp',
  '6-copy-compressed-300x240.webp',
  '7-copy-compressed-300x240.webp',
  '8-copy-compressed-300x240.webp',
  '9-copy-compressed-300x240.webp',
]

export default function About() {
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
                  <h2>About Us</h2>
                </div>
                <p>Numero Mobile is the innovation leader in providing most robust and intelligent mobility solutions &amp; services to its customers.</p>
                <p>We help enterprise to grow their business and create value for their end customer, enabling them to meaningfully connect through target messaging across all channels and devices and improve end user experience.</p>
                <p>From the largest enterprises to one-person businesses, our customers trust our on time delivery.</p>
                <p>We are a team of experienced professionals who are working to provide world class, innovative products.</p>
                <p>We at Numero Mobile help our customers in Accelerating Business Growth, By Redefining Business Operation for Fast Paced Digital Agenda of Enterprises with Operational Efficient Technology Solutions.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about-img.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Certifications</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="box">
                <div className="detail-box">
                  <img src="/images/0001-compressed-460x650.jpg" alt="cert1" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="box">
                <div className="detail-box">
                  <img src="/images/0001-compressed-2-460x650.jpg" alt="cert2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Meet our experts</h2>
          </div>
          <div className="row">
            {team.map((m, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="box">
                  <img src={`/images/${m.img}`} alt={m.name} style={m.style || {}} />
                  <div className="detail-box">
                    <h5>{m.name}</h5>
                    <p>{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Partners</h2>
          </div>
          <div className="row">
            {partners.map((img, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="img-box">
                  <img src={`/images/${img}`} style={{ width: 150, height: 150, overflow: 'hidden' }} alt={`partner-${i + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
