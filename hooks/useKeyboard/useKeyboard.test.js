import {renderHook} from "@testing-library/react-hooks";
import {useKeyboard} from "./useKeyboard";

describe("useKeyboard custom hook", () => {
    const initialProps = [{
        key: "f", mods: ["ctrl"], action: (e) => {
            e.preventDefault();
            document.querySelector("#filter-searchbar").focus();
        }
    }]


    test('should be consumable', () => {
        const {result} = renderHook(() => useKeyboard(initialProps));

        expect(typeof result.current).toBe('function');
    })
    //
    // test("should increment", () => {
    //     const {result} = renderHook(() => useCounter());
    //
    //     act(() => {
    //         result.current.increment();
    //     })
    //
    //     expect(result.current.count).toBe(1);
    // })
})