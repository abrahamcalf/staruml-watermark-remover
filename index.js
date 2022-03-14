import get from 'lodash.get';
import update from 'immutability-helper';
import {parse} from 'svg-parser';
import {toHtml} from 'hast-util-to-html';

const removeUnregisterdText = svg => {
	const children = get(svg, 'children[0].children[1].children', []);

	const filteredChildren = children.filter(child => {
		if (child.tagName === 'text') {
			return !child.children[0].value.includes('UNREGISTERED');
		}

		return true;
	});

	return update(svg, {
		children: {
			0: {
				children: {
					1: {
						children: {
							$set: filteredChildren,
						},
					},
				},
			},
		},
	});
};

export default function removeWatermark(svgString) {
	const parsedSvg = parse(svgString);

	const filteredSvgJson = removeUnregisterdText(parsedSvg);
	return toHtml(filteredSvgJson);
}
