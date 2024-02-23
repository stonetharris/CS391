import ComponentA from './components/ComponentA.jsx'
import ComponentB from './components/ComponentB.jsx'
import Navigation from './components/Navigation.jsx'
import './App.css'
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom"

function Root(){
    return (
        <>
            <Navigation/>
                <Routes>
                    <Route path={"/"} element={<p>home page</p>} />
                    <Route path={"/component-a"} element={<ComponentA/>}/>
                    <Route path={"/component-b"} element={<ComponentB/>}/>
                </Routes>
        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component: Root},]

);

export default function App() {

  return (
      <RouterProvider router={router}/>
  )
}

