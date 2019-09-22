import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import td from 'testdouble';
import Post from '../Post/Post';

const defaultFeed = [
  {
    id: '1',
    created_time: '2019_08_02',
    message: 'This is a message about birds',
    story: 'I added something'
  },
  {
    id: '2',
    created_time: '2019_08_02',
    message: 'This is a message about dogs',
    story: 'Here is some more content'
  },
  {
    id: '3',
    created_time: '2019_08_02',
    message: 'I don\'t have a story'
  },
  {
    id: '4',
    created_time: '2019_08_02',
    story: 'I don\'t have a message'
  },
  {
    id: '5',
    created_time: '2019_08_02',
    story: 'Here is a story about BiRDs with weird capitalisation'
  }
];

describe('Feed', () => {
  let component;
  let Feed;
  let fakeApi;

  beforeEach(() => {
    fakeApi = td.replace('../../services/facebookApi/facebookApi').default;
    td.replace('../Loader/Loader', () => <div>Loading</div>);
    td.when(fakeApi.getFeed()).thenResolve({ data: defaultFeed });
    Feed = require('./Feed').default;
    component = mountComponent({ });
    component.setState({
      feed: defaultFeed
    });
  });

  function mountComponent ({ searchTerm = '' }) {
    return shallow(<Feed searchTerm={searchTerm} />);
  }

  it('should render all posts with no searchTerm', () => {
    assert.strictEqual(component.find(Post).length, 5);
  });

  it('should search for all posts containing bird regardless of case', () => {
    component.setProps({ searchTerm: 'Bird' });
    assert.strictEqual(component.find(Post).length, 2);
  });
});
