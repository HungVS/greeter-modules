import { Action } from "../Action";

export class Greeter implements Action {
    perform(message?: string): void {
        console.log(message)
    }
}