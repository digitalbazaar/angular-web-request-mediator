/*!
 * Web Request Mediator module.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import ActivityBarComponent from './activity-bar-component.js';
import ItemChooserComponent from './item-chooser-component.js';
import PermissionDialogComponent from './permission-dialog-component.js';

const module = angular.module('web-request-mediator', []);

module.component('wrmActivityBar', ActivityBarComponent);
module.component('wrmItemChooser', ItemChooserComponent);
module.component('wrmPermissionDialog', PermissionDialogComponent);
