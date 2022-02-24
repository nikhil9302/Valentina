/*This is a simple function that will be used repeteadly for the Match Screen, Chat Screen that display all Matched users and finally in the Message screen as well. 
Here we have an argument of 'users' (atleast 2 user) object with details as key-value pair and then we have userLoggedIn identifier that contains the logged in user's unique uid.
So since the user object includes the loggedin user data as well, but its redundant for the required function so we will delete it and then flaten the newUser object from this
structure:-
{
  uid: object {details}
}

to a flatened object structure:-
{
   uid: 
   ...details
}
and return it.
*/
const getMatchedUserInfo = (users, userLoggedIn) => {
    const newUsers = {...users};
    delete newUsers[userLoggedIn];

    
    const [id, user] = Object.entries(newUsers).flat()

    return { id, ...user};
};

export default getMatchedUserInfo;
