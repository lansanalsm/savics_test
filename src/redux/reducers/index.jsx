import { 
    PATIENT_ADDED,
    PATIENT_DELETED,
    PATIENT_FILTERED,
} from '../actions/types'
  
  const initialState = {
      patientList: [],
      displayOnlyMajor: false
  }
  
    function PatientReducer(state = initialState, action) {
      switch (action.type) {
        case PATIENT_ADDED:
            // i write code for baby :-)
          let oldListe = [...state.patientList]
          oldListe.push(action.payload)
          return {
            ...state,
            patientList: oldListe,
        }
  
        case PATIENT_DELETED:
          // even baby can undestrant this
          let newListe = [...state.patientList]
          newListe.splice(action.payload, 1)
          return {
            ...state,
            patientList: newListe,
        }
  
        case PATIENT_FILTERED:
          return {
            ...state,
            displayOnlyMajor: true,
        }
  
        default:
          return state
      }
    }
    
    export default PatientReducer