import React from 'react';
import Feed from '../../components/Feed/Feed';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar';

const StyledFeedPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;
`;

class FeedPage extends React.Component {
  constructor () {
    super();

    this.handleSearchEdit = this.handleSearchEdit.bind(this);

    this.state = {
      searchTerm: ''
    };
  }

  handleSearchEdit (searchTerm) {
    this.setState({
      searchTerm
    });
  }

  render () {
    const { history } = this.props;
    const { searchTerm } = this.state;
    return (
      <StyledFeedPage>
        <NavBar history={history} searchTerm={searchTerm} onSearchTermEdit={this.handleSearchEdit} />
        <Feed searchTerm={searchTerm} />
      </StyledFeedPage>
    );
  }
}

export default FeedPage;
