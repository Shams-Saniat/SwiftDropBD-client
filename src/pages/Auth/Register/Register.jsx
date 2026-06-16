import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegistration = (data) => {
        console.log('after register', data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        {...register('email', {
                            required: true
                        })} 
                        className="input" 
                        placeholder="Email" 
                    />
                    {errors.email?.type === 'required' &&
                        <p className='text-red-500'>Email is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                        })} 
                        className="input" 
                        placeholder="Password" 
                    />
                    {
                        errors.password?.type === 'required' && 
                        <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && 
                        <p className='text-red-500'>
                            Password must be 6 digit character or longer
                        </p>
                    }
                    {
                        errors.password?.type==='pattern' && <p className='text-red-500'>Password must have 1 upper ase, one lower case and one special character</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;