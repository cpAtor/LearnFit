import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

// Bottom navigation in mobile view and top navigation in desktop view
export default function Navigation() {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
            <BottomNavigationAction label="Workout" icon={<SportsMartialArtsIcon />} component={Link} to="/workout"/>
            <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} component={Link} to="/account"/>
        </BottomNavigation>
    );
}