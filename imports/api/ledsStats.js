import { Mongo } from 'meteor/mongo';

export const LedsStats = new Mongo.Collection('ledsStats');

LedsStats.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});