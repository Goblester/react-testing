import S from './Header.module.css';
import CurrentCourse from "./CurrentCourse";
import {RequestCourseButton} from "./RequestCourseButton/RequestCourseButton";


const Header = () => {

    return <header className={''}>
        <CurrentCourse/>
        <RequestCourseButton/>
    </header>
}

export default Header