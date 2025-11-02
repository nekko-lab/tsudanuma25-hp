export const Footer = () => {
  return (
    <footer className="w-full py-6 mt-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
        <span className="text-sm text-gray-600">Powered by </span>
        <img 
          src="/nc.png" 
          alt="Nekko Cloud" 
          className="h-6 w-auto"
        />
      </div>
    </footer>
  )
}
