import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth,  } from '../../AuthContext';
import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { TextField,   } from '@mui/material';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

function LoginSection(){
const {itemCount} = useAuth()
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const [mail,setMail] = useState("")
const [password,setPassword] = useState("")
    return(
        <div className="loginSection">
                    <div className='login_wrap'>
                        <div className='icon_tab'>
                            <LocalPhoneIcon/> <p>9497584195</p>
                        </div>
                        <div className='icon_tab' onClick={handleOpen}>
                            <PersonIcon/> <p>Sign in</p>
                        </div>
                         <div className='icon_tab'>
                            <ShoppingCartIcon/><p>Cart</p>
                            <span className='cart_item_num'>{itemCount}</span>
                            </div>
                         </div>


                         <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" className='sign_in_btn'>
                            <Box   sx={style}>
                                <h2>Sign In</h2>
                                <div className='sign_in_modal'>
                                      <TextField
                                            label="Enter your Email-ID"
                                            variant="outlined"
                                            value={mail}
                                            onChange={(e) => setMail(e.target.value)}
                                            fullWidth
                                            size="small"
                                        />
                                        <TextField
                                            label="Enter a password"
                                            variant="outlined"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            fullWidth
                                            size="small"
                                        />
                                        <div className='login_btn'>
                                            <ConfirmButton>Sign In</ConfirmButton>
                                        </div>
                                </div>
                            </Box>
                        </Modal>

                    </div>
    )
       
}

export default LoginSection