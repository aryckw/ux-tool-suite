import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, defaultSystem, Spinner, Center } from '@chakra-ui/react'

const DirectoryApp = React.lazy(() => import('directory/App'))

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Suspense fallback={<Center h="100vh"><Spinner size="xl" /></Center>}>
          <Routes>
            <Route path="/*" element={<DirectoryApp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  )
}
