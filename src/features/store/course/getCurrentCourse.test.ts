import courseReducer from "./index";
import {getCurrentCourse, initialState} from "./slice";



describe('when called', () => {
    
    it('if pending state should has status loading', () => {
        const newState = courseReducer(initialState, getCurrentCourse.pending(''))
        expect(newState).toEqual({...initialState, status: 'loading'})

    })
    it('if fulfilled state should has status success, course should have new value', () => {
        const newState = courseReducer(initialState, getCurrentCourse.fulfilled({currentCourse: 42}, ''))
        expect(newState).toEqual({...initialState, currentCourse: 42,  status: 'success'})
    })
    it('if rejected state should has status error, error should have value', () => {
        const newState = courseReducer(initialState, getCurrentCourse.rejected({message: 'get current course error', name: ''}, ''))
        expect(newState).toEqual({...initialState, error: 'get current course error' ,  status: 'error'})
    })
})


