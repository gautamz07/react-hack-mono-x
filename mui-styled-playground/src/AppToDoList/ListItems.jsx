import React, { useState } from 'react'
import {
  Box,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'
// import InboxIcon from '@mui/icons-material/Inbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const UserList = ({
  userList,
  done,
  deleteItem,
  handleNotif
}) => {

  const [anchorMenuElem, setAnchorMenuElem ] = useState(null)
  const [toggleMenu, setToggleMenu ] = useState(false)

  const handleDropdownClick = (e) => {
    setAnchorMenuElem(e.currentTarget)
    handleMenuToggle()
  }

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return <>
    <br />
    <br />
    <br />
    <Box
      component="section"
      sx={{ 
        p: 2,
        display: 'block',
        margin: '0 auto'
      }}
      width='40vw'
    >
      <Paper
        elevation={1}
        sx={{
          padding: '1rem'
        }}
      >
        {
          (userList.length > 0) ? 
            userList.map((el, index) => {
            return (
              <List>
                <ListItemButton
                  sx={{ background: '#fafafa' }}
                >
                  <Checkbox
                    checked={el.done}
                    onChange={() => {
                      done(index)
                      handleNotif({ text: 'Marked as done'})
                    }}
                  />
                  <ListItemText primary={el.text} />
                  <ListItemIcon>
                    <IconButton
                      aria-label='delete'
                      color='primary'
                      sx={{
                        color: '#ff6347'
                      }}
                      onClick={() => { 
                        deleteItem(index)
                        handleNotif({ text: 'Task deleted'})
                      }}
                    >
                      <DeleteOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label='delete'
                      color='primary'
                      sx={{
                        color: '#ff6347'
                      }}
                      onClick={(event) => {
                        handleDropdownClick(event) 
                        // deleteItem(index)
                        // handleNotif({ text: 'Task deleted'})
                      }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorMenuElem}
                       elevation={0}
                       anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'right',
                       }}
                       transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                       }}
                       open={toggleMenu}
                    >
                      <MenuItem onClick={() => {}} disableRipple>
                        <DeleteOutlinedIcon />
                        Edit
                      </MenuItem>
                    </Menu>
                  </ListItemIcon>
                </ListItemButton>
              </List>
            )
          })
          :
          (<box
            sx={{
              padding: '5rem'
            }}
          >
            <LightbulbOutlinedIcon
              fontSize='large'
              sx={{
                color: '#ffeb3b',
                fontSize: '4rem'
              }}
            />
            <p
              // variant="h6"
              // gutterBottom
              style={{
                color: '#616161',
                margin: '0',
                marginTop: '1rem',
                marginBottom: '0.75rem'
              }}
            >
              Add your ideas | Thoughts | To-dos
            </p>
            <small
               style={{
                color: '#616161',
              }}
            >"The journey of a thousand miles starts with a single step ..." - <em>Yo Mama !</em></small>
          </box>)
        }
      </Paper>
    </Box>
  </>
}

export default UserList