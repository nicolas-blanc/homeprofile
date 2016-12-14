import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './track.html';
import { AudioTracks } from '../../../api/audiotracks';

class Track {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.test = 0;
    this.sounds = {"Bleach":new Howl({
      src: ['/audio/bleach.mp3']
    }),"Hotel Garuda":new Howl({
      src: ['/audio/HotelGaruda.mp3']
    })};

  }

  isOwner(){
    return (this.track.owner == Meteor.user().username);
  }

  myName(){
    return this.track.name;
  }

  play(){
    console.log("Play!");
    console.log(this.track.name);
    this.sounds[this.track.name].play();
    console.log(this.sounds);
  }
  pause(){
    console.log("Pause!");
    this.sounds[this.track.name].pause();
  }
  stop(){
    console.log("Stop!");
    this.sounds[this.track.name].stop();
    //this.sound = {}
  }
}

const name = 'track';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    track: '='
  },
  controllerAs: name,
  controller: Track
});