import Pagination from "../services/Pagination";
import UserNavigationMenu from "../components/utilities/UserNavigationMenu";
import JoinedEvents from "../components/JoinedEvents";

export default function JoinedEventsScreen(){
    return(
        <div className="outlet_main">
            <UserNavigationMenu />
            <JoinedEvents />
            <Pagination />
        </div>
    )
}