// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { useNavigate } from 'react-router-dom'
// // import { GlobaleData } from '../App';


// function Copyright(props) {

//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();
// export default function SignInSide({login,logout}) {   //main function start

// //   const navigate = useNavigate();
// //   const context = React.useContext(GlobaleData)
// //   const { login, logout } = context

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),

//     // });
//     // console.log(login);

//     if (data.get('email') == '' && data.get('password') == '') {
//       if (login === false) {
        
//     //     // navigate('home')
//         logout(true)
//       }

//     }
//     else {
//       alert("Please fill the Data")
//     }
//   };


//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
              
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
                
//                 autoComplete="current-password"
                
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={() => { 
                  
//                 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
import { useNavigate } from "react-router";
import '../CSS_files/login.css';
import { useState } from "react";
// import { useAuth } from "../../context/authContext";
// import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { setUserData } from "../Redux/ReducerSlice";
// import { useDispatch } from "react-redux";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

 const Login = ({login,logout}) => {
  // const dispatch=useDispatch()
  // console.log(login,logout);
  const navigate = useNavigate();
  // const { userLogin, authState } = useAuth();
  // const location = useLocation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });
  const testUserData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const handlePasswordClick = () => setIsPasswordVisible((prev) => !prev);

  const handleLogin = () => {
    if (!userData.email.trim() || !userData.password.trim()) {
      // toast.warning("Enter all credentials!")
    } else {
      // userLogin(userData);
    }
  };

  const handleClick = (Transition) => () => {
    // setState({
    //   open: true,
    //   Transition,
    // });
    if (!userData.email.trim() || !userData.password.trim()) {
      // toast.warning("Enter all credentials!")
      // console.log('hello');
      setState({
      open: true,
      Transition,
    });

    } else {
      // userLogin(userData);
      // console.log('bye');
    logout(!login)
    navigate("/");

    }
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  const handleTestLogin = async() => {
    setUserData(testUserData);
    // userLogin(testUserData);
    // dispatch(setUserData(setUserData))
    logout(!login)
    navigate("/");
  };

  return (
    <div>
      <div className="login">
        {login? <div className="logout_style">
        <h2>LogOut</h2>
        <h3>Thanks for visiting </h3>
        {/* <label>Name</label> <span>{userData.email}</span> */}
        <button onClick={()=>[
          logout(!login)
        ]}>LOGOUT</button>
        </div> : <>
        <h2>Login</h2>
        <div>
          <label for="email">Email:</label>
          <input
            type='login'
            id="email"
            placeholder="johndoe@example.com"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label for="password">Password:</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder={isPasswordVisible ? "password" : "********"}
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <button onClick={handlePasswordClick}>
              {isPasswordVisible ? (
                // <i class="fa-regular fa-eye-slash"></i>
                <RemoveRedEyeIcon sx={{ fontSize: 15 }}/>
              ) : (
                // <i class="fa-regular fa-eye"></i>
                <VisibilityOffIcon sx={{ fontSize: 15 }}/>
              )}
            </button>
          </div>
        </div>

        <button className="login-button" onClick={handleClick(SlideTransition)}>
          {/* { <ClipLoader color={`#fff`} size={15} />} */}
          Login
        </button>
        <Snackbar
        open={state.open}
        onClose={handleClose}
        autoHideDuration={6000}
        TransitionComponent={state.Transition}
        message="Enter Valid Creditional"
        severity="success"
       
        
        // key={state.Transition.name}
        key={'top' + 'left'}
      />
        <button className="login-button guest" onClick={handleTestLogin}>
          {/* { <ClipLoader color={`#fff`} size={15} />} */}
          Login As Guest
        </button>

        <p onClick={() => {
          // navigate("/signup")
          }}>
          Create New account <i class="fa-solid fa-angle-right"></i>
        </p>
        </>}
      </div>
    </div>
  );
};
export default Login