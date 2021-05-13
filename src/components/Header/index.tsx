import LogoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <header>
            <img src={LogoImg} alt="dt money"/>
            <button type="button">
                Nova transação
            </button>
        </header>
    )
}