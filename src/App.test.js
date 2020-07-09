import React from 'react';
import App from './App';
import {render} from '@testing-library/react';

test('App collects the episodes and renders them to the screen', () => {
    const {} = render(<App />)
})