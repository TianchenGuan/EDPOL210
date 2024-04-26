import { BrowserRouter, Route, Routes } from "react-router-dom";

import BadgerBuds from "../BadgerBuds";
import BadgerBudsLanding from "./pages/BadgerBudsLanding";
import BadgerBudsAdoptable from "./pages/BadgerBudsAdoptable";
import BadgerBudsBasket from "./pages/BadgerBudsBasket";
import BadgerBudsNoMatch from "./pages/BadgerBudsNoMatch";
import Prevent from "./pages/Prevent";
import MoreResources from "./pages/MoreResources";

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<BadgerBuds />}>
                <Route index element={<BadgerBudsLanding />} />
                {/* TODO: Add your routes here! */}
                <Route path="/RecentNews" element={<BadgerBudsAdoptable />} />
                <Route path="/Consequences" element={<BadgerBudsBasket />} />
                <Route path="/Prevent" element={<Prevent />} />
                <Route path="/Resources" element={<MoreResources />} />
            </Route>
        </Routes>
    </BrowserRouter>
}