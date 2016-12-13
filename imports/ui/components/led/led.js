import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './led.html';
import { Leds } from '../../../api/leds';
import { name as LedIndicator} from './ledIndicator';
import { name as Tracks} from '../audio/tracks';

class Led {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.show = function() {
    console.log("It worked:", this.isOn);
    }
    this.currentUser=function() {
      return Meteor.user() != null;
    }

    this.helpers({
      leds() {
        return Leds.find({});
      }
    });
  }

  toggle(){
    this.isOn = !this.isOn;
    //Leds.update(this.led._id);
    this.show();
  }
  
  reset() {
    this.led = {};
  }
}

const name = 'led';

// create a module
export default angular.module(name, [
  angularMeteor,
  LedIndicator,
  Tracks,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: Led
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});