import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    function addToBasket(item) {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter((item) => item.id !== id);
        setOrder(newOrder);
    };

    const editQuantity = (event, id) => {
        const itemIndex = order.findIndex((item) => item.id === id);

        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex && event === 'add') {
                return { ...orderItem, quantity: orderItem.quantity + 1 };
            }

            if (
                index === itemIndex &&
                event === 'remove' &&
                orderItem.quantity > 0
            ) {
                return {
                    ...orderItem,
                    quantity:
                        orderItem.quantity >= 0 ? orderItem.quantity - 1 : 0,
                };
            }

            return orderItem;
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    };

    return (
        <main className='container content'>
            <Cart
                quantity={order.length}
                handleBasketShow={handleBasketShow}
            />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList
                    goods={goods}
                    addToBasket={addToBasket}
                />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    editQuantity={editQuantity}
                    removeFromBasket={removeFromBasket}
                />
            )}
            {alertName && (
                <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                />
            )}
        </main>
    );
}

export default Shop;
