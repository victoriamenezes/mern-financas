import React, { useState } from 'react';
import axios from "axios";
// import "./login.scss";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
import { Avatar, Grid, Paper, Button, Typography, Link } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  // console.log(user)

  const paperStyle={
    padding: 20,
    height: '70vh',
    width: '60vh',
    margin: '2rem auto',
    backgroundColor: 'rgb(13, 59, 102, 0.1)'
  }

  const avatarStyle={
    backgroundColor:'#377D33',
    marginBottom: '1.4rem'
  }


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
            <h2>Acessar</h2>
        </Grid>
        <Grid align='center'>
          <TextField
            color='success'
            sx={{ marginTop: 5 }}
            required
            // id="outlined-required"
            fullWidth
            size="small"
            label="Usuário"
            placeholder='Nome de usuário'
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              // id="outlined-adornment-password"
              id="password"
              onChange={handleChange}
              className="lInput"
              type="password"
              // value={values.password}
              // onChange={handleChange('password')}
              // endAdornment={
                // <InputAdornment position="end">
                  // <IconButton
                    // aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    // edge="end"
                  // >
                    /* {values.showPassword ? <VisibilityOff /> : <Visibility />} */
                  // </IconButton>
                // </InputAdornment>
              // }
              label="Password"
            />
          </FormControl>
          {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          /> */}
          <Button type='submit'
            color='success'
            variant='contained'
            sx={{marginTop: 3}}
            disabled={loading}
            onClick={handleClick}
            className='lButton'>
            Entrar
          </Button>
          {error && <span>{error.message}</span>}
        </Grid>
        <Grid>
          <Typography sx={{marginTop: 5}}>
            <Link href='#'> Esqueceu a sua senha?</Link>
          </Typography>
          <Typography sx={{marginTop: 2}}> Ainda não possui uma conta?
            <Link href='#'> Cadastre-se</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
        // <input type="text" placeholder="nome de usuário" id="username" onChange={handleChange} className="lInput" />
        // <input type="password" placeholder="senha" id="password" onChange={handleChange} className="lInput" />
        // <button disabled={loading} onClick={handleClick} className='lButton'> Entrar </button>
  )
}

export default Login;
