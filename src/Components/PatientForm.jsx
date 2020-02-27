import React, { Component } from 'react';
import {isEmpty, generateKey} from '../utils'

export default class ImpactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',

            sex: '',
            age: '',

            city: '',
            country: '',

            diabete: '',
        }
    }

    onFistNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    onSexChange = (e) => {
        this.setState({
            sex: e.target.value
        })
    }

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    onCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onCountryChange = (e) => {
        this.setState({
            country: e.target.value
        })
    }

    onDiabeteChange = (e) => {
        this.setState({
            diabete: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(' state: ', this.state)
        if (
            !isEmpty(this.state.firstName) &&
            !isEmpty(this.state.lastName) &&
            !isEmpty(this.state.sex) &&
            !isEmpty(this.state.age) &&
            !isEmpty(this.state.city) &&
            !isEmpty(this.state.country) &&
            !isEmpty(this.state.diabete)
        ) {

            this.props.onPatientAdded(this.state)
            this.setState({
                firstName: '',
                lastName: '',
                sex: '',
                age: '',
                city: '',
                country: '',
                diabete: '',
            })
            // console.log('submited successfully')
        }
    }

    render() {

        return (  
                <div className='row text-center' /*style={{minHeight: content_heigth}} */ >
                    <form className='col-6'>
                        <div className="form-group col-12 mt--2">
                            <label htmlFor="impact">First Name </label>
                            <input type="text" value={this.state.firstName} onChange={this.onFistNameChange} className="form-control"/>
                        </div>

                        <div className="form-group col-12 mt--2">
                            <label htmlFor="indicateur" className="col-form-label">Last Name </label>
                            <input type="text" value={this.state.lastName} onChange={this.onLastNameChange} className="form-control" />
                        </div>

                        <div className="form-row col-12 mt--2">
                            <div className="form-group col-6">
                                <label htmlFor="valeurReference" className="col-form-label">Sex </label>
                                <select value={this.state.sex} onChange={this.onSexChange} className='col-6'>
                                    <option value=''> --select-- </option>
                                    <option value='mal'> Male </option>
                                    <option value='female'> Female </option>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="anneeReference" className="col-form-label">Age </label>
                                <input type="number" value={this.state.age} onChange={this.onAgeChange} className="form-control" id="anneeReference"/>
                            </div>
                        </div>
                        <div className="form-row col-12 mt--2">
                            <div className="form-group col-6">
                                <label htmlFor="valeurCible" className="col-form-label">City </label>
                                <select value={this.state.city} onChange={this.onCityChange} className='col-6'>
                                    <option value=''> --select-- </option>
                                    { this.props.cities.map(elem => (
                                        <option key={generateKey()} value={elem}> {elem}  </option>
                                        ))
                                    }
                                </select>
                                </div>
                            <div className="form-group col-6">
                                <label htmlFor="anneeCible" className="col-form-label">Country </label>
                                <select value={this.state.country} onChange={this.onCountryChange} className='col-6'>
                                    <option value=''> --select-- </option>
                                    { this.props.countries.map(elem => (
                                        <option key={generateKey()} value={elem}> {elem}  </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="form-group col-12 mt--2">
                            <label htmlFor="moyenVerification">Living with diabete ?</label>
                            <select value={this.state.diabe} onChange={this.onDiabeteChange} className='col-6'>
                                    <option value=''> --choose-- </option>
                                    <option value='no'> not </option>
                                    <option value='yes'> yes </option>
                            </select>
                
                        </div>


                        <input type='submit' value ='Submit' onClick={this.onSubmit} />
                    </form>
                </div>
        )
    }
}