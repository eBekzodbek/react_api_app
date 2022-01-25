import React, { Component } from "react";
class Customer extends Component{
    onDelete = () =>{
        // console.log("customer on delete");
        this.props.onDelete(this.props.customer.id);
    };

    onEdit = () =>{
        // console.log("customer on edit");
        this.props.onEdit(this.props.customer);
    }
    render(){
        const {id, first_name, last_name, email} = this.props.customer;
        return (
            <tr>
                <td style={{textAlign: "center" }} >{id}</td>
                <td>{`${first_name} ${last_name}`}</td>
                <td>{email}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Обновление</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Удалить</button>
                </td>
            </tr>
        );
    }
}

export default Customer;