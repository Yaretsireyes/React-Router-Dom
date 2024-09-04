import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'
import ChekoutSideMenu from '../../Components/ChekoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/clothes',
      element: <Home />
    },
    {
      path: '/electronics',
      element: <Home />
    },
    {
      path: '/furniture',
      element: <Home />
    },
    {
      path: '/toys',
      element: <Home />
    },
    {
      path: '/others',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    }, {
      path: '/my-order',
      element: <MyOrder />
    }, {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder/>
    },
    {
      path: '*',
      element: <NotFound />
    },
  ])
  return routes
}


const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <ChekoutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}
export default App
