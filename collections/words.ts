import {Mongo} from 'meteor/mongo';

export var Words = new Mongo.Collection<Word>('words');