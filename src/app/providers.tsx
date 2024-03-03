'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/lib/redux/store'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <ReduxProvider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ReduxProvider>
  )
}