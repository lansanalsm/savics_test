import React, {Component} from 'react'
import { connect } from 'react-redux'

import PatientList from './PatientList'
import PatientForm from './PatientForm'

import {
    onPatientAdded,
    onPatientDeleted,
    onPatientFiltered,
    } from '../redux/actions'

import 'bootstrap/dist/css/bootstrap.min.css'

import {generateKey, isEmpty } from '../utils'

class RootContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {

        const cities = ['City 1', 'City 2', 'City x']
        const countries = ['Contry 1', 'Contry 2', 'Contry x']


        return (
            <div className=''>
                <PatientForm 
                    cities={cities}
                    countries={countries}
                    onPatientAdded={this.props.onPatientAdded}
                />
                <hr/>
                <PatientList 
                    onPatientDeleted={this.props.onPatientDeleted}
                    patientList={this.props.patientList}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        patientList: state.patientList,
        displayOnlyMajor: state.displayOnlyMajor
    }
  }

const mapDispatchToProps = {
    onPatientAdded,
    onPatientDeleted,
    onPatientFiltered,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RootContainer)