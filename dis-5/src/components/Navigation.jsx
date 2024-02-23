import {NavLink} from "react-router-dom"

export default function Navigation(){
    return(
        <>
            <h3>Navigation Menu</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/component-a'}>
                            Component A
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/component-b'}>
                            Component B
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}