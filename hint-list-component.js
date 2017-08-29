/*!
 * Item chooser component.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    hints: '<wrmHints',
    defaultHintIcon: '@wrmDefaultHintIcon',
    activateOnSelect: '<wrmActivateOnSelect',
    onSelect: '&wrmOnSelect'
  },
  controller: Ctrl,
  templateUrl: 'angular-web-request-mediator/hint-list-component.html'
};

/* @ngInject */
function Ctrl($scope) {
  const self = this;
  self.selectedHint = null;

  self.select = async hint => {
    self.selectedHint = hint;

    try {
      // wait for selection to be handled
      await self.onSelect({hint: hint});
    } catch(e) {
      console.error(e);
    }

    self.selectedHint = null;
    $scope.$apply();
  };
}
