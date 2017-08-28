/*!
 * Web Request Mediator module.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import ActivityBarComponent from './activity-bar-component.js';
import CloseButtonComponent from './close-button-component.js';
import HintComponent from './hint-component.js';
import HintChooserComponent from './hint-chooser-component.js';
import HintListComponent from './hint-list-component.js';
import PermissionDialogComponent from './permission-dialog-component.js';

const module = angular.module('web-request-mediator', []);

module.component('wrmActivityBar', ActivityBarComponent);
module.component('wrmCloseButton', CloseButtonComponent);
module.component('wrmHint', HintComponent);
module.component('wrmHintList', HintListComponent);
module.component('wrmHintChooser', HintChooserComponent);
module.component('wrmPermissionDialog', PermissionDialogComponent);
