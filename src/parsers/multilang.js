
import mec from 'multilang-extract-comments';

// Generic parser, depends on multiline-extract-comments and returns a simplified
// version of the comments data structure

export default function multilangParser(str, filename) {
	let mecBlocks = mec(str, {filename: filename || 'leafdoc_tmp.js'});
	let blocks = Object.values(mecBlocks).map(function (mecBlock) {
		return mecBlock.content.trim();
	}).filter(function (block) {
		return block && block !== '';
	});

	return blocks;
}

