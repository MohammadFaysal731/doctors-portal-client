import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let singInError;

    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, from, navigate])
    if (googleLoading) {
        return <Loading></Loading>;
    }
    if (googleError) {
        singInError = <p className='text-red-500'><small>{googleError?.message}</small></p>

    }
    return (
        <div>
            <div className="divider">OR</div>
            {singInError}
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;