import { stripIgnoredCharacters } from 'graphql';

export default (source) => {
	const imports = source.match(/#\s*import.*\r?\n/g);

	if (imports) {
		const code = [
			'const parts = [];',
			`parts.push(${JSON.stringify(stripIgnoredCharacters(source.replace(/^#\s*import.*$/, '')))});`,
			imports
				.map(input => input.trim())
				.map(line => line.replace(/#\s*import\s*"(.*)"/, 'parts.push(require("$1").default);'))
				.join(''),
			'export default parts.join(\'\');',
		];

		return code.join('');
	}

	return `export default ${JSON.stringify(stripIgnoredCharacters(source))}`;
};
