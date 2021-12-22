import React,{ useState } from 'react';
import './Postview.css';


const Postview=()=> {

    const[posts, setPost] = useState([]);



    React.useEffect(()=>{

    fetch("http://localhost:3004/user")
    .then((res) => res.json())
    .then((responseData) => setPost(responseData));
    },[]);


  return (
    <div className="site-container">
      <div className="nav">
      <header className="header">
      <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2TV_Dsqwiy6hsGblf24vDmTI93yOPCkJupnlPK-RJXFCYAr5I5lqyY6dKc1IEV64cWA&usqp=CAU" alt="logo" />

        <h2>Instaclone <span><img src="https://i.pinimg.com/originals/9a/ec/b3/9aecb3eb47bd0ab6012e93aea49a3bc3.png" alt="camera" /></span></h2>
        
      </header>
    </div>
      {posts.map((userDetails,index)=>{
        return(
        <div className="card">
          <div className="post-header">

           <label><b> {userDetails.name}</b></label><br />
           <label> {userDetails.location}</label><br/>
           <button className='btnMore'>...</button>
        </div>
        <div className="post-img">
           <img src={userDetails.PostImage} alt="postImg" />
        </div>
        <div className="post-footer">
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png" alt='postImg'/>
        <img src="https://cdn-icons-png.flaticon.com/512/786/786205.png" alt="share" />
        <label className='post-date' > {userDetails.date}</label>
        <br />
        <label className='likes'> {userDetails.likes} likes</label>
        <br />
        <label>{userDetails.description}</label>


        </div>
        </div>
        )
        })}
    </div>
  );
}

export default Postview;
