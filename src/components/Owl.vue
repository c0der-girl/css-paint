<template>
  <div class="owl">
    <div class="body"></div>
    <div class="head">
      <div class="face">
        <div class="tufts">
          <div class="tuft right"></div>
          <div class="tuft right"></div>
          <div class="tuft left"></div>
        </div>
        <div class="brow left"></div>
        <div class="brow right"></div>
        <div class="eye left">
          <div class="iris">
            <div class="pupil"></div>
          </div>
        </div>
        <div class="eye right">
          <div class="iris">
            <div class="pupil"></div>
          </div>
        </div>
        <div class="beak"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Owl',
};
</script>

<style scoped lang="scss">
  $feather-color: #613E0C;
  $base-color: #F5E7D2;
  $beak-color: #5B5853;
  $iris-color: #F1BC17;
  $pupil-color: #140F00;

  .owl {
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;

    .head {
      width: 100%;
      height: 100%;
      animation: rotate-head 10s infinite;

      .face {
        width: 100%;
        height: 80%;
        background: radial-gradient($base-color, $base-color, $feather-color);
        border-radius: 50%;

        .tufts .tuft {
          position: absolute;
          background: $feather-color;

          &.left {
            border-radius: 17% 83% 66% 34% / 67% 84% 16% 33%;
          }

          &.right {
            border-radius: 90% 10% 50% 50% / 84% 85% 15% 16%;
          }
        }

        .tufts .tuft {
          &:nth-of-type(1) {
            left: 44%;
            width: 8%;
            height: 15%;
            top: 0;
          }

          &:nth-of-type(2) {
            right: 39%;
            width: 6%;
            height: 12%;
            top: 3%;
            transform: rotate(21deg);
          }

          &:nth-of-type(3) {
            left: 35%;
            width: 7%;
            height: 12%;
            top: 3%;
            transform: rotate(-18deg);
          }
        }

        .brow {
          position: absolute;
          width: 45%;
          height: 45%;
          background: $feather-color;
          top: 10%;

          &.left {
            border-radius: 0 100% 25% 75% / 30% 70% 30% 70%;
            left: 5%;
          }

          &.right {
            border-radius: 100% 0 75% 25% / 70% 30% 70% 30%;
            right: 5%;
          }
        }

        .eye {
          width: 40%;
          height: 40%;
          position: absolute;

          &.left {
            border-radius: 50% 50% 40% 60% / 40% 50% 50% 60% ;
            background: linear-gradient(225deg, $feather-color 0%, $base-color 50%);
            top: 22%;
            left: 10%;

            .iris {
              top: 10%;
              left: 33%;
            }
          }

          &.right {
            border-radius: 50% 50% 60% 40% / 50% 40% 60% 50% ;
            background: linear-gradient(135deg, $feather-color 0%, $base-color 50%);
            top: 22%;
            right: 10%;

            .iris {
              top: 10%;
              right: 33%;
            }
          }

          .iris {
            position: absolute;
            width: 60%;
            height: 60%;
            border-radius: 50%;
            background: $iris-color;

            .pupil {
              position: absolute;
              width: 60%;
              height: 60%;
              border-radius: 50%;
              background: $pupil-color;
              top: 25%;
              left: 20%;
            }
          }
        }

        .beak {
          width: 10%;
          height: 20%;
          position: absolute;
          background: $beak-color;
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          top: 42%;
          left: 45%;
        }
      }

      @keyframes rotate-head {
        0% {
          transform: rotate(0);
        }
        50% {
          transform: rotate(55deg);
        }
        65% {
          transform: rotate(55deg);
        }
        85% {
          transform: rotate(0);
        }
      }
    }

    .body {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, $feather-color 0%, $base-color 30%, $base-color 70%, $feather-color 100%);
      border-radius: 50% 50% 0 100% / 100% 100% 0 0;
    }
  }
</style>