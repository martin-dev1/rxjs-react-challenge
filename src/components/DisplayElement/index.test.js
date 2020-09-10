import React from 'react';
import { render } from '@testing-library/react';
import DisplayElement from './index';

test('renders DisplayElement component with custom props', () => {
  // generate some custom props
  const props = { name: 'name', val: 'value', children: 'child' };

  // boilerplate code
  const instance = render(<DisplayElement {...props} />).root;

  // get element by component name
  const element = instance.findByType('div');

  // assert "children" to match passed
  expect(element.props.children).toEqual(children);
});
