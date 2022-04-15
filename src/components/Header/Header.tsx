import S from './Header.module.css';
import CurrentCourse from "./CurrentCourse";


const Header = () => {

    return <header className={''}>
        Текущий курс рубля <CurrentCourse/>
    </header>
}

export default Header