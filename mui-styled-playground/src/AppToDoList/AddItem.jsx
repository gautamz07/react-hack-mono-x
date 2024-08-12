import React from 'react'
import { 
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel ,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'
import SendIcon from '@mui/icons-material/Send';

const FormAddItem = ({
  createNewItem,
  userInput,
  updateUserInput
}) => {
  return (<>
    <Box
      component="section"
      sx={{
        p: 2,
        display: 'block',
        margin: '0 auto'
      }}
      width='30vw'
      gap={2}
    >
      <FormControl
        fullWidth={true}
      >
        <InputLabel htmlFor="enter-new-task">Enter a new task</InputLabel>
        <OutlinedInput
          onChange={(e) => { updateUserInput(e.target.value) }}
          id="enter-new-task"
          type='text'
          value={userInput}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Enter a new task"
                onClick={() => createNewItem()}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <SendIcon color="primary"/>
              </IconButton>
            </InputAdornment>
          }
          label="Enter a new task"
        />
      </FormControl>
    </Box>
  </>)
}

export default FormAddItem