import {CourseApiDataType} from "../api";


const getRubCourse = (data: CourseApiDataType): number => {
    return data?.usd['rub'] || 0
}

export default getRubCourse