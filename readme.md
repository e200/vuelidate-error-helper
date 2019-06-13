# Vuelidate Error Helper

Easily get error messages from vuelidate with this helper

## Installation

`npm i vuelidate-error-helper -S`

## How to use

First add the package to your Vue app

```js
import Vue from 'vue'
import Vuelidate from 'vuelidate'

import VuelidateErrorHelper from 'vuelidate-error-helper'

import ptPt from 'vuelidate-error-helper/src/lang/pt-pt'


Vue.use(Vuelidate)

Vue.use(VuelidateErrorHelper, {
  lang: ptPt
})
```

```html
<template>
  <form>
    <label v-if="hasError($v.name)" for="name-input" class="error-label" v-text="firstError($v.name)" />

    <input id="name-input" placeholder="Name..." @input="$v.name.$touch()" />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import validatorMixin from 'vuelidate-error-helper/src/mixin'

export default {
  mixins: [validatorMixin],
  data() {
    return {
      name: null
    }
  },
  validations: {
    name: {
      required
    }
  }
}
</script>
```
