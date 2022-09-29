import React from "react";

const Dogs = ({foundDog}) => {
    const loaded = () => {
        return (
            <>
                <h2>I'm Cute!</h2>
                <img src={foundDog.message} alt="Try Again" />
            </>
        );
    };
    const loading = () => {
        return <h2>Retrieve!</h2>
    }
    return foundDog ? loaded() : loading();
  
}

export default Dogs;