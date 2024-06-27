import BasketItem from './BasketItem';

export default function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        editQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <ul className='collection basket-list z-depth-5'>
            <li className='collection-item active'>Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        editQuantity={editQuantity}
                    />
                ))
            ) : (
                <li className='collection-item'>The basket is empty</li>
            )}
            <li className='collection-item active'>
                Total price: {totalPrice}
            </li>
            <li className='collection-item secondary-content'>
                <a className='waves-effect waves-light btn'>
                    {' '}
                    <i className='material-icons left'>shopping_basket</i>order
                </a>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}
