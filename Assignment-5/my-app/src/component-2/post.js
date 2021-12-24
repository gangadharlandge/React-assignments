import React from 'react';
import './post.css';


const user = [
  {"name":"Siva",
  "location":"Bengaluru",
  "likes":64,
  "description": "Best friends always..!",
  "PostImage": "https://webassets.oxfamamerica.org/media/images/bookshelf.2e16d0ba.fill-1180x738-c100.jpg",
  "date": "12-12-2021"
  },
  {"name":"Neeraj",
  "location":"Pune",
  "likes":30,
  "description": "Pic of the day",
  "PostImage": "https://random.imagecdn.app/250/250",
  "date":"12-1-2020"
  },
  {"name":"Rahul",
  "location":"Hyderabad",
  "likes":30,
  "description": "Happy new year",
  "PostImage": "https://wilstar.com/wp-content/uploads/2020/12/new-years-day-1-e1607420497339.jpg",
  "date": "1-1-2018"
  }
  ]

const post=()=> {

  

  return (
    <div className="site-container">
      <div className="nav">
      <header className="header">
      <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2TV_Dsqwiy6hsGblf24vDmTI93yOPCkJupnlPK-RJXFCYAr5I5lqyY6dKc1IEV64cWA&usqp=CAU" alt="logo" />

        <h2>Instaclone <span><img src="https://i.pinimg.com/originals/9a/ec/b3/9aecb3eb47bd0ab6012e93aea49a3bc3.png" alt="camera" /></span></h2>
        
      </header>
    </div>
      {user.map((userDetails,index)=>{
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

export default post;
