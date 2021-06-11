import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const { smurfs, isLoading, error } = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if(error) {
        return <h2>We got an error: {error}</h2>
    }

    return(<div className="listContainer">
    {
        smurfs.map(smurf => (
            <Smurf smurf={smurf} key={smurf.id}/>
        ))
    }
    </div>);
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.