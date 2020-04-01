import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class BaseWidget{

    constructor(wrapperElement, initialValue){
    const thisWidget = this;
    thisWidget.dom = {};
    thisWidget.dom.wrapper=wrapperElement;
    thisWidget.value = initialValue;
    }
}
setValue(value) {
    const thisWidget = this;
    const newValue = thisWidget.parseValue(value);

    if (newValue != thisWidget.value && thisWidget.isValid(newValue)) {
      thisWidget.value = newValue;
      thisWidget.announce();
    }
      thisWidget.renderValue();
  }
  parseValue(value){
    const thisWidget = this;
    return parseInt(value);
  }
  isValid(value){
    const thisWidget = this;
    return !isNaN(value)
  }
  renderValue(value){
    const thisWidget = this;
    thisWidget.dom.wrapper.innerHTML = thisWidget.value;
  }
  announce() {
    const thisWidget = this;
    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }

export default BaseWidget;
