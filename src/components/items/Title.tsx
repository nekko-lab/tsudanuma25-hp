export const Title = ({title,subtitle}:{
    title: string;
    subtitle?: string;
}) => {
    return(
        <div className="">
            <div className="text-5xl text-center">
                <h2>{title}</h2>
            </div>
            {subtitle &&(
                <p>{subtitle}</p>
            )}
        </div>
    );
};