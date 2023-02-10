import React from 'react'
import { 
     Button, 
     Dialog,
     DialogTitle, 
     DialogContent, 
     DialogContentText, 
     DialogActions,
     } from '@mui/material'
     import { useState } from 'react'

const DialogPage = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Button onClick={() => setOpen(true)}>Open dialog</Button>
    <Dialog open={open}
    onClose={() => setOpen(false)}
    aria-labelledby='dialog-title' aria-discribedby='dialog-discription'>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-discription'>Are you sure you want to submit the test? 
                You will not able to edit after submitting
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default DialogPage