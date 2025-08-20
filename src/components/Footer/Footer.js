import './Footer.css'
import logo from '../../assets/logo.png'

function Footer(){
    return (
      <div className='footer_wrap'>
        <div className='footer-top'>
            <div className='logo_sec'>
                <img src={logo} />
            </div>
            <div className='footer_menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
          <div className="footer_cover">
            <p>Designed and developed by © Prasanthi</p>
        </div>
      </div>
    )
}

export default Footer