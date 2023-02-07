const REQUIRED_FIELD = 'Обязательно для заполнения';

export const loginValidation = {
  requred: REQUIRED_FIELD,
  validate: (value: string) => {

    if (value.match(/[а-яА-я]/)) {
      return 'Логин не может содержать русские буквы'
    }

    return true;
  }
};

export const passwordValidation = {
  requred: REQUIRED_FIELD,
  validate: (value: string) => {

    if (value.match(/[а-яА-я]/)) {
      return 'Пароль не может содержать русские буквы'
    }

    if (value.length < 6) {
      return 'Пароль должен быть длиннее 6-ти символов'
    }

    return true;
  }
};
