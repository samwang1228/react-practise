import React,{ useState,useEffect} from 'react';
import './App.css';
// import SignIn from './pagelog.js';
import Post from './Post';
import { db,auth } from './firebase'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import ImageUpload from './ImageUpload';
import SignInSide from './pagelog';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


// import { BrowserRouter,Route,Routes,Router,useRoutes,Link,Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


// function getModalStyle() {

//   const top = 50;
//   const left = 50;
//   return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//   };
// }
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


function App() {
  // const [modalStyle] = useState(getModalStyle);
  // const classes = useStyles();
  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username,setUsername] = useState(''); 
  const [email,setEmail] = useState(''); 
  const [password,setPassword] = useState('');
  const [user,setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> { 
      if(authUser) {
        //user logged in
        console.log(authUser); //輸出是誰
        setUser(authUser);

        // if (authUser.displayName){
        //   // done update username
        // } else {
        //   //if we just create someone
        //   return authUser.updateProfile({
        //     displayName:username,
        //   })
        // }

      } else {
        // user logged out
        setUser(null);
      }


    })

    return () =>{
      // perform some cleanup actions
      unsubscribe();
    }
  },[user,username]);
 

 
    // {
    // 每個post都有這三個子元素
    //   username:"ceeyu",
    //   caption:"Anya Forgert: Wakuwaku" ,
    //   imgUrl:"https://i.ytimg.com/vi/r664qGPtkeo/maxresdefault.jpg"
    // },
    // {
    //   username:"ceeyu",
    //   caption:"Anya Forgert: Wakuwaku" ,
    //   imgUrl:"https://i.ytimg.com/vi/r664qGPtkeo/maxresdefault.jpg"
    // }
 

  //UseEffect => runs a piece of code based on a specific condition

  useEffect(() => {
    // this is where the code run
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      //every time a new post is added, this code fire
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id, 
        post: doc.data()
      })));
      // 類似for迴圈
    })
  }, []);
  // []:run完reset

    const signUp = (event) =>{
      event.preventDefault();

      auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) =>alert(error.message))

      setOpen(false);
    }

    const signIn = (event) => {
      event.preventDefault();

      auth
        .signInWithEmailAndPassword(email,password)
        .catch((error) =>alert(error.message))
      setOpenSignIn(false);

    }


  return (
    <div className="app">
{/* 
      {user?.displayName ? (
        <ImageUpload username={user.displayName}/>
      ):(
        <h3>Sorry you need to loggin to upload</h3>
      )} */}
    


  
      {/* <Routes>
        <Route path="/" element={<Post/>}/>
        <Route path='/' element={<SignIn />} />
      </Routes>  */}

      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
        <form className="app__signup">
          <center>
              <img 
                  className="app__headerImage"
                  src="https://inside-assets1.inside.com.tw/2016/05/1-V7GYJQ_4lykfDzOf9q17eA.jpeg?w=730&fit=max&q=80"
                  alt=""
                  width="20%"
              />
          </center>
          
              <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // ref="txt"
                
                /> 
              <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {/* <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}
              
              
             
              <Button  type="submit" onClick={signUp}>Sign Up</Button>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button> */}
          </form>
          

          
          
        </Box>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <Box sx={style}>
        <form className="app__signin">
          <center>
              <img 
                  className="app__headerImage"
                  src="https://inside-assets1.inside.com.tw/2016/05/1-V7GYJQ_4lykfDzOf9q17eA.jpeg?w=730&fit=max&q=80"
                  alt=""
                  width="20%"
              />
          </center>
          
              <Input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

              <Button  type="submit" onClick={signIn}>Sign In</Button>
              
          </form>
          

          
          
        </Box>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
           
        />
      </div>

      {/* <nav><Link to="/"></Link></nav> */}
      {user ? (
                <Button  onClick={() =>auth.signOut()}>Logout</Button>
            ):(
              <div className="app__loginContainer">
                <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                <Button onClick={() =>setOpen(true)}>Sign Up</Button>
              </div>
              
            )}
      {/* ():()=or */}
      
      
      {/* <Button onClick={<Link to="/about"></Link>}>Sign Up</Button> */}
      

      <h1>hello</h1>
      {
        posts.map(({id,post}) => (
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imgUrl}/>
        ))
      }

      <Post username="ceeyu" caption="Anya Forgert: Wakuwaku" imgUrl="https://i.ytimg.com/vi/r664qGPtkeo/maxresdefault.jpg"/>
      <Post  username="venassa" caption="Anya Forger: Ho "imgUrl="https://www.peekme.cc/upload/fr/wKx/e4f05c6e581540bdb34b69b745d46c3e.jpg"/>
      <Post  username="ray" caption="Anya Forgert: zzZ" imgUrl="https://inews.gtimg.com/newsapp_bt/0/14927661189/1000"/>


    </div>
  );
}
function Approuter () {
  return (
  <Routes>
  <Route path="/" element={<SignInSide/>}/>
    <Route path='/about' element={<App/>} />
  </Routes>
  );
};
export default Approuter;
