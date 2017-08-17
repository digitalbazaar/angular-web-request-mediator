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
  templateUrl: 'angular-web-request-mediator/permission-dialog-component.html'
};
