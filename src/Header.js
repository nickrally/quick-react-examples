import React, { useContext } from 'react';
import { MyUserContext } from './App';

const Header = () => {
    const currentUser = useContext(MyUserContext);
    return (
        <div>
            {
            currentUser.username === null 
              ? <p>Please login</p>
              : <p>Welcome {currentUser.username}</p>
            }

        </div>
    )
}

export default Header;