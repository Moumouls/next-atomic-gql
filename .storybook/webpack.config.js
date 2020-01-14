module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
    resolve: {
      alias: {
        '@graphql': `${__dirname}/../graphql/generated.tsx`,
        '@graphql-mock': `${__dirname}/../graphql/mock/provider.tsx`,
        '@utils': `${__dirname}/../utils/index.tsx`
      }
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
