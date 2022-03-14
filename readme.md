# staruml-watermark-remover

[![status](https://github.com/abranhe/staruml-watermark-remover/workflows/build/badge.svg)](https://github.com/abranhe/staruml-watermark-remover/actions)
[![npm](https://img.shields.io/npm/v/staruml-watermark-remover)](https://npmjs.org/staruml-watermark-remover)
[![license](https://img.shields.io/npm/l/staruml-watermark-remover)](https://npmjs.org/staruml-watermark-remover)

> Remove StarUML watermark from your `svg` diagrams.

## Installation

```bash
yarn add staruml-watermark-remover
```

Otherwise install it globally if you want to use it as a CLI tool.

## Usage

```js
import fs from 'fs';
import starumlWatermarkRemover from 'staruml-watermark-remover';

const svg = fs.readFileSync('input.svg', 'utf8');

fs.writeFileSync('output.svg', starumlWatermarkRemover(svg));
```

## CLI

The `staruml-watermark-remover` has the alias `swr`.

```bash
$ staruml-watermark-remover input.svg -o output.svg
```

### Options

- `-p, --png`: Output as `png` file.
- `-o, --output <path>`: Output file path.
- `-h, --help`: Show help.
- `-v, --version`: Show version.

## License

MIT © [Abraham Hernandez](https://abranhe.com)
