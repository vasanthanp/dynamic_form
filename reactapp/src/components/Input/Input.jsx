import React from "react";
import InputContainer from '../InputContainer/InputContainer';
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputList : [
                {
                    type : "text",
                    label : "Enter your username",
                    placeholder : "your Username",
                    datatestid : 'username'
                },
                {
                    type : "email",
                    label : "Enter your email",
                    placeholder : "Please Enter your email",
                    datatestid : 'email',
                },
                {
                    type : "password",
                    label : "Enter your password",
                    placeholder : "your Password",
                    datatestid : 'password'
                },
            ],
            errorList : [
                {
                    error: "Please Fill the column",
                },
                {
                    error: "Invalid Email"
                },
                {
                    error:"Please Fill the password"
                }
            ]
        }
    }

    render(){
        return(
            <div style={{
                paddingTop: "100px"
            }}>
                <div style={{
                    backgroundColor: "rgb(247,229,234)",
                    border: "1px solid rgba(0,0,0,0.4)",
                    width: "35%",
                    height:"350px",
                    boxShadow: "5px 10px 8px #888888",
                    margin: "0 auto",
                    borderRadius: "4px",
                    padding: "40px 80px 80px 80px"
                }}>
                    {
                        this.state.inputList.map((item,index)=><InputContainer id={item.datatestid} type={item.type} placeholder={item.placeholder} label={item.label} key={index} error={this.state.errorList[index].error}/>)
                    }
                </div>
            </div>
        )
    }
}

export default Input;