import React from 'react';
import { List, ListItem, ListItemText, Button, Avatar } from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar-header">
            <h2>Bot hub</h2>
            <Button variant="contained" color="primary">
               Создать чат
            </Button>
         </div>
         <List>
            <ListItem button>
               <ListItemText primary="Новый чат 3" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="Новый чат" secondary="350" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="Новый чат" secondary="7" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="Новый чат" secondary="6" />
            </ListItem>
         </List>
         <div className="sidebar-footer">
            <Avatar>a25583956</Avatar>
            <Button variant="contained">Купить пакет</Button>
         </div>
      </div>
   );
};

export default Sidebar;
