import {selectRandomQuote} from "./selectRandomQuote";
import {quotes} from "./quotes";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.42);
})

afterEach(() => {
    jest.resetAllMocks()
})


describe('when called with a quotes list', () => {
    it('should return the second (random) quote', () => {
        const result = selectRandomQuote(quotes)
        expect(result).toEqual(quotes[1])
    })
})


export default {}