import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ledIndicator.html';
import { Leds } from '../../../api/leds';
import { LedsStats } from '../../../api/ledsStats';

class LedIndicator {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.ledpower = 0;

  }

  show() {
    //console.log(Meteor.user()._id);
    console.log(LedsStats.findOne({_id:"ADmuFQWwavr7dYAyD5850200eb60031573b14c3e8"}).Power);
  }

  toggle(){
    this.led.isOn = !this.led.isOn;
    //Leds.update({_id:this.led._id},{"name": this.led.name,"isOn": this.led.isOn});
    var id = Meteor.user()._id+this.led._id;
    var pow = LedsStats.findOne({_id:id}).Power;
    Leds.update({_id:this.led._id},{$set:{name: this.led.name,isOn: this.led.isOn,lastUser: Meteor.user().username,Power:pow}});
  }

  imgsrc(){
    if(this.led.isOn){
      //console.log("TRUE");
      return true;
    } else {
      //console.log("FALSE");
      return false;
    }
  }

  myPower(){
    var id = Meteor.user()._id+this.led._id;
    return LedsStats.findOne({_id:id}).Power
  }

  updatePower(){
    var id = Meteor.user()._id+this.led._id;
    var ledo = Leds.findOne({_id:this.led._id});
    LedsStats.update({_id:id},{$set:{Power:this.ledpower}});
    if(ledo.isOn && ledo.lastUser == Meteor.user().username){
      console.log(LedsStats.findOne({_id:id}).Power);
      Leds.update({_id:this.led._id},{$set:{name: this.led.name,isOn: this.led.isOn,lastUser: Meteor.user().username,Power:LedsStats.findOne({_id:id}).Power}});
    }
  }

}

const name = 'ledIndicator';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    led: '='
  },
  controllerAs: name,
  controller: LedIndicator
});