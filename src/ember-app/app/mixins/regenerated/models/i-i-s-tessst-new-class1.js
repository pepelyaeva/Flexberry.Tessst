import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass1E', 'i-i-s-tessst-new-class1', {
    
  });

  modelClass.defineProjection('NewClass1L', 'i-i-s-tessst-new-class1', {
    
  });
};
