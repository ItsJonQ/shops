import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

addDecorator(withKnobs);
