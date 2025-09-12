import './App.css'
import Header from './assets/components/Header.jsx'
import Entry from './assets/components/Entry.jsx'
import data from './assets/components/data.js'
import Footer from './assets/components/Footer.jsx'

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry 
      key={entry.id}
      entry = {entry}
      /*
        img={{
          src: entry.img.src,
          alt: entry.img.alt
        }}
        dates= {entry.dates}
        title= {entry.title}
        googleMapsLink= {entry.googleMapsLink}
        country= {entry.country}
        text= {entry.text}
      */
      />
    )
  })

  return (
    <>

    <Header />
    {entryElements}
    <Footer />
    </>
  )
}

export default App
