import type {Route} from "./+types/home"
import * as React from "react"

export async function loader({}: Route.LoaderArgs) {
    return {msg: "Hello World!"}
}

export default function MyComponent({loaderData}: Route.ComponentProps) {
    let {msg} = loaderData;

    return (
        <div>msg</div>
    )
}
