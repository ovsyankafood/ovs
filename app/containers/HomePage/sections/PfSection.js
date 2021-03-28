import React from 'react';
import Slider from 'react-slick';
import _ from 'lodash';

import ProductAdded from '../../../components/ProductAdded';
import WeekMenu from '../../../components/WeekMenu';

import { settings } from './constants';
import SliderOfferIcons from './SliderOfferIcons';
import { ProductDescription } from '../components/ProductDescription';

class PfSection extends React.PureComponent {
  state = {
    isMenuModalOpen: false,
    isProductModalOpen: false,
    product: '',
    isProductDescriptionModalOpen: false,
    activeProduct: {},
  };

  onAddToCart = e => {
    e.preventDefault();
    const index = _.find(this.props.items, {
      id: +e.currentTarget.dataset.item,
    });
    this.props.addToCart(index);
    this.setState({ product: e.target.getAttribute('data-title') });
    this.setState({ isProductModalOpen: true });
  };

  openMenuModal = e => {
    e.preventDefault();
    this.setState({ isMenuModalOpen: true });
  };

  closeMenuModal = e => {
    e.preventDefault();
    this.setState({ isMenuModalOpen: false });
  };

  closeProductModal = e => {
    e.preventDefault();
    this.setState({ isProductModalOpen: false });
  };

  onCloseProductDescriptionModal = e => {
    e.preventDefault();
    this.setState({ isProductDescriptionModalOpen: false });
  };

  openProductModal = e => {
    this.setState({ product: e.target.getAttribute('data-title') });
    this.setState({ isProductModalOpen: true });
  };

  onProductClick = e => {
    e.preventDefault();
    const el = _.find(
      this.props.items,
      item => item.id === parseInt(e.target.dataset.id, 10),
    );
    this.setState({ isProductDescriptionModalOpen: true });
    this.setState({ activeProduct: el });
  };

  render() {
    const { items } = this.props;

    return (
      <section className="section_program" id="section_program">
        <div className="program">
          <div className="wrapper">
            <div className="title">
              <p className="title_text">Полуфабрикаты</p>
            </div>
            <p className="program_text">
				Мы знаем насколько тяжело женщине в современном темпе чувствовать себя  идеальной женой, и хозяйкой, и мамой, при этом работать и не забывать о себе. Создавая нашу линейку полуфабрикатов, мы хотели сделать так, чтобы каждая женщина могла радовать себя и своих любимых вкусными и полезными блюдами, и при этом не стоять весь день у плиты.
            </p>
          </div>
          <Slider className="program__slider pf__slider" {...settings}>
            {items.map(el => (
              <div className="program__slide" key={el.id}>
                <div className="program__slide_container">
                  <SliderOfferIcons el={el} />
                  <div className="program__slide_img_wrapper slide_img_link_wrapper">
                    <img
                      className="program__slide_img slide_img"
                      src={require(`images/products/${el.image}`) /* eslint-disable-line */}
                      alt="sweet"
                    />
                    <button
                      className="slide_img_link"
                      data-id={el.id}
                      onClick={this.onProductClick}
                      type="button"
                    />
                  </div>
                  <div className="program__slide_bottom program__slide_bottom_program sticky_slide_bottom">
                    <div className="program__slide_bottom_name_container">
                      <p className="program__slide_name">{el.name}</p>
					  <p className="program__slide_text">{el.consist}</p>
                      {el.kbju && (
                        <p className="program__slide_text">КБЖУ {el.kbju}</p>
                      )}
                    </div>
                    <div className="program__slide_cell">
                      <p className="program__slide_characteristic">
                        {el.kKal} ккал
                      </p>
                      <p className="program__slide_characteristic">
                        <b>
                          {el.isFixPrice === false && <b>от </b>}
                        <b>{el.cost} руб.</b>
                        {el.costSuffix && <b>{el.costSuffix}</b>}
                        </b>
                      </p>
                    </div>
                    <a
                      href="/"
                      onClick={this.onAddToCart}
                      data-item={el.id}
                      data-title={el.title}
                      className="program__slide_add_to_cart"
                    >
                      Добавить в корзину
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <a
            href="/"
            className="btn"
            data-section="section_callback"
            onClick={this.handleNavClick}
          >
            Заказать полуфабрикаты
          </a>
        </div>
        <WeekMenu
          isOpen={this.state.isMenuModalOpen}
          closeModal={this.closeMenuModal}
        />
        <ProductAdded
          isOpen={this.state.isProductModalOpen}
          closeModal={this.closeProductModal}
          product={this.state.product}
          openCart={this.props.openCart}
        />
        <ProductDescription
          handleClose={this.onCloseProductDescriptionModal}
          el={this.state.activeProduct}
          isOpen={this.state.isProductDescriptionModalOpen}
          addToCart={this.props.addToCart}
          openProductModal={this.openProductModal}
        />
      </section>
    );
  }
}

export default PfSection;
