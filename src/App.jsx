import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import TreeInteraction from './treeInteraction.jsx'
import Leads from './leads.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Header />
        <main className="w-full relative min-h-screen bg-[#F7F2E2]">
          <section className="w-full">
            <div className="mx-auto max-w-[1300px] px-4">
              <img src="public/cloudDecorate.png" alt="Decorative clouds" className="mx-auto" />
              <h1 className="pb-25 text-center text-5xl font-serif font-extrabold text-gray-800">Tree of Health</h1>
              <TreeInteraction />
            </div>
          </section>
          <section className="w-full bg-gradient-to-b from-transparent to-[#FFE6BA]">
            <div className="mx-auto max-w-[1300px]">
              <div
                className="
                w-full bg-[#4D1D00] text-[#FFE6BA]
                text-center font-serif font-extrabold
                text-2xl md:text-3xl leading-tight
                py-3 md:py-6
                border-y-4 border-[#F7F2E2]
              "
              >
                Leads into the <span className="uppercase">ESSENCE</span> of Health
              </div>
            </div>
            <div className="h-auto">
              <Leads />
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
}

export default App
