import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './tracks.html';
import { AudioTracks } from '../../../api/audiotracks';
import { Howl } from 'meteor/bojicas:howler2';
import { name as Track} from './track';

class Tracks {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.currentUser=function() {
      return Meteor.user() != null;
    }

    this.helpers({
      alltracks() {
        return AudioTracks.find({});
      }
    });
  }
}

const name = 'tracks';

// create a module
export default angular.module(name, [
  angularMeteor,
  Track
]).component(name, {
  template,
  controllerAs: name,
  controller: Tracks
});
