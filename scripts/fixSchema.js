const { readFileSync, writeFileSync } = require('fs')

const file = readFileSync('graphql/cloud-schema.graphql', 'utf-8')
	.replace(/"""The Upload scalar type/g, '')
	.replace(/`/g, '')

writeFileSync('graphql/cloud-schema.graphql', file)
writeFileSync('graphql/cloud-schema.ts', `export default \`${file}\`\n`)

const file2 = readFileSync('graphql/local-schema.graphql', 'utf-8')
writeFileSync('graphql/local-schema.ts', `export default \`${file2}\`\n`)
