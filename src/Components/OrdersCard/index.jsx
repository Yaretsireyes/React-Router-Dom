import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3  w-80 p-4 rounded-lg shadow-lg shadow-cyan-900/90 border-double border-4 border-cyan-600 animate-pulse">
            <div className='justify-between w-full flex flex-col font-bold shadow-lg'>
                <span className='underline flex flex-row mb-2 gap-2'><CalendarDaysIcon className='h-6 w-5' />01.02.23</span>
                <span className='underline flex flex-row mb-2 ml-2'>{totalProducts} Articles</span>
                <span className='underline flex flex-row mb-2 gap-2'><CurrencyDollarIcon className='h-6 w-5' />{totalPrice} </span>
            </div>
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </div>
    )
}
export default OrdersCard