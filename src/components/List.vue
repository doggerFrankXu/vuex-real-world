<template>
    <div>
        <!-- todo how to deal with v-for key -->
        <slot name="item" v-for="item in items" :item-props="item">
        </slot>
    </div>
</template>
<script src="./List.js">
</script>
