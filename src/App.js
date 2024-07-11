import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import ResMenu from './components/ResMenu'
import { Suspense, lazy, useEffect } from 'react'
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom'
import UserContext from './utils/UserContext.js'
import {useState} from 'react'
const Grocery = lazy(()=>import('./components/Grocery'))
const AppLayout = () => {
    const [userName, setUserName] = useState(null);
    useEffect(()=>{
        const data = {
            name : "Sidharth Verma"
        }
        setUserName(data.name);
    }, [])
    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}
const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurants/:resId",
                element : <ResMenu/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={"This page is Loading"}><Grocery/></Suspense>
            }
        ],
        errorElement : <Error/>,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)