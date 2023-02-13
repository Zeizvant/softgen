import './index.css'
import english from '../../images/english.png'
import georgian from '../../images/georgian.png'
import russian from '../../images/russian.png'
import arrow from '../../images/language-arrow.png'
import phone from '../../images/phone.png'
import menuIcon from '../../images/menu.svg'
import logo from '../../images/unison-footer-logo.svg'
import exclamation from '../../images/exclamation.svg'
import bag from '../../images/bag.svg'
import calling from '../../images/calling.svg'
import redPerson from '../../images/person-red.svg'
import unison from '../../images/U.svg'
import closeButton from '../../images/X.svg'
import whitePhone from '../../images/white-phone.svg' 
import profileBlue from '../../images/profile.png'


import { useEffect, useRef, useState } from 'react'


export const Menu = () => {

    const menu = useRef()
    const container = useRef()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

    return (
        <div className='main-menu'>
            <div className='main-menu-responsive'></div>
            <div className='main-menu-responsive-container'>
                <img className='resposive-main-logo' src={logo}/>
                <img className='menu-image' src={menuIcon} onClick={() => {
                    menu.current.style.width = '100vw'
                    container.current.style.display = 'flex'
                    document.body.style.overflow = 'hidden'
                
                }}/>
            </div>
            {
                windowWidth < 1051 &&
                <div ref={menu} className='responsive-menu-page'>
                    <div ref={container} className='responsive-menu-page-container'>
                        <div className='menu-page-header'>
                            <img src={unison}/>
                            <img src={closeButton} onClick={() => {
                                menu.current.style.width = '0'
                                container.current.style.display = 'none'
                                document.body.style.overflow = 'auto'
                            }}/>
                        </div>
                        <div className='profile-section'>
                            <div>
                                <img src={profileBlue}/>
                                <p>ჩემი <br/>კაბინეტი</p>
                            </div>
                            <button>SOS</button>
                        </div>
                        <div className='menu-section'>
                            <div>
                                <img src={redPerson}/>
                                <p>ფიზიკური პირებისთვის</p>
                                <img className='menu-section-arrow' src={arrow}/>
                            </div>
                            <div>
                                <img src={bag}/>
                                <p>იურიდიული პირებისთვის</p>
                                <img className='menu-section-arrow' src={arrow}/>
                            </div>
                            <div>
                                <img src={exclamation}/>
                                <p>სავალდებულო დაზღვევა</p>
                                <img className='menu-section-arrow' src={arrow}/>
                            </div>
                            <div className='menu-section-button'>
                                <img src={whitePhone}/>
                                აგენტთან<br/>დაკავშირება
                            </div>
                            
                        </div>
                        <div className='menu-section-links'>
                            <a href='#'>ჩვენს შესახებ</a>
                            <a href='#'>სიახლეები</a>
                            <a href='#'>პარტნიორები</a>
                            <a href='#'>კონტაქტი</a>
                        </div>
                        <div className='menu-section-languages'>
                            <div className='menu-section-lang'>
                                <div className='shape'>
                                    <div className='rectangle'></div>
                                </div>
                                <p id='geo'>ქართული</p>
                                <p>English</p>
                                <p>Русский</p>
                            </div>
                            <div className='menu-section-contact'>
                                <p id='hot-line'>ცხელი ხაზი</p><br/>
                                <div>
                                    <img src={calling}/>
                                    <p>2 991 991</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            <div className='main-menu-container'>
                <div className='menu-components'>
                    <a href='#'>მთავარი</a>
                    <a href='#'>ჩვენს შესახებ</a>
                    <a href='#'>სიახლეები</a>
                    <a href='#'>პარტნიორები</a>
                    <a href='#'>პარტნიორები</a>
                    <div className='sos'>
                        <button id='sos-button'>SOS</button>
                        <div className='sos-menu'>
                            <p>მოხდა სადაზღვევო შემთხვევა</p>
                            <p>შემთხვევის სტატუსის შემოწმება</p>
                        </div>
                    </div>
                    
                </div>
                <div className='menu-info'>
                    <div className='languages'>
                        <div className='language'>
                            <img className='language-img' src={georgian}/>
                            <p>ქართული</p>
                            <img id='language-change-arrow' src={arrow}/>
                        </div>
                        <div className='languages-menu'>
                            <div className='language'>
                                <img className='language-img' src={english}/>
                                <p>English</p>
                            </div>
                            <div className='language'>
                                <img className='language-img' src={russian}/>
                                <p>Русский</p>
                            </div>
                        </div>    
                    </div>
                    <div className='hot-line'>
                        <p>ცხელი ხაზი</p>
                        <img id="phone-img" src={phone} />
                        <p>2 991 991</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

