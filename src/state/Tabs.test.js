import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json'

describe('Tabs component', ()=>{
    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];
    //smoke test
    it.skip('renders without errors', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    //snapshot tests
    it.skip('renders the first tab by default', ()=>{
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    }) 
    it.skip('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    }) 
    it.skip('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        console.log(wrapper.find('button').at(1).debug())
      })
})