import CallToAction, { CallToActionProps, LinkButton } from '../components/CallToAction';
import { shallow } from 'enzyme'; 

// mock data
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
        "text": "WHICH CLASSES"
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
        "text": "ARE YOU INTERESTED IN?"
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
    
    const LinkOne = wrapperOne.find('Link');
    const LinkTwo = wrapperTwo.find('Link');
    const ButtonOne = wrapperOne.find('button');    
    const ButtonTwo = wrapperTwo.find('button');   

    expect(LinkOne.props().href).toEqual(data.buttonOneLink);
    expect(LinkTwo.props().href).toEqual(data.buttonTwoLink);
    expect(ButtonOne.text()).toEqual(data.buttonOneText);
    expect(ButtonTwo.text()).toEqual(data.buttonTwoText);
    
  }) 
})

describe('Call to Action <CallToActionSection />', () => {



  it('renders correctly', () => {
    const wrapper = shallow(<CallToAction { ...data } />);

    const buttons = wrapper.find('div.buttons').children();

    expect(buttons).toHaveLength(2);
    expect(buttons.get(0).props.text).toEqual(data.buttonOneText);
    expect(buttons.get(0).props.href).toEqual(data.buttonOneLink);
    expect(buttons.get(1).props.text).toEqual(data.buttonTwoText);
    expect(buttons.get(1).props.href).toEqual(data.buttonTwoLink);
        
  })
})