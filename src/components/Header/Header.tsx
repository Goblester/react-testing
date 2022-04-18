import S from './Header.module.css';
import CurrentCourse from "./CurrentCourse";
import {RefreshCourse} from "./RequestCourseButton/RefreshCourse";


const Header = () => {

    return <header className={''}>
        <CurrentCourse/>
        <RefreshCourse/>
    </header>
}

export default Header