import {fetchCourse} from "./index";


beforeEach(() => {
    //@ts-ignore
    global.fetch = jest.fn(() => {
        return {
            json: async () => 'Test Response'
        }
    })
})

afterEach(() => {
    jest.clearAllMocks()
})

describe('when called', () => {
    it('should call correct url', async () => {
        await fetchCourse()
        expect(global.fetch).toHaveBeenCalledWith('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    })
    it('should return json', async () => {
        const response = await fetchCourse()
        expect(response).toEqual('Test Response')
    })
})