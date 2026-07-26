import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Values } from './components/Values'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { ErrorBoundary } from './components/ErrorBoundary'

function LanguageSync() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return null
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageSync />
      <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-primary selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main" className="grow">
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
    </ErrorBoundary>
  )
}

export default App
