import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <div className="header">
            <h1>LIBRERIA EDEN</h1>
            <li><a href="#">home</a></li>
            <li><a href="#">nosotros</a></li>
            <li><a href="#">productos</a></li>
            <li><a href="#">contacto</a></li>
            <li><a href="#"><CartWidget/></a></li>
            {/* <CartWidget/> */}
        </div>
    )
}

export default NavBar