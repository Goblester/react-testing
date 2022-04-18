import {useAppSelector} from "../../features/store";
import {courseSelectors} from "../../features/store/course";
import S from './CurrentCourse.module.css'

const CurrentCourse = () => {
    const currentCourse = useAppSelector(courseSelectors.selectCurrentCourse)

    return (
        <div className={''}>
            Текущий курс рубля {currentCourse}₽
        </div>
    )
}

export default CurrentCourse