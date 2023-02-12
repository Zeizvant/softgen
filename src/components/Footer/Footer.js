import './index.css'
import logo from '../../images/unison-footer-logo.svg'
import google from '../../images/google.png'
import apple from '../../images/apple.svg'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'

export const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content'>
                <div className='footer-links'>
                    <div>
                        <img id='footer-logo' src={logo}/>
                        <a href='#'>ჩვენს შესახებ</a>
                        <a href='#'>კარიერა</a>
                        <a href='#'>პარტნიორები</a>
                    </div>
                    <div>
                        <p>ინფორმაცია</p>
                        <a href='#'>სიახლეები</a>
                        <a href='#'>საინფორმაციო ფურცელი</a>
                        <a href='#'>სამედიცინო პროვაიდერები</a>
                        <a href='#'>ხელშეკრულებები</a>
                    </div>
                    <div>
                        <p>დახმარება</p>
                        <a href='#'>კონტაქტი</a>
                        <a href='#'>მომხმარებლის ხმა</a>
                        <a href='#'>ხშირად დასმული კითხვები</a>
                        <a href='#'>მონაცემთა დაცვა</a>
                    </div>
                    <div>
                        <p>სოციალური ქსელები</p>
                        <div className='social'>
                            <img id='fb' src={facebook}/>
                            <span>Facebook</span>
                        </div>
                        <div className='social'>
                            <img id='instagram' src={instagram}/>
                            <span>Instagram</span>
                        </div>
                        <div className='social'>
                            <img id='linkedin' src={linkedin}/>
                            <span>Linkedin</span>
                        </div>
                        <div className='social'>
                            <img id='youtube' src={youtube}/>
                            <span>Youtube</span>
                        </div>
                    </div>
                </div>
                <div className='footer-app'>
                    <div className='app'>
                        <img id='apple' src={apple}/>
                        <img id='google' src={google}/>
                    </div>
                    <p>უნისონი © ყველა უფლება დაცულია, 2021</p>
                </div>
            </div>
        </div>
    )
}