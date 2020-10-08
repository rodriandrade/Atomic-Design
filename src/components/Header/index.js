import React, { useState, useEffect } from "react";
import { Burger, Menu } from '../Index';

const Header = () =>{

    const [open, setOpen] = useState(false);

    return(
        <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Header;