import {act, renderHook} from '@testing-library/react-hooks'
import useCounter from './useCounter'

describe("useCounter custom hook", () => {
    test('should use counter', () => {
        const {result} = renderHook(() => useCounter());

        expect(result.current.count).toBe(0);
        expect(typeof result.current.increment).toBe('function');
    })

    test("should increment", () => {
        const {result} = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        })

        expect(result.current.count).toBe(1);
    })
})