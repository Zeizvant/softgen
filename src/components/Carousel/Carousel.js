import './index.css'
import left from '../../images/left-arrow.png'
import right from '../../images/right-arrow.png'
import down from '../../images/down-arrow.png'
import carousel from '../../images/carousel.png'

export const Carousel = () => {
    return (
        <div className="main-carousel">
            <div className='carousel-container'>
                <div className='carousel-arrows'>
                    <div className=''>
                        <img src={left}/>
                    </div>
                    <div>
                        <img src={right}/>
                    </div>
                </div>
                <div className='carousel-header'>
                    <div>
                        <h2>ქონების დაზღვევა</h2>
                        <p>ყველაზე ხელსაყრელი პირობებით</p>
                        <div>
                            <p>შეიძინე ონლაინ</p>
                            <img src={down}/>
                            
                        </div>      
                    </div>
                </div>
                <img id='carousel' src={carousel} />
            </div>
        </div>
    )
}