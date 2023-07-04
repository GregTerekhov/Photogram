// import React, { useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();

// function useAuthentication() {
//   const [user, setUser] = useState();

//   React.useEffect(() => {
//     const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
//       auth,
//       (user) => {
//         if (user) {
//           setUser(user);
//         } else {
//           // User is signed out
//           setUser(undefined);
//         }
//       }
//     );

//     return unsubscribeFromAuthStatusChanged;
//   }, []);

//   return {
//     user,
//   };
// }

// export default useAuthentication;
