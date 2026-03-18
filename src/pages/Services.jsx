import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { img: 'server.png', text: 'Data Center-based IT Infrastructure Consultation implementation and Network upgradation' },
  { img: 'cloud.png', text: 'Cloud Managed Services Cloud Optimization Cyber secure Data Backup' },
  { img: 'robot.png', text: 'Robotic Process Automation for Optical Character Reader and Contract Lifecycle Management' },
  { img: 'graph.png', text: 'Data Analytics and Hands on Training Support' },
  { img: 'user-check-icon.png', text: 'E-Verification and E-KYC' },
]

export default function Services() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
            <p>Below are the services which we offer</p>
          </div>
          <div className="row">
            {services.map((s, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="box" style={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="img-box">
                    <img src={`/images/${s.img}`} alt="" />
                  </div>
                  <div className="detail-box"><p>{s.text}</p></div>
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
