import React, { Component } from 'react';
import { Button, Grid, Layout, List, MarketGrid, Tab, Title } from 'redux/component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from 'redux/modules/product';
import { ApiMenu, ApiProduct, ApiMarketList, ApiMarketPrice } from 'redux/api';

class PosContainer extends Component {
  getMenu = async () => {
    const { ProductAction } = this.props
    await ApiMenu().then(res => ProductAction.getMenu(res))
  }
  getProduct = async (category) => {
    const { ProductAction } = this.props
    await setTimeout(() => {
      ApiProduct(category).then(res => ProductAction.getProduct(res))
    }, 300)
  }
  getMarketList = async () => {
    const { ProductAction } = this.props
    await ApiMarketList().then(res => ProductAction.getMarketList(res))
  }
  setMarketPrice = async () => {
    const { ProductAction } = this.props
    await ApiMarketPrice(55).then(async data => {
      for (let i = 1; i <= 3; i++) {
        await setTimeout(() => {
          ProductAction.setMarketPrice({ data, split: i })
        }, 1500 * i)
      }
    })
  }
  setProductEmpty = async () => {
    const { ProductAction } = this.props
    await ProductAction.setProductEmpty()
  }
  setCartList = async (data) => {
    const { ProductAction } = this.props
    await ProductAction.setCartList(data)
    await this.setTax()
  }
  setRemoveCart = async (data) => {
    const { ProductAction } = this.props
    await ProductAction.setRemoveCart(data)
    await this.setTax()
  }
  setTax = async () => {
    const { ProductAction } = this.props
    await ProductAction.setTax()
  }
  setCount = async (name, e, cb) => {
    const { ProductAction } = this.props
    const keyCode = e.keyCode
    const value = e.target.value
    if (keyCode === 13 && e.target.value) {
      await ProductAction.setCount({ name, value })
      await cb(1)
      await this.setTax()
    } else if (keyCode === 27) {
      await cb('esc')
    }
  }
  componentDidMount() {
    this.getMenu()
    this.getMarketList()
  }
  // componentDidUpdate(prevProps, prevState) {
  // const { product } = this.props
  // console.log(product.marketPrice)
  // }
  constructor(props) {
    super(props)

    this.state = {
      getProduct: this.getProduct,
      setProductEmpty: this.setProductEmpty,
      setCartList: this.setCartList,
      setRemoveCart: this.setRemoveCart,
      setCount: this.setCount,
      setMarketPrice: this.setMarketPrice,
    }
  }
  render() {
    const {
      productMenu,
      productList,
      cart,
      cartTotal,
      marketList
    } = this.props.product
    const {
      getProduct,
      setProductEmpty,
      setCartList,
      setRemoveCart,
      setCount,
      setMarketPrice
    } = this.state
    return (
      <div>
        <Layout child={[
          <Tab
            list={productMenu}
            split={4}
            components={[
              <Grid productList={productList} setCartList={setCartList} />,
              <MarketGrid marketList={marketList} />
            ]}
            getProduct={getProduct}
            setProductEmpty={setProductEmpty}
            setMarketPrice={setMarketPrice}
          />,
          <Title value={'POS SAMPLE'} />,
          <List cart={cart} cartTotal={cartTotal} setCount={setCount} setRemoveCart={setRemoveCart} />,
          <Button title={'CHARGE'} size={'lg'} fontSize={'2.5rem'} full={true} />
        ]} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    product: state.product
  }),
  (dispatch) => ({
    ProductAction: bindActionCreators(productActions, dispatch)
  })
)(PosContainer);