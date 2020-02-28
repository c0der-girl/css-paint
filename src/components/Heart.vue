<template>
  <div class="heart"/>
</template>

<script>
export default {
  name: 'Heart',
}
</script>

<style scoped lang="scss">
  .heart {
    background-color: $persian-red;
    height: 14px;
    transform: rotate(-45deg);
    width: 14px;
    margin: 0 7px;
    display: inline-block;

    &:before, &:after {
      content: '';
      background-color: $persian-red;
      border-radius: 50%;
      height: 14px;
      position: absolute;
      width: 14px;
    }

    &:before {
      top: -7px;
      left: 0;
    }
  }
</style>