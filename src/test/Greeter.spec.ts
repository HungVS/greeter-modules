import { Greeter } from "../impl/Greeter"

describe("Test Greeter", () => {
    it("should print the input message out the console", () => {
        console.log = jest.fn()
        const greeter = new Greeter()
        const message = "Hello, World!"
        expect(greeter.perform(message)).toHaveBeenCalledWith(message)
    })
})