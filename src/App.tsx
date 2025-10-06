import './App.css'
import { Access } from './components/Access'
import Header from './components/Header'
import { AnimatedHero } from './components/Image'
function App() {
  return (
    <div>
      <Header />
      
      {/* 画像エリア */}
      <div className='bg-cyan-400'>
        <AnimatedHero
          src="/250831_千葉工大_RGB.jpg"
          alt="ボカロライブ"
          title="Miku's Origin Live 2025"
          subtitle="Fire!"
        />
      </div>

      {/* グラデーションエリア - インラインスタイルで試す */}
      <div 
        className='min-h-screen py-16'
        style={{
          background: 'linear-gradient(135deg, #cffafe 0%, #cffafe 30%, #fef3c7 33%, #fef3c7 63%, #fce7f3 66%, #fce7f3 100%)'
        }}
      >
        <div className='max-w-7xl mx-auto px-4 flex items-center justify-center '>
          <Access/>
        </div>
      </div>
    </div>
  )
}

export default App