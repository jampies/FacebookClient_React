import { shallow } from 'enzyme';
import assert from 'assert';
import Post from './Post';
import React from 'react';

const defaultPost = {
  id: '1',
  created_time: '2019-07-30T00:46:57+0000',
  story: 'Someone posted a story',
  message: 'This is a message'
};

describe('Post component', () => {
  let component;

  beforeEach(() => {
    component = mountComponent({});
  });

  function mountComponent ({ post = defaultPost }) {
    return shallow(<Post post={post} />);
  }

  it('should render the date created', () => {
    assert(component.text().includes('2019'));
    assert(component.text().includes('30'));
    assert(component.text().includes('07') || component.includes('Jul'));
  });

  it('should render the message', () => {
    assert(component.text().includes('This is a message'));
  });

  it('should render the story if there is one', () => {
    assert(component.text().includes('Someone posted a story'));
  });

  it('should still render correctly if there is no story', () => {
    component = mountComponent({
      post: {
        id: '1',
        created_time: '2019-07-30T00:46:57+0000',
        message: 'This is a message'
      }
    });
    assert(component.text().includes('This is a message'));
  });
});
