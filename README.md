Full sync loading example:

```javascript
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

```

Full async loading example:

```javascript
import type {Route} from "./+types/home";
import * as React from "react";
import {Await} from "react-router";

export async function loader({}: Route.LoaderArgs) {
    const msgPromise = new Promise((res) =>
        setTimeout(() => res("Hello World!"), 10_000)
    );

    return {msg: msgPromise};
}

export default function MyComponent({loaderData}: Route.ComponentProps) {
    let {msg} = loaderData;

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Await resolve={msg}>
                    {(value) => <h3>{value}</h3>}
                </Await>
            </React.Suspense>
        </div>
    );
}
```
