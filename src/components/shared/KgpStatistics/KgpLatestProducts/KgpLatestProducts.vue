<template>
    <div class="latest-items">
        <transition-group name="item-list" tag="ul" class="item-list">
            <li class="item-list__item item-list__item--date" v-for="product in products" v-bind:key="product.barcode">
                <div class="item-list__date" v-html="$options.filters.formatDate(product.createdAt)">
                </div>
                <div class="item-list__content">
                <strong class="item-list__product">{{ product.name }}<span v-if="product.detailname">: {{ product.detailname }}</span></strong><br>
                <strong>Anbieter:</strong> {{ product.vendor }}<br>
                <strong>Barcode:</strong> {{ product.barcode }}
                </div>
            </li>
        </transition-group>
    </div>
</template>
<script>
import { parse, format } from 'date-fns'

export default {
    name: 'kgp-latest-products',
    props: ['products'],
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
