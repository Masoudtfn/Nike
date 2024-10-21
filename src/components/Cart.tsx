import { CartItem } from "./CartItem";
export function Cart({ cartItems, onClickTrash }: any) {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem: any) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </>
  );
}
