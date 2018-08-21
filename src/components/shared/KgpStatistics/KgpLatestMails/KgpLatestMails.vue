<template>
    <div class="latest-items">
        <transition-group name="item-list" tag="ul" class="item-list">
            <li class="item-list__item item-list__item--date" v-for="mail in mails" v-bind:key="mail.vendorName">
                <div class="item-list__date" v-html="$options.filters.formatDate(mail.sentTime)">
                </div>
                <div class="item-list__content">
                    <strong class="item-list__product">
                        <span class="item-list__icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                                <g>
                                    <path fill="#FFFFFF" d="M27.02,7.507H4.981c-1.189,0-2.128,0.971-2.128,2.129v13.835c0,1.189,0.97,2.129,2.128,2.129H27.02
                                        c1.189,0,2.128-0.971,2.128-2.129V9.637C29.147,8.446,28.178,7.507,27.02,7.507z M26.61,8.76l-9.201,9.203
                                        c-0.784,0.782-2.036,0.782-2.818,0L5.388,8.76H26.61z M4.136,23.629c0-0.063-0.032-0.094-0.032-0.157V9.637
                                        c0-0.125,0.032-0.22,0.062-0.345l0.031,0.031l7.106,7.106L4.136,23.629z M5.169,24.348l7.043-7.043l1.534,1.535
                                        c0.626,0.625,1.44,0.939,2.285,0.939c0.846,0,1.66-0.314,2.286-0.939l1.439-1.44l6.951,6.948H5.169z M27.896,23.472
                                        c0,0.094-0.031,0.188-0.063,0.282l-7.229-7.231l7.198-7.2l0.031-0.031c0.032,0.094,0.063,0.22,0.063,0.345V23.472z"/>
                                </g>
                            </svg>
                        </span>
                        An: {{ mail.vendorName }}
                    </strong><br>
                    <strong>{{ mail.productCount }} Produkte:</strong>
                    <ul class="products-list">
                        <li class="products-list__item" v-for="product in mail.productTitles" v-bind:key="product">
                            {{ product }}
                        </li>
                    </ul>
                </div>
            </li>
        </transition-group>
    </div>
</template>
<script>
import { parse, format } from 'date-fns'

export default {
    name: 'kgp-latest-mails',
    props: ['mails'],
    filters: {
        formatDate(value) {
            if (!value) return '';
            value = parse(value);
            let dmy = format(value,'DD.MM.YYYY'),
                time = format(value, 'HH:mm')
            return `
                <span>
                    <span class="item-list__dmy">${dmy}</span>
                    <span class="item-list__time">${time}</span>
                </span>
            `;
        }
    }
}
</script>
<style lang="scss">
.products-list {
    padding: 0;
    margin: 10px 0 0 0;
    list-style: none;
    &__item {
        background: rgba(255,255,255,.1);
        padding: 5px;
        margin-bottom: 5px;
    }
}
</style>
