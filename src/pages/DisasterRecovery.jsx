import { useEffect } from 'react'

export default function DisasterRecovery() {
  useEffect(() => {
    // Load Lucide
    if (!window.lucide) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/lucide@latest'
      script.onload = () => window.lucide.createIcons()
      document.body.appendChild(script)
    } else {
      window.lucide.createIcons()
    }

    // Load Inter font
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#FAF5FF', color: '#1E1B4B', overflowX: 'hidden' }}>
      <style>{`
        .dr-orb {
          position: fixed; border-radius: 50%; filter: blur(80px);
          z-index: 0; opacity: 0.5; animation: drFloat 20s infinite alternate ease-in-out;
        }
        .dr-orb-1 { width: 400px; height: 400px; background: #C084FC; top: -100px; left: -100px; }
        .dr-orb-2 { width: 500px; height: 500px; background: #F0ABFC; bottom: -100px; right: -100px; animation-delay: -5s; }
        @keyframes drFloat {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(50px,100px) scale(1.1); }
        }
        .dr-glass {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px 0 rgba(91,33,182,0.05);
        }
        .dr-hero-gradient {
          background: linear-gradient(135deg, #5B21B6 0%, #D946EF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dr-scroll-indicator { animation: drBounce 2s infinite; }
        @keyframes drBounce {
          0%,20%,50%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        .dr-section {
          min-height: 100vh; display: flex;
          align-items: center; padding: 80px 20px;
          position: relative; z-index: 1;
        }
        .dr-nav {
          background: rgba(250,245,255,0.8);
          backdrop-filter: blur(8px);
        }
        .dr-spin { animation: spin 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div className="dr-orb dr-orb-1" />
      <div className="dr-orb dr-orb-2" />

      {/* Navigation */}
      <nav className="dr-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, borderBottom: '1px solid #f3e8ff' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.5px', color: '#581c87' }}>Numero Info</span>
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500, color: '#6b21a8' }}>
            <a href="#threats" onClick={e => scrollTo(e, '#threats')} style={{ color: '#6b21a8', textDecoration: 'none' }}>Threat Landscape</a>
            <a href="#strategy" onClick={e => scrollTo(e, '#strategy')} style={{ color: '#6b21a8', textDecoration: 'none' }}>DRaaS Strategy</a>
            <a href="#outcomes" onClick={e => scrollTo(e, '#outcomes')} style={{ color: '#6b21a8', textDecoration: 'none' }}>Business Outcomes</a>
          </div>
          <button onClick={() => window.open('https://calendly.com/itstusharpandey/30min', '_self')} style={{ background: '#9333ea', color: '#fff', padding: '8px 20px', borderRadius: 9999, fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(168,85,247,0.3)' }}>
            Audit Your Resilience
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="dr-section" style={{ overflow: 'hidden' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', width: '100%' }}>
          <div>
            <span style={{ display: 'inline-block', padding: '4px 16px', borderRadius: 9999, background: '#f3e8ff', color: '#7e22ce', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
              Operational Continuity in Hostile Times
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}>
              When the World is <span className="dr-hero-gradient">Unpredictable</span>, Your Business Shouldn't Be.
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(30,27,75,0.7)', marginBottom: 40, lineHeight: 1.7, maxWidth: 512 }}>
              In an era of geopolitical instability and regional blackouts, traditional disaster recovery is too slow. Position your enterprise for survival with speedy, immutable, and automated DRaaS.
            </p>
            <a href="#strategy" onClick={e => scrollTo(e, '#strategy')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1e1b4b', color: '#fff', padding: '16px 32px', borderRadius: 16, fontWeight: 700, textDecoration: 'none' }}>
              Deploy Resilience with us <i data-lucide="arrow-right" style={{ width: 20, height: 20 }} />
            </a>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="dr-glass" style={{ padding: 32, borderRadius: 40, position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: 'zap', color: '#7e22ce', title: 'Instant Failover', desc: 'Zero-touch migration to clean cloud zones.' },
                  { icon: 'globe', color: '#db2777', title: 'Geo-Isolation', desc: 'Data residency outside of conflict regions.' },
                  { icon: 'lock', color: '#4338ca', title: 'Immutability', desc: 'Locked data safe from cyber-warfare.' },
                  { icon: 'activity', color: '#16a34a', title: 'Ready-State', desc: '99.999% availability of recovery landing zones.' },
                ].map(({ icon, color, title, desc }) => (
                  <div key={title} style={{ background: 'rgba(255,255,255,0.4)', padding: 24, borderRadius: 24, border: '1px solid rgba(255,255,255,0.5)' }}>
                    <i data-lucide={icon} style={{ color, marginBottom: 16, display: 'block' }} />
                    <h3 style={{ fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
                    <p style={{ fontSize: 12, color: 'rgba(88,28,135,0.6)', margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="dr-scroll-indicator" style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
          <i data-lucide="chevron-down" style={{ color: '#d8b4fe', width: 32, height: 32 }} />
        </div>
      </section>

      {/* Threats */}
      <section id="threats" className="dr-section" style={{ background: 'rgba(245,243,255,0.5)' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Hostile Environment Risk Factors</h2>
            <p style={{ color: 'rgba(88,28,135,0.6)', maxWidth: 672, margin: '0 auto' }}>
              Organizations face elements out of their control. Modern DRaaS mitigates these "Black Swan" events through architectural diversification.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { icon: 'flame', color: '#7e22ce', bg: '#f3e8ff', border: '#9333ea', title: 'Kinetic & Political Risks', desc: 'Infrastructure sabotage, regional power grid blackouts, and physical data center compromise due to conflict.' },
              { icon: 'skull', color: '#be185d', bg: '#fdf2f8', border: '#ec4899', title: 'State-Sponsored Cyberspace impacts', desc: 'Wiper malware and sophisticated ransomware designed to paralyze national critical infrastructure and supply chains.' },
              { icon: 'hard-drive-download', color: '#4338ca', bg: '#eef2ff', border: '#6366f1', title: 'Resource Scarcity', desc: 'Critical personnel unavailability or hardware supply chain disruptions that make on-premises recovery impossible.' },
            ].map(({ icon, color, bg, border, title, desc }) => (
              <div key={title} className="dr-glass" style={{ padding: 40, borderRadius: 24, borderLeft: `4px solid ${border}` }}>
                <div style={{ width: 48, height: 48, background: bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <i data-lucide={icon} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(30,27,75,0.7)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="dr-section">
        <div style={{ maxWidth: 1152, margin: '0 auto', width: '100%' }}>
          <div className="dr-glass" style={{ borderRadius: 60, padding: 48, overflow: 'hidden', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32 }}>Our "Outcome-Oriented" <br />3-2-1 Recovery Loop</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                  {[
                    { n: 3, title: 'Predictive Validation', desc: 'Continuous non-disruptive testing ensures the recovery environment is ready for production at all times.' },
                    { n: 2, title: 'Automated Orchestration', desc: 'One-click failover scripts spin up entire virtual networks in safe cloud regions within minutes.' },
                    { n: 1, title: 'Continuous Air-Gapped Replication', desc: 'Data is synced in real-time to geo-diverse object storage with strict immutability locks.' },
                  ].map(({ n, title, desc }) => (
                    <div key={n} style={{ display: 'flex', gap: 24 }}>
                      <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: '#7e22ce', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{n}</div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{title}</h4>
                        <p style={{ fontSize: 14, color: 'rgba(88,28,135,0.6)', margin: 0 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div className="dr-spin" style={{ width: 320, height: 320, borderRadius: '50%', border: '2px dashed #d8b4fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 256, height: 256, borderRadius: '50%', border: '2px solid #a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 192, height: 192, borderRadius: '50%', background: 'linear-gradient(135deg, #7e22ce, #ec4899)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i data-lucide="refresh-cw" style={{ color: '#fff', width: 80, height: 80 }} />
                    </div>
                  </div>
                </div>
                <div className="dr-glass" style={{ position: 'absolute', top: 0, left: 0, padding: '8px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>Storage Media: NVMe Flash & Immutable S3</div>
                <div className="dr-glass" style={{ position: 'absolute', bottom: 0, right: 0, padding: '8px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>Always 3 total copies</div>
                <div className="dr-glass" style={{ position: 'absolute', top: '50%', right: -16, padding: '8px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>Offsite: Cloud Vault</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="dr-section" style={{ background: '#1e1b4b', color: '#fff' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Outcome-Oriented Protection</h2>
            <p style={{ color: 'rgba(199,210,254,0.6)' }}>We don't just backup data; we restore business functions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {[
              { stat: 'L90d', label: 'Retention of last 90 Days of data (recommended)' },
              { stat: '100%', label: 'Ransomware Immunity with Object Lock' },
              { stat: '60%', label: 'Lower TCO vs. Secondary Sites' },
              { stat: '<15m', label: 'Average Recovery Point Objective window' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ padding: 32, borderRadius: 24, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>{stat}</div>
                <p style={{ color: 'rgba(199,210,254,0.8)', fontSize: 14, margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="dr-glass" style={{ marginTop: 80, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: 40, borderRadius: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
            <div style={{ maxWidth: 576 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Secure Your Tomorrow, Today.</h3>
              <p style={{ color: 'rgba(224,231,255,0.7)', margin: 0 }}>Our experts provide a 24/7 managed DRaaS response team that takes the burden off your IT staff during a crisis.</p>
            </div>
            <button onClick={() => window.open('https://calendly.com/itstusharpandey/30min', '_self')} style={{ background: '#fff', color: '#1e1b4b', padding: '20px 40px', borderRadius: 16, fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              Get a Free Risk Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', borderTop: '1px solid #f3e8ff', textAlign: 'center', fontSize: 14, color: 'rgba(88,28,135,0.4)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, alignItems: 'center' }}>
          <i data-lucide="twitter" />
          <i data-lucide="linkedin" />
          <i data-lucide="mail" />
          companyprofile@numeroinfo.asia
        </div>
        <p style={{ margin: 0 }}>© 2026 NUMERO INFO. Safeguarding businesses against the unpredictable.</p>
      </footer>
    </div>
  )
}
