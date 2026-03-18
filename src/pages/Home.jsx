import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const slides = [
  {
    title: 'WELCOME TO NUMERO INFO IT SERVICES',
    text: 'Numeroinfo IT Services is a Technology arm of Numeromobile Private Limited. We are assisting all sizes of organizations with the demand in IT infrastructure, SAP infrastructure plus consultation, managed cloud, cloud-based backup, ISO auditing, etc. NumeroInfo helps to create successful IT Solutions, for any screen and forever imaginable user experience',
  },
  {
    title: 'WHAT DO YOU KNOW ABOUT OUR COMPANY?',
    text: 'We are a professional IT company dedicated to transforming businesses through technology. At Numeroinfo IT Services, we specialize in assisting organizations of all sizes with IT cloud and on-premises infrastructure upgrades, SAP infrastructure consulting, implementation, and management, AWS/Azure/GCP managed services, cloud-based data backup, network audit, network security, robotic process automation for optical character reader/intelligent document processing, contract lifecycle management, e-verification, and litigation management.',
  },
]

const services = [
  { img: 'server.png', text: 'Data Center-based IT Infrastructure Consultation implementation and Network upgradation' },
  { img: 'cloud.png', text: 'Cloud Managed Services Cloud Optimization Cyber secure Data Backup' },
  { img: 'robot.png', text: 'Robotic Process Automation for Optical Character Reader and Contract Lifecycle Management' },
  { img: 'graph.png', text: 'Data Analytics and Hands on Training Support' },
  { img: 'user-check-icon.png', text: 'E-Verification and E-KYC' },
]

export default function Home() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="hero_area">
        <Navbar />
        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="/images/slider-img.png" alt="slider" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>{slides[active].title}</h1>
                  <p>{slides[active].text}</p>
                  <div className="btn-box">
                    <Link to="/contact" className="btn1">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
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

      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>Numero Mobile is the innovation leader in providing most robust and intelligent mobility solutions &amp; services to its customers.</p>
                <p>We help enterprise to grow their business and create value for their end customer, enabling them to meaningfully connect through target messaging across all channels and devices and improve end user experience.</p>
                <Link to="/about">Read More</Link>
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

      <section className="case_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Portfolio</h2>
          </div>
          <div className="row">
            {['portfolio2.jpg', 'portfolio3.jpg', 'portfolio7.jpg'].map((img, i) => (
              <div key={i} className="col-md-4 my-2">
                <div className="box">
                  <div className="img-box">
                    <img src={`/images/${img}`} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
