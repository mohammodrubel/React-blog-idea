import React from 'react';
import Button from 'react-bootstrap/Button'
import useFirebase from '../../Hoocks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase()
    return (
        <div className="col-md-6 mx-auto">
            <h1 style={{textAlign:'center',color:'blue'}}>Pleace Login</h1> <hr/><hr/>
            <Button variant="warning" onClick={singInWithGoogle}>Share With Google</Button>
            
            
        </div>
    );
};

export default Login;