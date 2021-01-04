import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">CAPRES</Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Registro</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
