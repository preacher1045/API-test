const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        patientID: {
            type: String,
            required: [true, 'Please enter patientID!']
        },
        Surname: {
            type:String,
            required: [true, 'Please enter Patient_name']
        },
        Other_names: {
            type: String,
            required: [true, 'please enter patients other_names']
        },
        phoneNumber: {
            type:Number,
            required: true
        },
        Residential_address: {
            type: String,
            required: true
        },
        Emergency_name: {
            type:String,
            required: false
        },
        Emergency_contact:{
            type:Number,
            required: false
        },
        Relationship_With_patient:

    }
)