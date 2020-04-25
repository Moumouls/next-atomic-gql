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
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true
        }
      },
    ],
    resolve: {
      alias: {
        '@graphql': `${__dirname}/../graphql/generated.tsx`,
        '@graphql-mock': `${__dirname}/../graphql/mock/provider.tsx`,
        '@utils': `${__dirname}/../utils/index.tsx`,
        '@theme': `${__dirname}/../theme.ts`,
		    '@organisms': `${__dirname}/../components/organisms/`,
		    '@molecules': `${__dirname}/../components/molecules/`,
	    	'@templates': `${__dirname}/../components/templates/`,
		    '@atoms': `${__dirname}/../components/atoms/`
      }
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
