import '../styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div className='nav-bar'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/shop'>
                Shop
            </Link>
        </div>
    )

}