import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as LogoIdoven } from "assets/idoven-logo.svg";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <LogoIdoven width="150px" height="auto" />
      </Toolbar>
    </AppBar>
  );
};
