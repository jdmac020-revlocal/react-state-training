import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from './useFetch';

describe('Fetch does what fetch does', () => {

    fetch.mockResponse(JSON.stringify(
        {
            "products": [{
            "id": 1,
            "category": "shoes",
            "image": "shoe1.jpg",
            "name": "Hiker",
            "price": 94.95,
            "skus": [
                { "sku": "17", "size": 7 },
                { "sku": "18", "size": 8 }
            ],
            "description": "This rugged boot will get you up the mountain safely."
            }]
        }
    ));

    beforeEach(() => {
        fetch.resetMocks();
    });

    // This test fails because loading is never called
    // using the "setX" functions inside the hook appear to not work in the test
    // unsure if it's because we're looking at an async problem or something
    // related to the update happening outside an "act" func
    it('throws an error', async () => {
        const { result } = renderHook(() => useFetch("test"));

        expect(result.current.loading).toBe(false);
        expect(result.current.error).not.toBe(null);
    })

    // this stuff works, because of missing URL?
    // Error thatTypeError: Unable to parse input as string or Request
    it('has no starting URL', async () => {
        const {
            result
        } = renderHook(() => useFetch());
        
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);
    })

    // Most examples of testing hooks are using a setX function being returned
    // alongside the values

    // It's possible this hook pattern isn't inherently testable
    // Curious to find out if peeling this apart some might be helpful
});