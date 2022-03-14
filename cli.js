#!/usr/bin/env node
import fs from 'node:fs';
import process from 'node:process';
import meow from 'meow';
import chalk from 'chalk';

import starumlWatermarkRemover from './index.js';

const cli = meow(
	`
  Usage
    $ staruml-watermark-remover <input>

  Options
    --output, -o    Output file path
    --help, -h      Show help
    --version, -v   Show version

  Examples
    $ staruml-watermark-remover input.svg
    $ staruml-watermark-remover input.svg -o output.svg
`,
	{
		importMeta: import.meta,
		flags: {
			output: {
				type: 'string',
				alias: 'o',
			},
			help: {
				type: 'boolean',
				alias: 'h',
			},
			version: {
				type: 'boolean',
				alias: 'v',
			},
		},
	},
);

try {
	const input = cli.input[0];

	if (!input) {
		throw new Error('Input file is required');
	}

	const files = fs.lstatSync(input).isDirectory() ? fs.readdirSync(input).map(file => `${input}/${file}`) : [input];

	for (const file of files) {
		if (file.endsWith('.svg')) {
			const output = cli.flags.output ? cli.flags.output : file.replace(/\.svg$/, '.no-watermark.svg');
			const svg = fs.readFileSync(file, 'utf8');
			const updatedSvg = starumlWatermarkRemover(svg);

			fs.writeFileSync(output, updatedSvg);
		}
	}
} catch (error) {
	console.error(chalk.red(error.message));
	process.exit(1);
}
