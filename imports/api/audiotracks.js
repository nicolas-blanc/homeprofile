import { Mongo } from 'meteor/mongo';

export const AudioTracks = new Mongo.Collection('audiotracks');

AudioTracks.allow({
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