import './App.css'
import { ViewAbout } from './components/About'
import { Access } from './components/Access'
import { AnimatedHero } from './components/Image'
import { DJLiveLink } from './components/DJlink'
import { SNSLink } from './components/Link'
import { Notice } from './components/Notice'
import { TimeTable } from './components/Time'
import { Footer } from './components/Footer'
function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #cffafe 0%, #cffafe 30%, #fef3c7 33%, #fef3c7 63%, #fce7f3 66%, #fce7f3 100%)'
    }}>

      {/* 画像エリア */}
      <div className='m-0 p-0 space-y-32' >
        <AnimatedHero
          mobileImg="/251103_千葉工大_RGB_背景全て無し.png"
          desktopImg='/251103_千葉工大_RGB_背景全て無し.png'
          alt="ボカロライブ"
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 flex flex-col  items-center justify-center space-y-24 mt-32'>
        <ViewAbout />
        <Access />
        <TimeTable />
        <Notice />
        <DJLiveLink />
        <SNSLink />
      </div>
      <Footer />
    </div>
  )
}

export default App