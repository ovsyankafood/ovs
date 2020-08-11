import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import healthLowCarbMenuNU from '../../../files/menu-iun-2020-zdorovie-1300.jpg';
import youthLowCarbMenuNU from '../../../files/menu-iun-2020-antistress-1300.jpg';
import beautyLowCarbMenuNU from '../../../files/menu-iun-2020-molodost-1300.jpg';

import healthDetoxMenuNU from '../../../files/menu-iun-2020-zdorovie-detox.jpg';
import youthDetoxMenuNU from '../../../files/menu-iun-2020-antistress-detox.jpg';
import beautyDetoxMenuNU from '../../../files/menu-iun-2020-molodost-detox.jpg';

import CloseIcon from '../../../components/Header/img/close.svg';

const lowCarbMenu = {
  1: healthLowCarbMenuNU,
  2: beautyLowCarbMenuNU,
  3: youthLowCarbMenuNU,
};
const detoxMenu = {
  1: healthDetoxMenuNU,
  2: beautyDetoxMenuNU,
  3: youthDetoxMenuNU,
};
const getWeekNumber = (w, menu) => {
  let week;
  if (w > 3) {
    week = w % 3;
  } else {
    week = w;
  }

  if (_.isInteger(week / 3)) {
    return menu[3];
  }
  if (_.isInteger(week / 2)) {
    return menu[2];
  }
  return menu[1];
};

const startPoint = moment([2019, 4, 6]);
const daysDiff = moment().diff(startPoint, 'days');
const week = Math.floor(daysDiff / 7) + 1;

const currentLowCarbMenuNU = getWeekNumber(week, lowCarbMenu);
const currentDetoxMenuNU = getWeekNumber(week, detoxMenu);

export class ProductDescription extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
    };
  }

  onChangeAmount = event => {
    event.preventDefault();
    const { value } = event.currentTarget.dataset;
    const sum = this.state.amount + parseInt(value, 10);
    if (sum > 0) {
      this.setState({ amount: sum });
    }
  };

  onAddToCart = e => {
    e.preventDefault();
    this.props.addToCart(this.props.el, this.state.amount);
    this.props.handleClose(e);
    this.props.openProductModal(e);
    this.setState({ amount: 1 });
  };

  render() {
    const { el, isOpen, handleClose } = this.props;

    return (
      <Dialog
        onClose={handleClose}
        open={isOpen}
        PaperProps={{
          className: 'popup',
          style: {
            maxWidth: '763px',
            marginLeft: '0',
            marginRight: '0',
          },
        }}
      >
        <DialogTitle>
          <div className="product__description_header">
            <h3>{el.name}</h3>
            <a
              href="/"
              className="product__description_header_close close"
              onClick={handleClose}
            >
              <img src={CloseIcon} alt="close" className="close_img" />
            </a>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="product__description_content">
            <div className="product__description_img_wrapper">
              <img
                className="product__description_img"
                src={el.imageinside ? require(`images/products/${el.imageinside}`) : require(`images/products/program_1.jpg`) /* eslint-disable-line */}
                alt="sweet"
              />
            </div>
            <div className="product__description_description">
              {el.shortDescription && (
                <h4 className="product__description_product_name">
                  {el.shortDescription}
                </h4>
              )}
              {el.description && (
                <div>
                  {el.description}
                  {el.vodasostav && <div>{el.vodasostav}</div>}
                </div>
              )}
              {el.menuHref && (
                <div>
                  <a target="_blank" href={currentLowCarbMenuNU}>
                    Посмотреть меню программы
                  </a>
                </div>
              )}
              {el.menuDetoxHrev && (
                <div>
                  <a target="_blank" href={currentDetoxMenuNU}>
                    Посмотреть меню программы
                  </a>
                </div>
              )}
              {el.properties && (
                <h4 className="product__description_product_kkal">
                  {el.properties}
                </h4>
              )}
              <div className="product__description_cost">
                <div className="product__description_cost_title">Цена</div>
                <div className="product__description_cost_price">
                  <div>
                    {_.map(el.priceProperties, (item, key) => (
                      <div
                        key={key}
                        className="product__description_cost_price_item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="product__description_actions">
                <div className="product__description_counter">
                  <a
                    href="/"
                    onClick={this.onChangeAmount}
                    data-value="-1"
                    data-index={el.id}
                  >
                    -{' '}
                  </a>
                  <span className="product__description_counter_number">
                    {this.state.amount}
                  </span>
                  <a
                    href="/"
                    onClick={this.onChangeAmount}
                    data-value="+1"
                    data-index={el.id}
                  >
                    {' '}
                    +
                  </a>
                </div>
                <a
                  href="/"
                  onClick={this.onAddToCart}
                  data-item={el.id}
                  data-title={el.title}
                  className="product__description_action"
                >
                  Добавить в корзину
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

ProductDescription.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  el: PropTypes.object,
  addToCart: PropTypes.func,
  openProductModal: PropTypes.func,
};
