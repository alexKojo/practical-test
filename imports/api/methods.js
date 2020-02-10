import { Meteor } from 'meteor/meteor';
import Members from '../db/members/collection'; // or, as it's on github, for simplicity, import {Posts} from '/db';

Meteor.methods({
    'add_member' (data) {
        Members.insert(data);
    },
    'get_member' (id) {
        return id;
    },
    'get_all_members' () {
        return Members.find().fetch();
    },
    'update_member' (data) {
        Members.insert(data);
    },
    'delete_member' (data) {
        Members.insert(data);
    },
})