import { Mongo } from 'meteor/mongo';

export const Leds = new Mongo.Collection('leds');

Leds.allow({
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