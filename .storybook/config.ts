// @ts-nocheck
import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import '@storybook/addon-console';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { muiTheme } from 'storybook-addon-material-ui';
import { withGQLProvider } from '@graphql-mock'
import { snackbarDecorator } from '@utils'
import intl from '../intl'
import { theme } from '../theme'

const getMessages = (locale) => intl[locale];

setIntlConfig({
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    getMessages
});
addDecorator(snackbarDecorator)
addDecorator(withGQLProvider);
addDecorator(withIntl);
addDecorator(muiTheme([theme]))
addParameters({
  options: {
    theme: themes.dark,
  },
});
addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true},
    { name: 'dark', value: '#121212' },
  ],
});

// automatically import all files ending in *.stories.js
configure(require.context('../components/', true, /stories\.tsx$/), module);
