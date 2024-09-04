import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import './style.css'

const ProductDetail = () => {
    const { isProductDetailOpen, productToShow, closeProductDetail } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail</h2>
                <div>
                    <XCircleIcon
                        className="size-6 cursor-pointer"
                        onClick={() => closeProductDetail()}></XCircleIcon>
                </div>
            </div>
            <div>
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg'
                        src={productToShow.images?.[0]}
                        alt={productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                    <span className='font-medium text-md'>${productToShow.title}</span>
                    <span className='font-medium text-sm'>${productToShow.description}</span>
                </p>
            </div>
        </aside >
    )
}
export default ProductDetail