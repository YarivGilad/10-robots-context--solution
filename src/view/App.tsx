import { Routes, Route } from "react-router-dom";

import {TopBar} from "./topBar";

// content `pages`
import { Home  } from "./home";
import { Browse  } from "./browse";
import { Create } from "./create";
import { NoMatch } from "./404";

// navigation
import { Links } from "./links";

export const App = () => (
    <>
        <div>
            <TopBar>
                <Links />
            </TopBar>
        </div>
        <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    </>
);

