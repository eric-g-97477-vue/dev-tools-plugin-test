import { setup, type Preview } from '@storybook/vue3';
import { createPinia } from 'pinia';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

setup((app) => {
	//app.use(createPinia());
});