/*!
 * Web Request Mediator module.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import PermissionDialogComponent from './permission-dialog-component.js';

const module = angular.module('web-request-mediator', []);

module.component('wrmPermissionDialog', PermissionDialogComponent);
