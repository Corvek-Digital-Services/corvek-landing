import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Logo } from './components/Logo'
import { Button } from './components/Button'

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-electric-indigo selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section
          id="services"
          className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-electric-indigo font-bold mb-3 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-on-surface">
              High-Precision Services
            </h2>
            <div className="w-12 h-[2px] bg-electric-indigo mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="geometric-border p-8 clip-diagonal flex flex-col items-start space-y-4 rounded-sm">
              <div className="flex items-center justify-center p-3 bg-electric-indigo/10 text-electric-indigo rounded-sm border border-electric-indigo/20">
                <span className="material-symbols-outlined text-2xl">
                  developer_board
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-on-surface">
                Architecture Design
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Engineering high-performance, scalable cloud infrastructures
                tailored to support demanding transactional systems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="geometric-border p-8 clip-diagonal flex flex-col items-start space-y-4 rounded-sm">
              <div className="flex items-center justify-center p-3 bg-electric-indigo/10 text-electric-indigo rounded-sm border border-electric-indigo/20">
                <span className="material-symbols-outlined text-2xl">
                  terminal
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-on-surface">
                Agile Development
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Building custom web solutions and API integrations with modern
                stacks, emphasizing speed, type safety, and maintainability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="geometric-border p-8 clip-diagonal flex flex-col items-start space-y-4 rounded-sm">
              <div className="flex items-center justify-center p-3 bg-electric-indigo/10 text-electric-indigo rounded-sm border border-electric-indigo/20">
                <span className="material-symbols-outlined text-2xl">
                  security
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-on-surface">
                Security & DevSecOps
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Enforcing strict auditing guidelines, continuous threat
                modeling, and fully automated deployment workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/CTA section */}
        <section
          id="contact"
          className="py-20 bg-noche-purpura/20 border-t border-outline-variant/10"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-on-surface">
                Ready to elevate your IT operations?
              </h2>
              <p className="text-sm text-on-surface-variant max-w-xl">
                Connect with our engineering specialists to outline a customized
                architecture plan for your business needs.
              </p>
            </div>
            <Button
              variant="primary"
              clipStyle="diagonal"
              className="flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <span className="material-symbols-outlined text-sm font-semibold">
                mail
              </span>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant/10 bg-background py-8">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Logo className="text-electric-indigo" size={24} />
            <span className="font-sans text-sm font-bold text-on-surface">
              Corvek Digital Services
            </span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant/70">
            © {new Date().getFullYear()} Corvek. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
