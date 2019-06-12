export default {
  messages: {
    required() {
      return 'Este campo é obrigatório'
    },
    requiredIf() {
      return 'Este campo é obrigatório'
    },
    minLength(rule) {
      return `Este campo requer no mínimo ${rule.min} carácteres`
    },
    maxLength(rule) {
      return `Este campo requer no máximo ${rule.max} carácteres`
    },
    email() {
      return 'Isto não parece um email válido'
    },
  }
}
