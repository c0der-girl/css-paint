<template>
  <div class="donkey">
    <div class="head">
      <div class="ear left">
        <div class="inner">
          <div class="tufts">
            <div class="tuft"></div>
            <div class="tuft"></div>
          </div>
        </div>
      </div>
      <div class="ear right">
        <div class="inner">
          <div class="tufts">
            <div class="tuft"></div>
            <div class="tuft"></div>
          </div>
        </div>
      </div>

      <div class="skull">
        <div class="hairs">
          <div class="hair"></div>
          <div class="hair"></div>
          <div class="hair"></div>
          <div class="hair"></div>
        </div>
      </div>

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

      <div class="snout">
        <div class="nose left"></div>
        <div class="nose right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donkey',
};
</script>

<style scoped lang="scss">
  $fur-color: #808B96;
  $fur-shading-color: #ABB2B9;
  $hair-color: #2C3E50;
  $nose-color: #212F3D;
  $iris-color: #1C2833;

  .donkey {
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;

    .head {
      width: 100%;
      height: 100%;
      transform: rotate(-10deg);

      .ear {
        position: absolute;
        width: 20%;
        height: 40%;
        background: linear-gradient(180deg, $hair-color 0%, $fur-color 30%);

        &.left {
          left: 20%;
          transform: rotate(-15deg);
          border-radius: 20% 80% 50% 50% / 75% 65% 35% 25%;

          .inner {
            left: 11%;
            border-radius: 20% 80% 50% 50% / 75% 65% 35% 25%;

            .tufts .tuft {
              &:nth-of-type(1) {
                right: 5%;
                width: 20%;
                height: 25%;
                bottom: 9%;
                transform: rotate(-10deg);
              }

              &:nth-of-type(2) {
                right: 25%;
                width: 18%;
                height: 19%;
                bottom: 5%;
                transform: rotate(-35deg);
              }
            }
          }
        }

        &.right {
          right: 15%;
          transform: rotate(15deg);
          border-radius: 65% 35% 50% 50% / 75% 65% 35% 25%;

          .inner {
            right: 11%;
            border-radius: 65% 35% 50% 50% / 75% 65% 35% 25%;

            .tufts .tuft {
              border-radius: 80% 20% 75% 25% / 75% 80% 20% 25%;

              &:nth-of-type(1) {
                left: 5%;
                width: 15%;
                height: 25%;
                bottom: 9%;
                transform: rotate(10deg);
              }

              &:nth-of-type(2) {
                left: 25%;
                width: 20%;
                height: 25%;
                bottom: 5%;
                transform: rotate(33deg);
              }
            }
          }
        }

        .inner {
          position: absolute;
          top: 18%;
          width: 75%;
          height: 75%;
          background: linear-gradient(180deg, $fur-color 0%, $fur-shading-color 30%);
        }

        .tufts .tuft {
          position: absolute;
          background-color: $fur-color;
          border-radius: 20% 80% 25% 75% / 80% 75% 25% 20%;
        }
      }

      .skull {
        position: absolute;
        top: 25%;
        width: 45%;
        height: 75%;
        left: 30%;
        background: linear-gradient(180deg, $hair-color 0%, $fur-color 30%);
        border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;

        .hairs .hair {
          position: absolute;
          background-color: $hair-color;
          border-radius: 20% 80% 25% 75% / 80% 75% 25% 20%;

          &:nth-of-type(1) {
            width: 10%;
            height: 20%;
            left: 40%;
            top: -15%;
            transform: rotate(-30deg);
          }

          &:nth-of-type(2) {
            width: 11%;
            height: 22%;
            left: 45%;
            top: -19%;
          }

          &:nth-of-type(3) {
            width: 8%;
            height: 18%;
            left: 35%;
            top: -11%;
            transform: rotate(-68deg);
          }

          &:nth-of-type(4) {
            width: 12%;
            height: 18%;
            left: 50%;
            top: -14%;
            border-radius: 80% 20% 75% 25% / 75% 80% 20% 25%;
            transform: rotate(15deg);
          }
        }
      }

      .eye {
        position: absolute;
        width: 15%;
        height: 15%;
        background: linear-gradient(180deg, $fur-color 0%, $fur-shading-color 30%);

        &.left {
          top: 47%;
          left: 32%;
          border-radius: 65% 35% 35% 65% / 50% 50% 50% 50%;
        }

        &.right {
          top: 47%;
          right: 27%;
          border-radius: 35% 65% 65% 35% / 50% 50% 50% 50%;
        }

        .iris {
          position: absolute;
          left: 45%;
          width: 50%;
          height: 50%;
          bottom: 15%;
          background: $iris-color;
          border-radius: 50%;

          .pupil {
            position: absolute;
            top: 30%;
            right: 0;
            height: 35%;
            width: 35%;
            background: $fur-shading-color;
            border-radius: 50%;
          }

          &:after {
            content: '';
            position: absolute;
            top: -3%;
            left: 0;
            height: 0;
            width: 100%;
            background: $fur-shading-color;
            border-radius: 50%;
            animation: blink 5s infinite ease-in;
          }

          @keyframes blink {
            80% {
              height: 0;
            }
            85% {
              height: 100%;
            }
            90% {
              height: 0;
            }
            95% {
              height: 100%;
            }
            100% {
              height: 0;
            }
          }
        }
      }

      .snout {
        position: absolute;
        left: 35%;
        top: 70%;
        width: 35%;
        height: 35%;
        background: linear-gradient(180deg, $fur-color 0%, $fur-shading-color 30%);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

        .nose {
          position: absolute;
          width: 15%;
          height: 25%;
          background-color: $nose-color;
          border-radius: 50% 50% 50% 50% / 45% 45% 55% 55%;

          &.left {
            top: 45%;
            left: 25%;
            transform: rotate(-20deg);

            &:after {
              left: 0;
            }
          }

          &.right {
            top: 45%;
            right: 25%;
            transform: rotate(20deg);

            &:after {
              right: 0;
            }
          }

          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 70%;
            width: 70%;
            background: $fur-shading-color;
            border-radius: 50% 50% 50% 50% / 45% 45% 55% 55%;
          }
        }
      }
    }
  }
</style>