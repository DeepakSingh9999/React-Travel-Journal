import logo from '../images/globe.png'

export default function Header(){
    return (
        <>
        <header>
            <img src={logo} alt="Globe" />
            <h3>my travel journal.</h3>
        </header>
        </>
    )
}