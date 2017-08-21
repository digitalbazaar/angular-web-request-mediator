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
  templateUrl: 'angular-web-request-mediator/item-chooser-component.html'
};
