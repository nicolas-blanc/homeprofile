import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tracks.html';
import { AudioTracks } from '../../../api/tracks';
import { name as LedIndicator} from '../led/ledIndicator';
import { Howl } from 'meteor/bojicas:howler2';

class Tracks {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.sound = new Howl({
      src: ['/audio/bleach.mp3']
    });

    this.helpers({

    });
  }

play() {
    console.log("Play!");
    this.sound.play();
  }
stop() {
  console.log("Stop!");
  this.sound.stop();
}

}

const name = 'tracks';

// create a module
export default angular.module(name, [
  angularMeteor,
  LedIndicator
]).component(name, {
  template,
  controllerAs: name,
  controller: Tracks
});
