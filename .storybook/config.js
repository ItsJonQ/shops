import { configure } from '@storybook/react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
