import EventCard from '../EventComponents/EventCard';

function CardContainerMyCreated(props) {


    /* const navTo = useNavigate();
    const [eventDetailData, setEventDetailData] = useState([]);
  
    const clickHandler = (key) => (event) => {
    readEvent(key).then(snapshot => setEventDetailData(Object.entries(snapshot.val())));
    console.log(eventDetailData)
    navTo("/eventdetail")
  
     } */

    const cards = props.data.map((item) => {
        const key = item[0];
        return item[1].uid === props.loggedUserID &&
            <div key={key} /* onClick={clickHandler(key)} */><EventCard key={key} {...item[1]} /></div>
    });

    console.log(props.loggedUserID)

    return (
        <div className="main" >
            <h3>{props.title}</h3>
            <section className="cards-list">{cards}</section>
        </div>
    );
}

export default CardContainerMyCreated;