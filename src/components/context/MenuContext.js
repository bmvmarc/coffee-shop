import { createContext } from "react";

const MenuContext = createContext( {
    name: 'coffee-house',
    setMenuName: () => {}
});

export default MenuContext;