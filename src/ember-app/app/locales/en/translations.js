import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTessstNewClass1LForm from './forms/i-i-s-tessst-new-class1-l';
import IISTessstNewClass2LForm from './forms/i-i-s-tessst-new-class2-l';
import IISTessstNewClass1EForm from './forms/i-i-s-tessst-new-class1-e';
import IISTessstNewClass2EForm from './forms/i-i-s-tessst-new-class2-e';
import IISTessstNewClass1Model from './models/i-i-s-tessst-new-class1';
import IISTessstNewClass2Model from './models/i-i-s-tessst-new-class2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tessst-new-class1': IISTessstNewClass1Model,
    'i-i-s-tessst-new-class2': IISTessstNewClass2Model,
  },

  'application-name': 'Tessst',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Tessst',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Tessst',
          title: 'Tessst',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        tessst: {
          caption: 'Tessst',
          title: 'Tessst',
          'i-i-s-tessst-new-class1-l': {
            caption: 'New class1',
            title: '',
          },
          'i-i-s-tessst-new-class2-l': {
            caption: 'New class2',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-tessst-new-class1-l': IISTessstNewClass1LForm,
    'i-i-s-tessst-new-class2-l': IISTessstNewClass2LForm,
    'i-i-s-tessst-new-class1-e': IISTessstNewClass1EForm,
    'i-i-s-tessst-new-class2-e': IISTessstNewClass2EForm,
  },

});

export default translations;
