module.exports = {
  client: {
    addTypename: true,
    excludes: ['**/node_modules/**'],
    includes: ['./**/*.{ts, tsx}'],
    service: {
      name: 'treelab-api',
      url: 'http://192.168.1.26:5006/graphql',
    },
    tagName: 'gql',
    target: 'typescript',
  },
};
