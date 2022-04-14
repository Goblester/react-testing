import {useAppSelector} from "../../features/store";
import {courseSelectors} from "../../features/store/course";
import S from './CurrentCourse.module.css'

const CurrentCourse = () => {
    const currentCourse = useAppSelector(courseSelectors.selectCurrentCourse)

    return (
        <div className={''}>
            {currentCourse}
        </div>
    )
}

export default CurrentCourse