
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

interface CartItemProps {
    data: Product;
}

const CartItem = ({ data: { amount, id, image, price, title } }: CartItemProps): JSX.Element => {

    function handleProductIncrement() {
        // TODO
    }

    function handleProductDecrement() {
        // TODO
    }

    function handleRemoveProduct() {
        // TODO
    }

    return (
        <tbody>
            <tr data-testid="product">
                <td>
                    <img src={image} alt={title} />
                </td>
                <td>
                    <strong>Tênis de Caminhada Leve Confortável</strong>
                    <span>{formatPrice(price)}</span>
                </td>
                <td>
                    <div>
                        <button
                            type="button"
                            data-testid="decrement-product"
                            disabled={amount <= 1}
                            onClick={handleProductDecrement}
                        >
                            <MdRemoveCircleOutline size={20} />
                        </button>
                        <input
                            type="text"
                            data-testid="product-amount"
                            readOnly
                            value={2}
                        />
                        <button
                            type="button"
                            data-testid="increment-product"
                            onClick={handleProductIncrement}
                        >
                            <MdAddCircleOutline size={20} />
                        </button>
                    </div>
                </td>
                <td>
                    <strong>{formatPrice(price)}</strong>
                </td>
                <td>
                    <button
                        type="button"
                        data-testid="remove-product"
                    onClick={handleRemoveProduct}
                    >
                        <MdDelete size={20} />
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default CartItem;