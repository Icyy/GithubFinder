import React from "react";
import SearchBar from "../SearchBar";
import User from "../users/User";

const HomePage = (props)=>{

    return(
        <div>
            <SearchBar
                      searchUser={props.searchUser}
                      clearusers={props.clearUsers}
                      showBtn={props.showBtn}
                      alert={props.onAlert}
                    />
                    <User
                      users={props.users}
                      loading={props.loading}
                    />
        </div>
    );
}

export default HomePage;