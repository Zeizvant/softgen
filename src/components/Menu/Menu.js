import './index.css'
import english from '../../images/english.png'
import georgian from '../../images/georgian.png'
import russian from '../../images/russian.png'
import arrow from '../../images/language-arrow.png'
import phone from '../../images/phone.png'


export const Menu = () => {
    return (
        <div className='main-menu'>
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

