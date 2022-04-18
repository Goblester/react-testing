import {useAppSelector} from "../../../features/store";
import {courseActions, courseSelectors} from "../../../features/store/course";
import React from "react";
import {useDispatch} from "react-redux";


export const RefreshCourse: React.FC = () => {
    const dispatch = useDispatch()
    const status = useAppSelector(courseSelectors.selectStatus)
    const error = useAppSelector(courseSelectors.selectError)

    const isLoading = status === 'loading'

    const onButtonClick = () => dispatch(courseActions.getCurrentCourse())


    return <>
        <button onClick={onButtonClick}>{isLoading ? 'Обновляем курс...' : 'Обновить курс'}</button>
        {error && <p>{error}</p>}
    </>
}