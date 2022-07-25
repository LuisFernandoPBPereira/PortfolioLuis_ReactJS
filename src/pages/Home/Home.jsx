import * as S from "./styled.js"
import Introduction from "../../Components/Home/Introduction/Introduction.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

export default function Home(){
    return(
        <S.Home>
            <div className="master">
                <Navbar/>
                <Introduction/>
            </div>
        </S.Home>
    );
}