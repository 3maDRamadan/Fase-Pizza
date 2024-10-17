import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='flex items-center justify-center flex-col h-96'>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='mt-5 bg-red-700 py-3 px-4 rounded-sm'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
