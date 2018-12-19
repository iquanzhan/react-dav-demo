import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';


class Products extends React.Component {

  handleSumbit = () => {
    const dispatch = this.props.dispatch;

    dispatch({
      type: 'products/delete',
      payload: 20,
    });
  }

  render() {
    
    const products =this.props.products
    debugger;
    return (
      <div>
        <Button onClick={this.handleSumbit}>test</Button>
        
      </div>
    );
  };

};

export default connect(({ products }) => ({
  products,
}))(Products);