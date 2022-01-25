import React, { Component } from "react";

class MyForm extends Component{
    state = {
        form:  {  first_name: "", last_name:"", email:"", isEdit:false },
        btnName: "Сохранить",
        btnClass: "ui primary button submit-button"
    };

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props && !this.isEmpty(this.props.customer)) {
            this.setState({
                form: { ...this.props.customer, isEdit:true},
                btnName: "Обновление",
                btnClass: "ui green button submit-button"
            });
        }
    }

    handleChange = event => {
        const{name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (this.formValidation()) {
            this.props.onFormSubmit(this.state.form);
        }
        
        this.clearFormFields();
    };

    formValidation = () => {
        if (document.getElementsByName("first_name")[0].value === "") {
            alert("Enter first name");
            return false;
        }

        if (document.getElementsByName("last_name")[0].value === "") {
            alert("Enter last name");
            return false;
        }

        if (document.getElementsByName("email")[0].value === "") {
            alert("Enter email");
            return false;
        }

        return true;
    };

    clearFormFields = () => {
        this.setState({
            from: {first_name: "", last_name: "", email: "", isEdit:false}
        });

        this.setState({
            btnName: "Сохранить",
            btnClass: "ui primary button submit-button"
        });
        
        document.querySelector(".form").reset();
    };

    render(){
        return (
            <from className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Имя</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            placeholder="Имя"
                            onChange={this.handleChange}
                            value={this.state.form.first_name}    
                        />
                    </div>

                    <div className="four wide field">
                        <label>Фамилия</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            placeholder="Фамилия" 
                            onChange={this.handleChange}
                            value={this.state.form.last_name}
                        />
                    </div>

                    <div className="four wide field">
                        <label>Электронная почта</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="joe@gmail.com" 
                            onChange={this.handleChange}
                            value={this.state.form.email}    
                        />
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                            {this.state.btnName}
                        </button>
                    </div>
                </div>
            </from>
        );
    }
}

export default MyForm; 