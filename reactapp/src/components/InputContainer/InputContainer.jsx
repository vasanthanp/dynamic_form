import React from "react";
import isEmail from 'validator/lib/isEmail';

class InputContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nameError: false,
            emailError: false,
            passwordError: false,
            nameValue: "",
            emailValue: "",
            passwordValue: "",
            color:"black",
            message:''
        }
    }
    handleTextFocus = (e) => {
        e.target.value.length>0?this.setState({nameError:false}):this.setState({nameError:true})
    }
    handleEmailFocus = (e) => {
        isEmail(e.target.value)?this.setState({emailValue:e.target.value,emailError:false}):this.setState({emailValue:e.target.value,emailError:true})
    }
    handlePasswordFocus = (e) => {
        // e.target.value.length>0?this.setState({passwordError:false}):this.setState({passwordError:true})
        this.handlePassword(e)
    }
    handleText = (e) => {
        e.target.value.length>0?this.setState({nameValue:e.target.value,nameError:false}):this.setState({nameValue:e.target.value,nameError:true})
    }

    handleEmail = (e) => {
        this.handleEmailFocus(e)
    }
    handlePassword = (e) => {
        let pattern_1 = /[a-z]/;
        let pattern_2 = /[A-Z]/;
        let pattern_3 = /[0-9]/;
        let pattern_4 = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let val = e.target.value;
        let count = 0;
        if(val.match(pattern_1))
        {
            count+=1;
        }
        if(val.match(pattern_2))
        {
            count+=1;
        }
        if(val.match(pattern_3))
        {
            count+=1;
        }
        if(val.match(pattern_4))
        {
            count+=1;
        }
        if(count===4)
        {
            this.setState({color:'green',message:'Password is Very Strong',passwordError:false})
        }
        if(count===3)
        {
            this.setState({color:'lightgreen',message:'Password is Strong',passwordError:false})
        }
        if(count===2)
        {
            this.setState({color:'orange',message:'Password is Good',passwordError:false})
        }
        if(count===1)
        {
            this.setState({color:'red',message:'Password is Weak',passwordError:false})
        }
        if(count===0)
        {
            this.setState({color:'red',message:"Please Fill the password",passwordError:true})
        }
    }
    render(){
        //console.log(this.state)
        const {id,type,label,placeholder,error} = this.props;
        return(
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <label htmlFor={id} style={{
                        textAlign:"left",
                        padding: "10px 0",
                        fontSize: "18px"
                        }}>
                        {label}
                    </label>
                    <input type={type} placeholder={placeholder} data-testid={id} style={{
                        padding: "10px 5px",
                        fontSize: "18px",
                        borderColor: this.state.nameError===true||this.state.emailError===true||this.state.passwordError===true?"red":"rgba(0,0,0,0.3)",
                        borderRadius: "4px",
                        outline: 'none',
                    }}
                    onFocus = {(e)=>type==='text'?this.handleTextFocus(e):type==='email'?this.handleEmailFocus(e):
                    type==='password'?this.handlePasswordFocus(e):''}
                    onChange = {(e)=>type==='text'?this.handleText(e):type==='email'?this.handleEmail(e):type==='password'?this.handlePassword(e):''}
                    />
                    {/* {console.log(this.state.nameError===true,this.state.emailError===true,this.state.passwordError===true,this.state.message.length>0)} */}
                    {(this.state.nameError===true||this.state.emailError===true||this.state.passwordError===true||this.state.message.length>0 )&& (
                        <span data-testid="message" key={type} style={{
                            textAlign:"left",
                            padding: "10px 0",
                            fontSize: "18px",
                            color: (this.state.nameError===true||this.state.emailError===true||this.state.passwordError===true)?"red":this.state.color,
                            // display: this.state.nameError===true||this.state.emailError===true||this.state.passwordError===true||this.state.message.length>0?"block":"none"
                        }}>{this.state.message.length>0?this.state.message:error}</span>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default InputContainer;