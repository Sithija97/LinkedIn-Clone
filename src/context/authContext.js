import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
/* auth object */

const authContext = React.createContext();
export const useAuth = () => useContext(authContext);
