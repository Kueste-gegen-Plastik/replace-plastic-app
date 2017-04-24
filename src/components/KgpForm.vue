<template>
  <div class="step">
    <div class="step__number">
      1
    </div>
    <div class="step__line"></div>
    <form class="form" name="userdataform" :submit="handleSubmit">
      <fieldset class="form__fieldset">
        <legend class="form__legend">
          Persönliche Daten eingeben
        </legend>
        <hr class="waves" />
        <div class="form__description">
          <p>
            Wir benötigen Deine persönlichen Angaben, damit wir den Herstellern im Konfliktfall belegen können, dass Dein Feedback gültig ist, und dass wir diese Meldungen nicht selbst erzeugt haben.
          </p>
          <p>
            <strong>Wir geben Deine Daten nicht an Dritte weiter.</strong>
          </p>
        </div>
        <hr class="waves" />
        <div class="form__formrow">
          <label class="form__label" for="firstname">Vorname<sup title="Pflichtfeld">*</sup></label>
          <input class="form__input" type="text" required="required" id="firstname" v-model="firstname" />
        </div>
        <div class="form__formrow">
          <label class="form__label" for="name">Nachname<sup title="Pflichtfeld">*</sup></label>
          <input class="form__input" type="text" required="required" id="name" v-model="name" />
        </div>
        <div class="form__formrow">
          <label class="form__label" for="email">E-Mail<sup title="Pflichtfeld">*</sup></label>
          <input class="form__input" type="email" required="required" id="email" v-model="email" />
        </div>
        <div class="form__formrow">
          <label class="form__label" for="zip">PLZ<sup title="Pflichtfeld">*</sup></label>
          <input class="form__input" type="text" required="required" id="zip" v-model="zip" />
        </div>
        <button class="form__button" type="submit">
          Speichern und weiter
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'kgp-form',
  data() {
    return {
      firstname: '',
      name: '',
      email: '',
      zip: '',
    };
  },
};
</script>

<style lang="scss">
.header {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  text-align: center;
  &__logo {
    max-width: 100%;
    height: 9vh;
    stroke: #033c6a;
    fill: transparent;
    margin-top: .5vh;
  }
  &__border {
    background: url('../assets/header-border.png') 0 0 repeat-x;
    position: absolute;
    bottom: -16px;
    width: 100%;
    height: 17px;
  }
}
</style>
