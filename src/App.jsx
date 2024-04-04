import { react } from 'react'

import { Header, Hint, Box, Keyboard } from "./components/" 

function App() {

  return (
    <>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <Header/>
        <Hint/>
        <Box/>
        <Keyboard/>
      </div>
    </>
  )
}

export default App
