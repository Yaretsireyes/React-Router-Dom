import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import './index.css'

const Home = () => {

    const {setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

    const renderView = () => {
        if (filteredItems?.length > 0) {
            return (
                filteredItems?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div className="loader gap-2">
                    <span className="ani">NO</span>
                    <span className="ani">HAY</span>
                    <span className="ani">CONCIDENCIA</span>
                </div>
            )
        }
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className='font-bold  text-xl'>Exclusive Products</h1>
            </div>
            <input className='input rounded-lg w-80 mb-4 h-11 p-4 focus:outline-none animate-bounce border-double border-4 border-cyan-600'
                type='text' placeholder='Search a product'
                onChange={(event) => setSearchByTitle(event.target.value)} />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg bg-white'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home