/*!
 * Hint component.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    hint: '<wrmHint',
    defaultIcon: '@wrmDefaultIcon',
    active: '<wrmActive',
    selected: '<wrmSelected',
    selectable: '<wrmSelectable',
    disabled: '<wrmDisabled'
  },
  controller: Ctrl,
  templateUrl: 'angular-web-request-mediator/hint-component.html'
};

/* @ngInject */
function Ctrl() {
  const self = this;
  self.hintClass = 'wrm-hint';

  self.$onChanges = () => {
    self.hintClass = ['wrm-hint'];
    if(self.disabled) {
      self.hintClass.push('wrm-disabled');
    } else if(self.selected) {
      self.hintClass.push('wrm-selected');
    } else if(self.selectable) {
      self.hintClass.push('wrm-selectable');
    }
    self.hintClass = self.hintClass.join(' ');
  };
}
