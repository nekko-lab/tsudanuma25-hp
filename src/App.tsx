import './App.css'
import { ViewAbout } from './components/About'
import { Access } from './components/Access'
import Header from './components/Header'
import { AnimatedHero } from './components/Image'
function App() {
  return (
    <div style={{
          background: 'linear-gradient(135deg, #cffafe 0%, #cffafe 30%, #fef3c7 33%, #fef3c7 63%, #fce7f3 66%, #fce7f3 100%)'
        }}>
      <Header />
      
      {/* 画像エリア */}
      <div className='m-0 p-0' >
        <AnimatedHero
          mobileImg="/250831_千葉工大_RGB.jpg"
          desktopImg='/津田沼祭横長.jpg'
          alt="ボカロライブ"
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 flex flex-col  items-center justify-center '>
        <ViewAbout/>
        <Access/>
      </div>
    </div>
  )
}

export default App