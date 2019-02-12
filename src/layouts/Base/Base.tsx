import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

interface S {
  openMenu: boolean
}

class BaseLayout extends PureComponent<{}, S> {
  state = {
    openMenu: true,
  };

  handleMenuOpen = () => {
    this.setState({
      openMenu: true
    })
  };

  handleMenuClose = () => {
    this.setState({
      openMenu: false
    })
  };

  render(): React.ReactNode {
    const { openMenu } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Header title="Watchman" open={openMenu} onClickMenu={this.handleMenuOpen} />
        <Sidebar open={openMenu} onClose={this.handleMenuClose} />
        <Content open={openMenu}>
          { React.Children.toArray(children) }
        </Content>
      </div>
    );
  }
}

export default BaseLayout;
