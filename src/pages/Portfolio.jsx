import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const portfolioImages = Array.from({ length: 16 }, (_, i) => `portfolio${i + 1}.jpg`)

export default function Portfolio() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      <section className="case_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Portfolio</h2>
          </div>
          <div className="row">
            {portfolioImages.map((img, i) => (
              <div key={i} className="col-md-4 my-2">
                <div className="box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                  <div className="img-box">
                    <img src={`/images/${img}`} alt={`portfolio-${i + 1}`} style={{ width: '100%' }} />
                  </div>
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
