import { MdAddShoppingCart } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';

interface CartItemsAmount {
  [key: number]: number;
}

interface ProductFormatted {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
  cartItemsAmount: CartItemsAmount;
}

interface ProductProps {
  data: ProductFormatted;
}

const Product = ({ data: { id, image, price, title, priceFormatted, cartItemsAmount } }: ProductProps): JSX.Element => {

  const { addProduct } = useCart();

  function handleAddProduct() {
    addProduct(id);
  }

  return (
    <li>
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <span>{priceFormatted}</span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={handleAddProduct}
      >
        <div data-testid="cart-product-quantity">
          <MdAddShoppingCart size={16} color="#FFF" />
          {cartItemsAmount[id] || 0}
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  )
}

export default Product;