import fs from 'node:fs';
import starumlWatermarkRemover from './index.js';

test('Watermark Remover', () => {
	const original = fs.readFileSync('fixtures/diagram.svg', 'utf8');
	const expected = fs.readFileSync('fixtures/diagram.no-watermark.svg', 'utf8');

	expect(starumlWatermarkRemover(original)).toBe(expected);
});
