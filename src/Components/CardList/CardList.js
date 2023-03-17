import './CardList.css';
import image from '../../Pictures/reality.jpg';

const CardList = () =>{
    const cardData = ["Hello Word", "Hello Word", "Hello Word"]

    const CardList = cardData.map((item, index) =>{
        return(
            <div className='card' key={index}>
                <img src={image} alt="office" />
                <h1>Card Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure eius quod laborum! Quam dolore
                    impedit, temporibus doloribus rem dolor voluptatibus quasi expedita officiis autem, vitae
                    iste ut! Illo, facere.
                </p>
                <div>Card footer</div>
            </div>
        )
    })
    return(
        <div className='cardList'>
            {CardList}
        </div>
    )
}

export default CardList;