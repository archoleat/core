# Core

![Test](https://img.shields.io/github/actions/workflow/status/archoleat/core/mocha.yaml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/core/commitlint.yaml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/core/codeql.yaml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/core/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/core/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/core/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/core/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Info](#info)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)

## Info

If you want to learn more about the core capability for **Sammler**
then you can read the
[**Sammler Wiki**](https://github.com/archoleat/sammler/wiki).

## Troubleshooting

If you are using **npm**, you may get a `peerDependency` error
that is related to these plugins:

-   `typescript-eslint/eslint-plugin`.
-   `typescript-eslint/parser`.

To fix this you can switch to **pnpm**(recommended) or install version `6.0.0`:

```shell
typescript-eslint/eslint-plugin@6.0.0
```

```shell
typescript-eslint/parser@6.0.0
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**Apache 2.0 license**](LICENSE).
