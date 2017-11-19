function project() {
  var instance;

  project = function() {
    return instance;
  };
  project.getInstance = function() {
    return instance;
  };

  project.prototype = this;
  instance = new project();
  instance.constructor = project;

  instance.participants = [];
  instance.pricing = {};
  instance.isBusy = false;

  return instance;
}
project.prototype.init = function(participants, pricing) {
  //   this.participants = participants;
  //   this.pricing = pricing;
  if (typeof participants === 'object' || typeof pricing === 'object') {
    if (participants !== null || pricing !== null) {
      this.participants = JSON.parse(JSON.stringify(participants));

      // this.pricing = { ...pricing };
      this.pricing = JSON.parse(JSON.stringify(pricing));
      // this.isBusy = false;
    }
  }
};

project.prototype.findParticipant = function(functor, callbackFunction) {
  if (this.isBusy === true) {
    return false;
  }
  this.isBusy = true;
  let element;
  let result;
  for (let i = 0; i < this.participants.length; i++) {
    if (functor(this.participants[i])) {
      element = this.participants[i];
      break;
    }
  }

  if (element) {
    result = callbackFunction(element);
    this.isBusy = false;
    return result;
  }
  this.isBusy = false;
  return callbackFunction(null);
};

project.prototype.findParticipants = function(functor, callbackFunction) {
  if (this.isBusy === true) {
    return false;
  }
  this.isBusy = true;
  const elements = [];
  for (let i = 0; i < this.participants.length; i++) {
    if (functor(this.participants[i])) {
      elements.push(this.participants[i]);
    }
  }
  if (elements.length !== 0) {
    this.isBusy = false;
    return callbackFunction(elements);
  }
  this.isBusy = false;
  return callbackFunction(elements);
};

project.prototype.addParticipant = function(
  participantObject,
  callbackFunction,
) {
  if (this.isBusy === true) {
    return false;
  }
  this.isBusy = true;
  let check = false;
  let key = Object.keys(participantObject);
  for (let i = 0; i < key.length; i++) {
    if (key[i] === 'seniorityLevel') {
      check = true;
    }
  }
  if (check) {
    this.isBusy = false;
    this.participants.push(participantObject);
    return callbackFunction();
  }
  this.isBusy = false;
  return callbackFunction(new Error());
};

project.prototype.removeParticipant = function(
  participantObject,
  callbackFunction,
) {
  if (this.isBusy === true) {
    return false;
  }
  this.isBusy = true;
  let array = [];
  let prin = JSON.stringify(participantObject);
  let check = false;
  let result;
  for (let i = 0; i < this.participants.length; i++) {
    array.push(JSON.stringify(this.participants[i]));
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === prin) {
      check = '' + i;
    }
  }
  if (check) {
    check = +check;
    result = this.participants.splice(check, 1);
    this.isBusy = false;
    console.log(result);
    result = result[0];
    console.log(result);

    return callbackFunction(result);
  }
  this.isBusy = false;
  return callbackFunction(null);
};

project.prototype.calculateSalary = function(periodInDays) {
  let ours = periodInDays * 8;
  let keyParticipant = [];
  let salary = 0;
  let keyPricing = Object.keys(this.pricing);
  for (let i = 0; i < this.participants.length; i++) {
    if (this.participants[i]['seniorityLevel'])
      keyParticipant.push(this.participants[i]['seniorityLevel']);
  }
  for (let i = 0; i < keyParticipant.length; i++) {
    for (let j = 0; j < keyPricing.length; j++) {
      if (keyParticipant[i] === keyPricing[j]) {
        salary += ours * this.pricing[keyPricing[j]];
        //del partic
        keyParticipant.splice(i, 1);
        i--;
        break;
      }
    }

    // if (keyParticipant[i] === keyPricing[keyParticipant[i]]) {
    //   salary = ours * keyPricing[;
    //del partic
  }
  if (salary > 0 && keyParticipant.length === 0) return salary;
  return new Error();
};

project.prototype.setPricing = function(
  participantPriceObject,
  callbackFunction,
) {
  if (this.isBusy === true) {
    return false;
  }
  this.isBusy = true;
  let truly = true;
  let inputKey = Object.keys(participantPriceObject);
  let pricKey = Object.keys(this.pricing);
  for (let i = 0; i < pricKey.length; i++) {
    if (pricKey[i] === inputKey) {
      this.pricing[pricKey[i]] = participantPriceObject[inputKey];
      truly = false;
    }
  }
  if (truly) {
    this.pricing[inputKey] = participantPriceObject[inputKey];
  }
  this.isBusy = true;
  return callbackFunction(); // ??
};

let ProjectModule = {
  getInstance() {
    return new project();
  },
};

module.exports = {
  firstName: 'Nikita',
  secondName: 'Koptsov',
  task: ProjectModule.getInstance(),
};