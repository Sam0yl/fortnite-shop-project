export default function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket, editQuantity } = props;
    return (
        <li
            id={id}
            className='collection-item'
        >
            {name} x{' '}
            <a
                className='btn-floating btn-small waves-effect waves-light basket-btn'
                onClick={() => editQuantity('add', id)}
            >
                <i className='material-icons'>add</i>
            </a>
            {quantity}
            <a
                className='btn-floating btn-small waves-effect waves-light basket-btn'
                onClick={() => editQuantity('remove', id)}
            >
                <i className='material-icons'>remove</i>
            </a>
            = {price * quantity}
            <span className='secondary-content'>
                <i
                    className='material-icons basket-delete'
                    onClick={() => removeFromBasket(id)}
                >
                    delete
                </i>
            </span>
        </li>
    );
}
