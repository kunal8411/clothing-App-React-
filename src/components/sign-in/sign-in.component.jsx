import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import  {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
        email:'',
        password:''
        }     
    }
    handleSubmit=(event)=>{
        event.preventDefault();

        this.setState({email:'', password:''})
    }
    handleChange=(event)=>{
        // console.log(event.target)
        const {value, name} = event.target;
        //[] used to set state dynamically
        this.setState({[name]:value})
        // console.log("value",value)
        // console.log("name", name)
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     handleChange={this.handleChange}
                     label="email" 
                     type="email" 
                     value={this.state.email}
                     name="email" 
                     required
                    />
                    
                    <FormInput 
                    handleChange={this.handleChange}
                     label="password"
                     type="pasword"
                     value={this.state.password} 
                     name="password" 
                     required 
                    />  
                    
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {' '}
                        Sign In With Google{' '}
                    </CustomButton>
                </form> 
            </div>
        )
    }

}
export default SignIn;