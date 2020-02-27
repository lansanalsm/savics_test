import React, {Component} from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

// i always prefert class for my components
// even if the they are presentational components
// because in case of need, it's easy to transform it
export default class PatientList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {

        return (
            <div className=''>
                <table>
                    <tbody> 
                        <tr>
                            <td>First Name</td>
                            <td>Laste Name</td>
                            <td>sex</td>
                            <td>Age</td>
                            <td>City</td>
                            <td>Country</td>
                            <td>diabete ? </td>
                        </tr>
                        
                            {
                                this.props.patientList.map( elem => (
                                    <tr>
                                         <td>{elem.firstName}</td>
                                         <td>{elem.lastName}</td>
                                         <td>{elem.sex}</td>
                                         <td>{elem.age}</td>
                                         <td>{elem.city}</td>
                                         <td>{elem.country}</td>
                                         <td>{elem.diabete}</td>
                                    </tr>
                                ))
                            }

                    </tbody>
                </table>
            </div>
        )
    }
}

