import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { LanguageProvider } from './context/LanguageContext'

export const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/portfolio">
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  )
}
