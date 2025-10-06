import { Title } from "./items/Title";

export const Access = () => {
    return(
        <div className="text-center">
            <Title
            title="アクセス"
            />
            <div className="flex justify-end ">
                <p className="mx-30">千葉工業大学津田沼キャンパス</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.453582345582!2d140.020991110342!3d35.68916802651973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602280271c38ab81%3A0x9b26ed71e15bb456!2z5Y2D6JGJ5bel5qWt5aSn5a2mIOa0peeUsOayvOOCreODo-ODs-ODkeOCuQ!5e1!3m2!1sja!2sjp!4v1759743231824!5m2!1sja!2sjp" width="400" height="300"   loading="lazy" ></iframe>
            </div>
        </div>
    )
}