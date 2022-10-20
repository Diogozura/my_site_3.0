import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LinkPage from '../Link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{
  id: 1,
  label: 'Missões',
  path: '#missoes',
  // icon: HomeIcon
},
{
  id: 2,
  label: 'Github',
  path: 'https://github.com/diogozura',
  // icon: HomeIcon
  },
  {
      id: 3,
      label: 'Contato',
      path: 'https://t.me/Diogozura',
      // icon: HomeIcon
  }
];

export default function DrawerAppBar({ header}, props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',bgcolor:'#00000097' }}>
      <Typography variant="h6" sx={{ color: '#ffffff', my: 2 }}>
        Diogo Zura
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <LinkPage key={item.id} href={item.path} name={item.label} color={'#FFFFFF'} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar component="nav" sx={{bgcolor:'#00000097' , position:"inherit" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
                  </IconButton>
                  <Image src={header.logo?.url.substr(31)} alt="Logo do zura" width="40" height="40"/>
                  {/* <AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h1"
            component="div" 
            sx={{
                m: 2,
                flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            fontSize: '1.5em',
            fontFamily: 'Iceberg',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
          >
            Diogo zura
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
               <LinkPage key={item.id} href={item.path} name={item.label} color={'#FFFFFF'} />
                
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
