import React from "react";

const Favorite = ({history,username, isAuthenticated}) => {
    return (
        <section>
            {isAuthenticated
            ? <div><h2>Hello</h2></div>
            :history.push('/login')
            }
        </section>
    );
}
 
export default Favorite;