import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ledIndicator.html';
import { Leds } from '../../../api/leds';

class LedIndicator {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

  }

  show() {
    console.log("YEAH!!"+this.led.isOn+this.led._id);
  }

  toggle(){
    this.led.isOn = !this.led.isOn;
    //Leds.update({_id:this.led._id},{"name": this.led.name,"isOn": this.led.isOn});
    Leds.update({_id:this.led._id},{$set:{name: this.led.name,isOn: this.led.isOn}});
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