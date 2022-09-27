<template>
    <h2>My Rating {{ modelValue }}</h2>
    <div class="rating">
        <div class="rating-star" v-for="index in 5" :key="index" @click="handleClick(index)">
            <img src="/star.png" alt="" v-if="index <= modelValue">
            <img src="/un-star.png" alt="" v-if="index > modelValue">
        </div>
    </div>
</template>

<script>
    export default {
       props: {
        modelValue: {
            type: Number,
            default: 0,
        }
       },
       emits: ['update:modelValue'],
       methods: {
        handleClick(index){
            this.$emit('update:modelValue',index);
        }
       }
    }
</script>

<style>
.rating{
    display: flex;
    align-items: center;
}
.rating-star{
    cursor: pointer;
    margin: 2px;

}
</style>