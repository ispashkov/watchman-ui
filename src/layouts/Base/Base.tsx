import React, { PureComponent } from 'react';
import Header from '../../containers/HeaderContainer';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

interface S {
  openMenu: boolean
}

const BaseLayout = (Component: React.ComponentType<{} & any>) => {
  class ComponentWithLayout extends PureComponent<{}, S> {
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
      const {openMenu} = this.state;

      return (
        <div>
          <Header title="Watchman" open={openMenu} onClickMenu={this.handleMenuOpen}/>
          <Sidebar open={openMenu} onClose={this.handleMenuClose}/>
          <Content open={openMenu}>
            <Component {...this.props} />
          </Content>
        </div>
      );
    }
  }

  return ComponentWithLayout;
};

export default BaseLayout;
