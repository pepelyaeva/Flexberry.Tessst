import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-tessst-new-class1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NewClass1Mixin, Validations, {
});

defineProjections(Model);

export default Model;
