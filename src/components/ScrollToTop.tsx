import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force scroll to top on route change
        window.scrollTo(0, 0);

        // Redundant checks for specific browsers/environments
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
};

export default ScrollToTop;
