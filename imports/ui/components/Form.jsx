import React, { Component } from 'react'
import { AutoForm, AutoField } from 'uniforms-antd'
import SimpleSchema from 'simpl-schema';
import { SimpleSchemaBridge } from 'uniforms-bridge-simple-schema'
import Ajv from 'ajv';

const schema = new SimpleSchema({
    name: {
        type: String,
        optional: true
    }
})

const ajv = new Ajv({ allErrors: true, useDefaults: true });
function createValidator(schema) {
    const validator = ajv.compile(schema);
    return model => {
        validator(model);
        if (validator.errors && validator.errors.length) {
            throw { details: validator.errors };
        }
    };
}
const schemaValidator = createValidator(schema);
const bridge = new SimpleSchemaBridge(schema, schemaValidator);

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { members: [] }
    }
    componentDidMount() {
        Meteor.call('get_all_members', (err, res) => {
            if (!err) {
                this.setState({ members: res })
                console.log(res)
            }
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        // Meteor.call('add_member', {
        //     firstName: event.target.firstName.value,
        //     middleName: event.target.middleName.value,
        //     lastName: event.target.lastName.value,
        //     gender: event.target.gender[0].checked ? 'Male' : 'Female',
        //     relation: event.target.relation.value,
        //     member: event.target.member.value
        // }, (err, result) => {
        //     //
        // })
        console.log(
            {
                firstName: event.target.firstName.value,
                middleName: event.target.middleName.value,
                lastName: event.target.lastName.value,
                gender: event.target.gender[0].checked ? 'Male' : 'Female',
                relation: event.target.relation.value,
                member: event.target.member.value
            }
        )
    }
    render() {
        return <div>
            <form ref={this.form} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                onSubmit={this.submitForm}
            >
                <input placeholder="First Name" name="firstName"></input>
                <input placeholder="Middle Name" name="middleName"></input>
                <input placeholder="Last Name" name="lastName"></input>

                <div>
                    <label htmlFor="male">Male</label>
                    <input placeholder="Gender" name="gender" type="radio" id="male" checked={true}></input>
                    <label htmlFor="female">Female</label>
                    <input placeholder="Gender" name="gender" type="radio" id="female"></input>

                </div>
                <div>
                    <label>RelationShip</label>
                    <select name="relation">
                        <option value="grandparent">grandparent</option>
                        <option value="parent">parent</option>
                        <option value="child">child</option>
                    </select>
                </div>

                {/* <input placeholder="Select Family Member" name="member"></input> */}

                <div>
                    <label>Select Family Member</label>
                    <select name="member">
                        {this.state.members.map(item => {
                            console.log(item._id)
                            return <option value={item._id}>{item.firstName}</option>
                        })}
                    </select>
                </div>
                <button
                    type="submit"
                >submit</button>
            </form>
        </div>
    }
}

{/* <AutoForm schema={bridge}   >
{/* <AutoField name="name" onSubmit={() => console.log('xxx')}></AutoField> */}
// </AutoForm> */}