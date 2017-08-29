/*!
 * Hint chooser component.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    hints: '<wrmHints',
    defaultHintIcon: '@wrmDefaultHintIcon',
    onCancel: '&wrmOnCancel',
    onConfirm: '&wrmOnConfirm',
    confirmButton: '<?wrmConfirmButton',
    confirmButtonText: '@?wrmConfirmButtonText'
  },
  transclude: {
    'wrm-hint-chooser-header': 'wrmHintChooserHeader'
  },
  controller: Ctrl,
  templateUrl: 'angular-web-request-mediator/hint-chooser-component.html'
};

/* @ngInject */
function Ctrl($document, $scope) {
  const self = this;
  self.display = 'overview';
  self.selectedHint = null;
  self.confirming = false;

  self.$onInit = () => {
    $document[0].addEventListener('keydown', listener);
    if(self.confirmButton && !self.confirmButtonText) {
      self.confirmButtonText = 'Confirm';
    }
  };

  self.$onChanges = changes => {
    if(!self.confirming && changes.hints) {
      if(!changes.hints.currentValue.includes(self.selectedHint)) {
        self.selectedHint = changes.hints.currentValue[0] || null;
      }
    }
  };

  self.$onDestroy = () => {
    $document[0].removeEventListener('keydown', listener);
  };

  self.close = () => {
    if(self.display === 'list') {
      self.display = 'overview';
      return;
    }
    self.onCancel();
  };

  self.select = hint => {
    self.selectedHint = hint;
    self.display = 'overview';
  };

  self.confirm = async hint => {
    self.selectedHint = hint;
    self.confirming = true;

    try {
      // wait for selection to be handled
      await self.onConfirm({hint: hint});
    } catch(e) {
      console.error(e);
    }

    if(!self.confirmButton) {
      self.selectedHint = null;
    } else {
      self.selectedHint = self.hints[0] || null;
    }
    self.confirming = false;
    $scope.$apply();
  };

  function listener(event) {
    if(!self.confirming && event.key === 'Escape') {
      event.preventDefault();
      self.close();
    }
  }
}
