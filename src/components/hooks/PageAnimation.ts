import { useEffect, useState } from "react";


export const usePageAnimation = (delay: number=200) =>{
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoaded(true);
        }, 200);
    
        return () => clearTimeout(timer);
      }, [delay]);
      return isLoaded
}
