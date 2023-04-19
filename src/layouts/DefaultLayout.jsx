import { Routes, Route } from "react-router-dom";
import routes from "../utils/routes"
import { HeaderCom, FooterCom } from "../components"

const DefaultLayout = () => {

    //Routes
    const showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.main()}
                        exact={route.exact}
                    ></Route>
                );
            });
        }
        return result;
    };

    return (
        <>
            <HeaderCom />
            <Routes>
                {showContentMenu(routes)}
            </Routes>
            <FooterCom />
        </>
    )
}

export default DefaultLayout