import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import './style.css'
import { Link } from 'react-router-dom'

const ChekoutSideMenu = () => {
    const { order, setOrder, cartProducts, isCheckoutSideMenuOpen, closeCheckoutSideMenu, setCartProducts } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterdProducts = cartProducts.filter(orderCard => orderCard.id !== id)
        setCartProducts(filterdProducts)
    }

    const handleCheckout = () => {
        const orderToaAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToaAdd])
        setCartProducts([])
        setSearchByTitle('')

    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} chekout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div>
                    <XCircleIcon
                        className="size-6 cursor-pointer"
                        onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            id={product.id}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-bold text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button onClick={() => handleCheckout()} className='bg-black py-3 w-full text-white rounded-lg'>Chekout</button>
                </Link>
            </div>
        </aside >
    )
}
export default ChekoutSideMenu