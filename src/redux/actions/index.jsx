import { 
    PATIENT_ADDED,
    PATIENT_DELETED,
    PATIENT_FILTERED,
} from './types'

// nom et objectif du cadre logique
export function onPatientAdded(payload) {
    return {
        type: PATIENT_ADDED,
        payload
    }
}

export function onPatientDeleted(payload) {
    return {
        type: PATIENT_DELETED,
        payload
    }
}

export function onPatientFiltered(payload) {
    return {
        type: PATIENT_FILTERED,
        payload
    }
}