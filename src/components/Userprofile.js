import React from 'react';
import './style/userprofile.css';

const Userprofile = ({ firstletter, imgsrc, available }) => {

  const getInitials = (fullname) => {
    const words = fullname.split(" ");

    let firstNameInitial = "";
    let lastNameInitial = "";

    if (words.length > 0) {
      firstNameInitial = words[0][0].toUpperCase();
    }

    if (words.length > 1) {
      lastNameInitial = words[words.length - 1][0].toUpperCase();
    }
    return `${firstNameInitial}${lastNameInitial}`;
  };

  const shortname = getInitials(firstletter);


  const getrandomcoloor = () => {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomBackgroundColor = getrandomcoloor();

  const userProfileStyle = {
    backgroundColor: imgsrc === undefined ? randomBackgroundColor : "white"
  };

  const onlinestatus = {
    backgroundColor: available ? "green" : "rgb(162, 162, 162)"
  };

  return (
    <div>
      <div className='user-profile' style={userProfileStyle}>
        {imgsrc !== undefined ? (
          <img src={imgsrc} alt="User Profile" />
        ) : (
          <div>
            {shortname}
          </div>
        )}
        <div className='user-profile-online' style={onlinestatus}></div>
      </div>
    </div>

  )
}

export default Userprofile;
