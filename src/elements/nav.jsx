import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Navbar(){
    return ( 
    <nav className="nav">
    <Link to="/" className="site-title">Pits of Gehenna</Link>
    <ul>
        <CustomLink to="/text">/texts</CustomLink>
        <CustomLink to="/proj">/projs</CustomLink>
        <CustomLink to="/about">/about</CustomLink>
        {/* <li><a href="/text">/Texts</a></li>
        <li><a href="/proj">/Projects</a></li>
        <li><a href="/about">/About</a></li> */}
    </ul>
</nav>
    )
}

function CustomLink({to, children ,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}