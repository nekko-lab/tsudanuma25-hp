import './App.css'
import { ViewAbout } from './components/About'
import { Access } from './components/Access'
import Header from './components/Header'
import { AnimatedHero } from './components/Image'
import { SNSLink } from './components/Link'
import { Notice } from './components/Notice'
import { TimeTable } from './components/Time'
function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #cffafe 0%, #cffafe 30%, #fef3c7 33%, #fef3c7 63%, #fce7f3 66%, #fce7f3 100%)'
    }}>
      <Header />

      {/* 画像エリア */}
      <div className='m-0 p-0 space-y-32' >
        <AnimatedHero
          mobileImg="/メインイメージタテ.png"
          desktopImg='/メインイメージヨコ.png'
          alt="ボカロライブ"
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 flex flex-col  items-center justify-center space-y-24 mt-32'>
        <ViewAbout />
        <Access />
        <TimeTable />
        <Notice />
        <SNSLink />
      </div>
    </div>
  )
}

export default App