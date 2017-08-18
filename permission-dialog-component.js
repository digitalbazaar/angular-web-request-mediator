/*!
 * Permission dialog component.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    origin: '<wrmOrigin',
    permissions: '<wrmPermissions',
    onDeny: '&wrmOnDeny',
    onAllow: '&wrmOnAllow'
  },
  controller: Ctrl,
  templateUrl: 'angular-web-request-mediator/permission-dialog-component.html'
};

/* @ngInject */
function Ctrl($document) {
  const self = this;

  self.$onInit = () => {
    $document[0].addEventListener('keydown', listener);
  };

  self.$onDestroy = () => {
    $document[0].removeEventListener('keydown', listener);
  };

  function listener(event) {
    if(event.key === 'Escape') {
      event.preventDefault();
      self.onDeny();
    }
  }
}
