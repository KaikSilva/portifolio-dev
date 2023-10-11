import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Portifolio from "../pages/index";

function RouterProvider() {

    return (
        <Router basename="/portifolio">
            <Routes>
                <Route exact path="/" element={<Portifolio />} />
            </Routes>
        </Router>
    )
}

export default RouterProvider;


