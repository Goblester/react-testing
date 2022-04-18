import {useAppSelector} from "../../../features/store";
import {courseSelectors} from "../../../features/store/course";


export const RequestCourseButton = () => {

    const status = useAppSelector(courseSelectors.selectStatus)
    const error = useAppSelector(courseSelectors.selectError)

    const isLoading = status === 'loading'

    return <>
        <button>{isLoading ? 'Обновляем курс...' : 'Обновить курс'}</button>
        {error && <p>{error}</p>}
    </>
}