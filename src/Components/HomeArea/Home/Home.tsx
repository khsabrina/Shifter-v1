//import { Calendar } from "react-big-calendar";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Calender from "../../Calendar/Calendar"

function Home(): JSX.Element {
    return (

        // React Fragment
        <>
            <div>
                
            
            {/* Interpolation */}
            <Discount />

            {/* Conditional Rendering */}
            <Specials />

            {/* Display List */}
            <Desserts />
            </div>
            <div>
                <Calender />    
            </div>
            

        </>
    );
}

export default Home;
