import {act, renderHook} from "@testing-library/react-hooks";
import {useKeyboard} from "./useKeyboard";

const dispatchKeyboardEvent = (eventDict) => {
    document.dispatchEvent(new KeyboardEvent('keydown', eventDict));
}

describe("useKeyboard custom hook", () => {
    const initialPhrase = "mod g";
    const secondPhrase = "no mod g";
    let props = [
        {
            key: "g", mods: ["ctrl"], action: (e) => {
                e.preventDefault();
                console.log(initialPhrase);
            }
        },
        {
            key: "g", action: (e) => {
                e.preventDefault();
                console.log(secondPhrase);
            }
        }
    ]

    const logSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
        renderHook(() => useKeyboard(props));
        logSpy.mockClear();
    })

    test('should not be called', () => {
        act(() => {
            dispatchKeyboardEvent({
                key: "f",
                ctrlKey: false,
            })
        })

        expect(logSpy).not.toHaveBeenCalled();
    })

    test('"mod g" should be called in the console', () => {
        act(() => {
            dispatchKeyboardEvent({
                key: "g",
                ctrlKey: true,
            })
        })

        expect(logSpy).toHaveBeenCalledWith(initialPhrase);
    })

    test('"no mod g" should be called in the console', () => {
        act(() => {
            dispatchKeyboardEvent({
                key: "g",
                ctrlKey: false,
            })
        })

        expect(logSpy).toHaveBeenCalledWith(secondPhrase);
    })
})