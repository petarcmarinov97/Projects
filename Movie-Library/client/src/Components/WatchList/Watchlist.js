import React from "react";

const Watchlist = ({history,username, isAuthenticated}) => {
    return (
        <section>
            {isAuthenticated
            ? <div><h2>Hello here is your Watchlist</h2></div>
            :history.push('/login')
            }
        </section>
    );
}
 
export default Watchlist;