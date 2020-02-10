import { Mongo } from 'meteor/mongo';
const Members = new Mongo.Collection('members');

// Members.schema = new SimpleSchema({
//     firstName: {type: String},
//     middleName: {type: String},
//     lastName: {type: String},
//     gender: {
//         type: String,
//         allowedValues: ['Male', 'Female']
//     },
//     relationship: {type: String},
//     //
//   });

//   Members.addLinks({
//     'author': {
//         type: 'one',
//         collection: Meteor.users,
//         field: 'authorId',
//     }
// })

export default Members;