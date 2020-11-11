import CallToAction, { CallToActionProps, LinkButton } from '../components/CallToAction';
import { shallow } from 'enzyme'; 
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../lib/serializers';

// mock data from Sanity
const data: CallToActionProps = {
  headline: [
  {
    "_key": "b430034155f2",
    "_type": "block",
    "children": [
      {
        "_key": "5a5da3ebcaac",
        "_type": "span",
        "marks": [],
        "text": "HEADLINE Line 1"
      }
    ],
    "markDefs": [],
    "style": "largetext"
  },
  {
    "_key": "14f2a8fdfa7f",
    "_type": "block",
    "children": [
      {
        "_key": "ac38d12bcbdc",
        "_type": "span",
        "marks": [],
        "text": "Headline Line 2"
      }
    ],
    "markDefs": [],
    "style": "largetext"
  }
],
  buttonOneText: 'Button one',
  buttonOneLink: '/button-one',
  buttonTwoText: 'Button Two',
  buttonTwoLink: '/button-two'
}

describe('Call to Action <Button />', () => {
  it('renders correctly', () => {
    // Shallow render the component with two sets of props
    const wrapperOne = shallow(<LinkButton text={data.buttonOneText} href={data.buttonOneLink} /> );
    const wrapperTwo = shallow(<LinkButton text={data.buttonTwoText} href={data.buttonTwoLink} /> );
    
    // next/link components
    const LinkOne = wrapperOne.find('Link');
    const LinkTwo = wrapperTwo.find('Link');

    // buttons
    const ButtonOne = wrapperOne.find('button');    
    const ButtonTwo = wrapperTwo.find('button');   

    // check link props
    expect(LinkOne.props().href).toEqual(data.buttonOneLink);
    expect(LinkTwo.props().href).toEqual(data.buttonTwoLink);

    // check button props
    expect(ButtonOne.text()).toEqual(data.buttonOneText);
    expect(ButtonTwo.text()).toEqual(data.buttonTwoText);
    
  }) 
})

describe('Call to Action <CallToAction />', () => {
  const wrapper = shallow(<CallToAction { ...data } />);

  it('renders the headline correctly', () => {
    // sanity block content component
    expect(wrapper.contains([<BlockContent blocks={data.headline} serializers={serializers} />])).toEqual(true);
  })

  it('renders buttons correctly', () => {
    // buttons outer div
    const buttonsGroup = wrapper.find('div.buttons');

    // should have 2 buttons in it
    expect(buttonsGroup.children()).toHaveLength(2);

    // check the props
    expect(buttonsGroup.contains([<LinkButton text={data.buttonOneText} href={data.buttonOneLink} />])).toEqual(true);
    expect(buttonsGroup.contains([<LinkButton text={data.buttonTwoText} href={data.buttonOneLink} />])).toEqual(false);        
  })
})