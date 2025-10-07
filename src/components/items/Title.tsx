export const Title = ({title,subtitle,delay}:{
    title: string;
    subtitle?: string;
    delay: boolean
}) => {
   return(
    <div className="max-w-5xl mx-auto">
        {/* タイトル - 下から飛び出す*/}
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            delay
              ? 'opacity-100  translate-y-0'
              : 'opacity-0  translate-y-12'
          }`}
        >
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-xl text-center text-gray-600">{subtitle}</p>
        </div>
    </div>
   )
};