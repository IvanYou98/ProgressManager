import React, {Component} from 'react';
import Input from "./Input";
import TextArea from "./TextArea";
import Submit from "./Submit";

class Form extends Component {
    state = {
        data: {}
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = ({currentTarget: input}) => {
        // copy the data
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
    }

    renderInput(name, placeholder, type) {
        const {data} = this.state;
        return (
            <Input type={type}
                   placeholder={placeholder}
                   name={name}
                   value={data[name]}
                   onChange={this.handleChange}
            />
        )
    }

    renderTextArea(placeholder, name) {
        const {data} = this.state;
        return (
            <TextArea placeholder={placeholder}
                      name={name}
                      value={data[name]}
                      onChange={this.handleChange}
            />
        )
    }

    renderSubmitBtn(className) {
        return (
            <Submit className={className}/>
        )
    }

}

export default Form;