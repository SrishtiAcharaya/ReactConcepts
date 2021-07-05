import { Link,NavLink } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <ul class="nav-Links">
                    <NavLink to='/about' activeStyle={
                        {color:'red'}
                    }>
                        <li>About</li>
                    </NavLink>
                    <Link to='/book'>
                        <li>Book</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
 
export default Nav;