import React, {Component} from 'react';
import Input from "./Input";
import TextArea from "./TextArea";
import Submit from "./Submit";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = ({currentTarget: input}) => {
        // copy the data
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
    }

    renderInput(name, placeholder, type) {
        const {data, errors} = this.state;
        return (
            <React.Fragment>
                <Input type={type}
                       placeholder={placeholder}
                       name={name}
                       value={data[name]}
                       onChange={this.handleChange}
                />
                <p className="text-danger">{errors[name]}</p>
            </React.Fragment>
        )
    }

    renderTextArea(placeholder, name) {
        const {data, errors} = this.state;
        return (
            <React.Fragment>
                <TextArea placeholder={placeholder}
                          name={name}
                          value={data[name]}
                          onChange={this.handleChange}
                />
                <p className="text-danger">{errors[name]}</p>
            </React.Fragment>
        )
    }

    renderSubmitBtn(className) {
        return (
            <Submit className={className}/>
        )
    }

}

export default Form;