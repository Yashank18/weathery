
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardArea from './Container/CardArea/CardArea';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('Weather Cards Gives an Div Container',()=>{
  const renderer = new ShallowRenderer();
   renderer.render(<CardArea/>);
   const Button= renderer.getRenderOutput();
   expect(Button.type).toBe('div');
});