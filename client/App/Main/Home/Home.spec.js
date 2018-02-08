import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  const component = renderer.create(<Home />);
  const componentJson = component.toJSON();

  test('is home great', () => {
    expect(componentJson.type).toBe('div');
    expect(componentJson.children.length).toBe(1);
    expect(componentJson.children[0]).toBe('HELLO WORLD');
  })
});