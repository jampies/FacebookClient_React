import td from 'testdouble';
import { shallow } from 'enzyme';
import React from 'react';
import assert from 'assert';

describe('TimeSinceDate', () => {
  let component;
  let fakeDateService;
  let TimeSinceDate;

  beforeEach(() => {
    fakeDateService = td.replace('../../services/dateService/dateService').default;
    td.when(fakeDateService.formatDistanceToNow(td.matchers.anything())).thenReturn('about 2 months ago');
    TimeSinceDate = require('./TimeSinceDate').default;

    component = shallow(<TimeSinceDate date='2019-09-08' />);
  });

  it('should capitalise the first letter', () => {
    assert(component.text().includes('About 2 months ago'));
  });
});
