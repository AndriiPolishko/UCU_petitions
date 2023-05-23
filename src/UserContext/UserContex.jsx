import React from 'react'
import { createContext } from 'react';

const UserContext = React.createContext({user: {}, setUser: () => {}});

export default UserContext;