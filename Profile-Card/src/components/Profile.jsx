import { useState } from 'react';
import profileImg1 from '../assets/images/Profile-1.jpg';
import profileImg2 from '../assets/images/Profile-2.jpg';
import profileImg3 from '../assets/images/Profile-3.jpg';
import { Eye, EyeOff, FilePenLine, MoveLeft, Upload } from 'lucide-react';
import '../assets/profile.css';

export default function ProfileCard() {
 const [profile, setprofile] = useState(true);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  return (
    <div className="profile-container">
      <div className="profile-1">
        <div className="header">
          <MoveLeft />
          <h3>My Profile</h3>
          <Upload />
        </div>
        <div className="profile-intro">
          <img src={profileImg1} alt="profile image" />
          <h4>Anna Whitten</h4>
          <div className="bioline">
            <p>22y/o Visual artist from New York</p>
            <div onClick={() => setShowText1(!showText1)}>
              {showText1 ? <Eye size={16} /> : <EyeOff size={16} />}
            </div>
          </div>
          {showText1 && (
            <p>
              I am a visual artist focused on portrait storytelling through
              mixed media, textured paint, and digital collage. My work explores
              identity, memory and most weeks sketching.
            </p>
          )}
        </div>
        <div className="stats-box">
          <p>
            200 <span>Posts</span>
          </p>
          <p>
            6600 <span>Followers</span>
          </p>
          <p>
            6600 <span>Following</span>
          </p>
        </div>
        <div className="footer">
          <h4>
            {' '}
            <FilePenLine /> Edit Profile
          </h4>
        </div>
      </div>

      <div className="profile-2">
        <div className="header">
          <MoveLeft />
          <h3>My Profile</h3>
          <Upload />
        </div>
        <div className="profile-intro">
          <img src={profileImg2} alt="profile image" />
          <h4>Jordan Lee</h4>
          <div className="bioline">
            <p>27y/o UI/UX designer from Seattle</p>
            <div onClick={() => setShowText2(!showText2)}>
              {showText2 ? <Eye size={16} /> : <EyeOff size={16} />}
            </div>
          </div>

          {showText2 && (
            <p>
              I design digital Products with a strong focus on usability,
              accessibility, and visual clarity. My background combines
              interface designs, UX research and frontend collaboration.
            </p>
          )}
        </div>
        <div className="stats-box">
          <p>
            148 <span>Posts</span>
          </p>
          <p>
            4200 <span>Followers</span>
          </p>
          <p>
            4200 <span>Following</span>
          </p>
        </div>
        <div className="footer">
          <h4>
            {' '}
            <FilePenLine /> Edit Profile
          </h4>
        </div>
      </div>

      <div className="profile-3">
        <div className="header">
          <MoveLeft />
          <h3>My Profile</h3>
          <Upload />
        </div>
        <div className="profile-intro">
          <img src={profileImg3} alt="profile image" />
          <h4>Maya Patel</h4>
          <div className="bioline">
            <p>24y/o Frontend dev from Austin</p>
            <div onClick={() => setShowText3(!showText3)}>
              {showText3 ? <Eye size={16}/> : <EyeOff size={16} />}
            </div>
          </div>

          {showText3 && (
            <p>
              I am a frontend developer building responsive web apps with React,
              morden css i enjoy creating interfaces that feel fast, readable
              and intuitive on both mobile and desktop.
            </p>
          )}
        </div>

        <div className="stats-box">
          <p>
            96 <span>Posts</span>
          </p>
          <p>
            5300 <span>Followers</span>
          </p>
          <p>
            5300 <span>Following</span>
          </p>
        </div>
        <div className="footer">
          <h4>
            {' '}
            <FilePenLine /> Edit Profile
          </h4>
        </div>
      </div>
    </div>
  );
}
