import { BrowserRouter } from 'react-router'
import { AppRouter } from './router/AppRouter'
import { LanguageProvider } from './context/LanguageContext'

export const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  )
}
