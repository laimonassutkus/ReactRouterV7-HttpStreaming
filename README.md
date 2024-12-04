Return promise in loader:

```javascript
export async function loader({}: Route.LoaderArgs) {
    const msgPromise = new Promise((res) =>
        setTimeout(() => res("Hello World!"), 6_000)
    );

    return {msg: msgPromise};
}
```

Streaming with Await / Suspense:

```javascript
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