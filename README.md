# Alpine Registry

This is an example registry built using `shadcn/ui`.

## Usage

To install components from the alpine registry, you can use the following remote registries config in your `components.json` file:

```json
{
  "registries": {
    "@alpine": "https://alpine-registry.vercel.app/r/{name}.json"
  }
}
```

You can then add items using the following command:

```bash
npx shadcn@latest add @alpine/login-form
```

To install the `alpine` design system, you can use the following command:

```bash
npx shadcn@beta add @alpine/design-system
```

## Authentication

To see examples of how to use authentication with the registry, see the [API Routes](./app/api/registry/README.md) documentation.

## Development

Clone the repository, clone the .env.example and rename it to .env.local, then install the dependencies and run the development server.

```bash
pnpm install
pnpm dev
```

The development server will be available at `http://localhost:3003`.
