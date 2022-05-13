import Pagination from "../services/Pagination";
import UserNavigationMenu from "../components/utilities/UserNavigationMenu";
import MyEvents from "../components/MyEvents";

export default function MyEventsScreen(){
    return(
        <div className="outlet_main">
            <UserNavigationMenu />
            <MyEvents />
            <Pagination />
        </div>
    )
}