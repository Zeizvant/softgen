import './index.css'
import logo from '../../images/unison-logo.png'
import profile from '../../images/profile.png'
import car from '../../images/car.svg'
import health from '../../images/health.svg'
import person from '../../images/person.svg'
import airplane from '../../images/airplane.svg'
import agentPhone from '../../images/agent-phone.svg'


export const Navigation = () => {
    return (
        <div className='main-navigation'>
            <div className='main-navigation-container'>
                <div className='nav-components'>
                    <img className='main-logo' src={logo}/>
                    <div className='nav-menu-links'>
                        <a id='nav-menu-link' href='#'>ფიზიკური პირებისთვის</a>
                        <div className='nav-menu-component'>
                            <div >
                                <img src={health}/>
                                <p>ინდივიდუალური ჯანმრთელობის დაზღვევა</p>
                            </div>
                            <div>
                                <img src={car}/>
                                <p>ავტოდაზღვევა - პაკეტები</p>
                            </div>
                            <div>
                                <img id='person' src={person}/>
                                <p>მძღოლის პასუხისმგებლობის დაზღვევა</p>
                            </div>
                            <div>
                                <img src={airplane}/>
                                <p>სამოგზაურო დაზღვევა</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href='#'>იურიდიული პირებისთვის</a>
                    </div>
                    <div>
                        <a href='#'>სავალდებულო დაზღვევა</a>
                    </div>
                </div>
                <div className='nav-profile'>
                    <div className='profile-pic'></div>
                    <p>ჩემი კაბინეტი</p>
                </div>
            </div>
            <div className='agent-contact'>
                <div>
                    <img src={agentPhone}/>
                    <p>აგენტთან დაკავშირება</p>
                </div>
                
            </div>
        </div>
    )
}