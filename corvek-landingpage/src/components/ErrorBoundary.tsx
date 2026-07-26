import { Component, type ErrorInfo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="min-h-screen flex items-center justify-center bg-background p-8"
        >
          <ErrorFallback />
        </div>
      )
    }

    return this.props.children
  }
}

function ErrorFallback() {
  const { t } = useTranslation()

  return (
    <div className="text-center max-w-md">
      <Icon name="error_outline" size={48} className="text-primary mb-4" />
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-2">
        {t('common.errorBoundary.title')}
      </h1>
      <p className="text-on-surface-variant mb-6">
        {t('common.errorBoundary.description')}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary-text text-white px-6 py-3 rounded font-mono text-sm font-semibold tracking-wider hover:bg-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {t('common.errorBoundary.button')}
      </button>
    </div>
  )
}

export const ErrorBoundary = ErrorBoundaryClass
