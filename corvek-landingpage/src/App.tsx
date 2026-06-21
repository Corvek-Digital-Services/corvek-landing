import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Values } from './components/Values'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-primary selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Values Section */}
        <Values />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
