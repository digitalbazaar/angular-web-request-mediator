/*!
 * Item chooser component.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    items: '<wrmItems',
    onCancel: '&wrmOnCancel',
    onSelect: '&wrmOnSelect'
  },
  transclude: {
    'wrm-item-chooser-header': 'wrmItemChooserHeader'
  },
  controller: Ctrl,
  templateUrl: 'angular-web-request-mediator/item-chooser-component.html'
};

/* @ngInject */
function Ctrl($document, $scope) {
  const self = this;
  self.selectedItem = null;

  self.$onInit = () => {
    $document[0].addEventListener('keydown', listener);
  };

  self.$onDestroy = () => {
    $document[0].removeEventListener('keydown', listener);
  };

  self.select = async item => {
    self.selectedItem = item;

    try {
      // wait for selection to be handled
      await self.onSelect({item: item});
    } catch(e) {
      console.error(e);
    }

    self.selectedItem = null;
    $scope.$apply();
  };

  function listener(event) {
    if(!self.selectedItem && event.key === 'Escape') {
      event.preventDefault();
      self.onCancel();
    }
  }
}
