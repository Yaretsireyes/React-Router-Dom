import { useContext } from "react"
import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import OrdersCard from "../../Components/OrdersCard"

const MyOrders = () => {

    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1>
            </div>
            <div>
                {
                    order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts} />
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}
export default MyOrders