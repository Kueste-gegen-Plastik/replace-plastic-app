<template>
    <div class="step step--1" id="step_1">
        <div class="step__number">
            1
        </div>
        <div class="step__line"></div>
        <form class="form" name="userdataform" v-on:submit="handleSubmit($event)">
            <fieldset class="form__fieldset">
                <legend class="form__legend">
                    Persönliche Daten eingeben
                </legend>
                <div class="step__inner">
                    <hr class="waves" />
                    <!-- div class="form__description">
                        <p>
                            Wir benötigen Deine persönlichen Angaben, damit wir den Herstellern
                            im Konfliktfall belegen können, dass Dein Feedback gültig
                            ist, und dass wir diese Meldungen nicht selbst erzeugt haben.
                        </p>
                        <p>
                            <strong>Wir geben Deine Daten nicht an Dritte weiter.</strong>
                        </p>
                    </div -->
                    <hr class="waves" />
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : firstname.length }" for="firstname">Vorname<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="firstname" :value="firstname" @input="updateUser($event, 'firstname')" />
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : name.length }" for="name">
                            Nachname
                            <sup title="Pflichtfeld">*</sup>
                        </label>
                        <input class="form__input" type="text" required="required" id="name" :value="name"  @input="updateUser($event, 'name')"/>
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : email.length }" for="email">E-Mail<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="email" required="required" id="email" :value="email" @input="updateUser($event, 'email')" />
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : zip.length }" for="zip">PLZ<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="zip" :value="zip" @input="updateUser($event, 'zip')" />
                    </div>
                    <button class="form__button" type="submit">
                        Speichern und weiter
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import config from '../../config/env.js';

export default {
    name: 'kgp-form',
    data() {
        return {};
    },
    computed: {
       firstname() {
           return this.$store.getters.user.firstname || '';
       },
       name() {
           return this.$store.getters.user.name || '';
       },
       email() {
           return this.$store.getters.user.email || '';
       },
       zip() {
           return this.$store.getters.user.zip || '';
       }
    },
    methods: {
        updateUser(e, type) {
            this.$store.dispatch('setUserKey', {
                type,
                val: e.target.value
            });
        },
        handleSubmit(e) {
            e.preventDefault();
            this.$store.dispatch('setUserKey', {
                type: 'password',
                val: config.userPassword
            });
            this.$router.push('/scan');
        }
    }
};
</script>
<style lang="scss">

.form {

  &__legend {
    font-family: 'Slabo 27px';
    font-size: 64px;
    border: none;
    padding: 0;
    margin: 0;
    margin-left: 4.347826087vw;
    padding-left: 10.0869565217vw;
  }
  &__description {
    font-style: italic;
    font-size: 30px;
  }
  &__fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  &__formrow {
    position: relative;
    padding: 2.5vh 0;
  }
  &__label {
    color: #033c6a;
    font-family: 'Slabo 27px';
    position: absolute;
    left: 30px;
    top: 3.2rem;
    transition: all .2s ease-out;
    sup {
      color: #f76259;
    }
    &--filled {
      top: -30px;
      left: 0;
      padding: 2px 5px;
      text-shadow: 2px 2px 2px #225a83;
      color: #fff;
    }
  }
  &__input {
    height: 8rem;
    width: calc(100% - 60px);
    border: none;
    border-bottom: 5px solid #033c6a;
    font-size: 40px;
    padding: 0 30px;
    font-family: 'Slabo 27px';
  }
  &__button {
    background: #f86259;
    color: #fff;
    font-family: 'Slabo 27px';
    font-size: 40px;
    border: none;
    border-bottom: 5px solid rgba(0,0,0,.17);
    padding: 1.7vh 5vw;
    margin-top: 2vh;
  }
}
</style>
