import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
      },

      footer: {
        'application-name': 'Tessst',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Tessst',
          title: 'Tessst',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
    },
    'i-i-s-tessst-new-class1-l': IISTessstNewClass1LForm,
    'i-i-s-tessst-new-class2-l': IISTessstNewClass2LForm,
    'i-i-s-tessst-new-class1-e': IISTessstNewClass1EForm,
    'i-i-s-tessst-new-class2-e': IISTessstNewClass2EForm,
  },

});

export default translations;
