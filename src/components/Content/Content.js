import './index.css'
import home from '../../images/home.svg'
import health from '../../images/health.svg'
import car from '../../images/car.svg'
import airplane from '../../images/airplane.svg'
import person from '../../images/person.svg'
import profilePerson from '../../images/profile-person.svg'
import people from '../../images/people.svg'
import star from '../../images/star.svg'
import timer from '../../images/timer.svg'
import touch from '../../images/touch.svg'
import smallStar from '../../images/star-small.svg'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import arrow from '../../images/language-arrow.png'


export const Content = () => {
    return (
        <div className="main-content-body">
            <div className='main-content-container'>
                <div className='insurance-content'>
                    <div className='insurance-box'>
                        <img src={home}/>
                        <p>ქონების დაზღვევა</p>
                        <button>შეიძინე</button>
                    </div>
                    <div className='insurance-box'>
                        <img src={health}/>
                        <p>ჯანმრთელობის დაზღვევა</p>
                        <button>შეიძინე</button>
                    </div>
                    <div className='insurance-box'>
                        <img src={car}/>
                        <p>ავტომობილის დაზღვევა</p>
                        <button>შეიძინე</button>
                    </div>
                    <div className='insurance-box'>
                        <img src={person}/>
                        <p>პასუხისმგებლობის დაზღვევა</p>
                        <button>შეიძინე</button>
                    </div>
                    <div className='insurance-box'>
                        <img src={airplane}/>
                        <p>სამოგზაურო დაზღვევა</p>
                        <button>შეიძინე</button>
                    </div>
                </div>
                <div className='advantages-continer'>
                    <h2>უპირატესობები</h2>
                    <div className='advantages-content'>
                        <div>
                            <img src={profilePerson}/>
                            <p>მომხმარებლის კმაყოფილების 96%-იანი დონე</p>
                        </div>
                        <div>
                            <img src={star}/>
                            <p>მაღალრეიტინგული გადამზღვევი კომპანიები</p>
                        </div>
                        <div>
                            <img src={touch}/>
                            <p>თანამედროვე ელექტრონული სერვისები</p>
                        </div>
                        <div>
                            <img src={timer}/>
                            <p>ზარალის დარეგულირების უმოკლესი ვადები</p>
                        </div>
                        <div>
                            <img src={people}/>
                            <p>ზარალის დარეგულირების უმოკლესი ვადები</p>
                        </div>
                        <div>
                            <img src={smallStar}/>
                            <p>გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილება</p>
                        </div>
                    </div>
                </div>
                <div className='news-container'>
                    <h2>სიახლეები</h2>
                    <div className='news-content'>
                        <div>
                            <img src={image1}/>
                            <p>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</p>
                            <p className='date'>6 ნოემბერი</p>
                        </div>
                        <div>
                            <img src={image2}/>
                            <p>ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</p>
                            <p className='date'>28 ოქტომბერი</p>
                        </div>
                        <div>
                            <img src={image3}/>
                            <p>ავტომობილის სალონის მოვლის თანამედროვე ხერხები</p>
                            <p className='date'>14 ოქტომბერი</p>
                        </div>
                    </div>
                    <div className='more-news'>
                        <p>ყველა სიახლე</p>
                        <img src={arrow}/>
                    </div>
                </div>
            </div>    
        </div>
    )
}