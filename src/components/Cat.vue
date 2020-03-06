<template>
  <div class="cat">
    <div class="head">
      <div class="ear left">
        <div class="tufts">
          <div class="tuft left"></div>
          <div class="tuft left"></div>
        </div>
        <div class="inner">
          <div class="tufts">
            <div class="tuft left"></div>
            <div class="tuft left"></div>
          </div>
        </div>
      </div>

      <div class="ear right">
        <div class="tufts">
          <div class="tuft right"></div>
          <div class="tuft right"></div>
        </div>
        <div class="inner">
          <div class="tufts">
            <div class="tuft right"></div>
            <div class="tuft right"></div>
            <div class="tuft left"></div>
          </div>
        </div>
      </div>

      <div class="skull">
        <div class="eye left">
          <div class="pupil"></div>
        </div>
        <div class="eye right">
          <div class="pupil"></div>
        </div>

        <div class="nose"></div>

        <div class="mouth left"></div>
        <div class="mouth right"></div>

        <div class="tufts">
          <div class="tuft right"></div>
          <div class="tuft right"></div>
          <div class="tuft left"></div>
        </div>

        <div class="whiskers">
          <div class="whisker left"></div>
          <div class="whisker left"></div>
          <div class="whisker left"></div>
          <div class="whisker left"></div>
          <div class="whisker left"></div>
          <div class="whisker right"></div>
          <div class="whisker right"></div>
          <div class="whisker right"></div>
          <div class="whisker right"></div>
          <div class="whisker right"></div>
        </div>
      </div>
    </div>

    <div class="edge"></div>

    <div class="paw left">
      <div class="toe left"></div>
      <div class="toe right"></div>
    </div>
    <div class="paw right">
      <div class="toe left"></div>
      <div class="toe right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cat',
};
</script>

<style scoped lang="scss">
  $fur-color: #F8C471;
  $whisker-color: #935116;
  $nose-color: #F5B7B1;
  $eye-color: #EAECEE;
  $iris-color: #2980B9;

  .cat {
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;

    .head {
      width: 100%;
      height: 100%;
      transform: rotate(5deg);

      .ear {
        position: absolute;
        width: 25%;
        height: 30%;
        background: linear-gradient(78deg, $whisker-color 0%, $fur-color 30%);

        &.left {
          left: 0;
          border-radius: 80% 20% 73% 27% / 70% 84% 16% 30%;
          transform: rotate(-15deg);

          .tufts .tuft {
            &:nth-of-type(1) {
              top: -10%;
              right: 9%;
              width: 10%;
              height: 20%;
              transform: rotate(25deg);
            }

            &:nth-of-type(2) {
              top: -10%;
              right: 20%;
              width: 9%;
              height: 17%;
            }
          }

          .inner {
            left: 10%;
            border-radius: 80% 20% 73% 27% / 70% 84% 16% 30%;

            .tufts .tuft {
              &:nth-of-type(1) {
                top: 48%;
                right: 5%;
                width: 15%;
                height: 22%;
                transform: rotate(-12deg);
              }

              &:nth-of-type(2) {
                top: 54%;
                right: 16%;
                width: 13%;
                height: 20%;
                transform: rotate(-33deg);
              }
            }
          }
        }

        &.right {
          right: 0;
          border-radius: 16% 84% 49% 51% / 80% 65% 35% 20%;
          transform: rotate(20deg);

          .tufts .tuft {
            &:nth-of-type(1) {
              top: -10%;
              left: 10%;
              width: 10%;
              height: 20%;
            }

            &:nth-of-type(2) {
              top: -10%;
              left: 18%;
              width: 8%;
              height: 18%;
              transform: rotate(30deg);
            }
          }

          .inner {
            right: 10%;
            border-radius: 16% 84% 49% 51% / 80% 65% 35% 20%;

            .tufts .tuft {
              &:nth-of-type(1) {
                left: -1%;
                width: 14%;
                height: 21%;
                top: 50%;
              }

              &:nth-of-type(2) {
                left: 12%;
                width: 12%;
                height: 19%;
                top: 56%;
                transform: rotate(10deg);
              }

              &:nth-of-type(3) {
                right: 9%;
                width: 12%;
                height: 16%;
                bottom: 11%;
              }
            }
          }
        }

        .inner {
          position: absolute;
          top: 10%;
          width: 75%;
          height: 80%;
          background: $whisker-color;
        }
      }

      .skull {
        position: absolute;
        top: 10%;
        width: 100%;
        height: 60%;
        background: linear-gradient(175deg, $whisker-color 0%, $fur-color 30%);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

        .eye {
          position: absolute;
          top: 28%;
          width: 33%;
          height: 30%;
          background: $eye-color;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

          &.left {
            left: 15%;

            .pupil {
              left: 60%;
            }
          }

          &.right {
            right: 15%;

            .pupil {
              right: 60%;
            }
          }
        }

        .pupil {
          position: absolute;
          width: 15%;
          height: 50%;
          bottom: 10%;
          background: $iris-color;
          border-radius: 50%;
          animation: move-pupils 5s infinite;

          &:after {
            content: '';
            position: absolute;
            top: 30%;
            right: -5%;
            height: 20%;
            width: 35%;
            background: $eye-color;
            border-radius: 50%;
          }

          @keyframes move-pupils {
            0% {
              transform: translate(0)
            }
            5% {
              transform: translate(-100%, -25%)
            }
            10% {
              transform: translate(50%, -25%)
            }
            20% {
              transform: translate(-100%, -25%)
            }
            25% {
              transform: translate(0, 0)
            }
          }
        }

        .nose {
          position: absolute;
          top: 55%;
          left: 46%;
          height: 4%;
          width: 8%;
          background: $nose-color;
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          z-index: 2;
        }

        .mouth {
          position: absolute;
          top: 59%;
          height: 6%;
          width: 10%;
          border-radius: 0 0 50% 50%;
          border: 0 solid $whisker-color;

          &.left {
            left: 40%;
            border-right-width: 1px;
            border-bottom-width: 3px;
          }

          &.right {
            right: 40%;
            border-bottom-width: 3px;
            border-left-width: 1px;
          }
        }

        .tufts .tuft {
          &:nth-of-type(1) {
            left: -5%;
            width: 10%;
            height: 9%;
            top: 57%;
          }

          &:nth-of-type(2) {
            left: -2%;
            width: 9%;
            height: 9%;
            top: 63%;
            transform: rotate(-22deg);
          }

          &:nth-of-type(3) {
            right: -4%;
            width: 10%;
            height: 11%;
            top: 53%;
          }
        }

        .whiskers .whisker {
          &:nth-of-type(1) {
            top: 40%;
            width: 35%;
            left: -20%;
            transform: rotate(29deg);
          }

          &:nth-of-type(2) {
            top: 51%;
            width: 33%;
            left: -19%;
            transform: rotate(15deg);
          }

          &:nth-of-type(3) {
            top: 60%;
            left: -16%;
            width: 30%;
            transform: rotate(3deg);
          }

          &:nth-of-type(4) {
            top: 3%;
            width: 30%;
            left: 19%;
            transform: rotate(58deg);
          }

          &:nth-of-type(5) {
            top: 5%;
            width: 25%;
            left: 26%;
            transform: rotate(69deg);
          }

          &:nth-of-type(6) {
            top: 3%;
            width: 28%;
            left: 53%;
            transform: rotate(-60deg);
          }

          &:nth-of-type(7) {
            top: 40%;
            width: 33%;
            right: -18%;
            transform: rotate(-30deg);
          }

          &:nth-of-type(8) {
            top: 48%;
            width: 35%;
            right: -21%;
            transform: rotate(-17deg);
          }

          &:nth-of-type(9) {
            top: 55%;
            right: -20%;
            width: 34%;
            transform: rotate(-8deg);
          }

          &:nth-of-type(10) {
            top: 60%;
            right: -16%;
            width: 30%;
            transform: rotate(-1deg);
          }
        }
      }
    }

    .tufts .tuft {
      position: absolute;
      background: $fur-color;

      &.left {
        border-radius: 17% 83% 66% 34% / 67% 84% 16% 33%;
      }

      &.right {
        border-radius: 90% 10% 50% 50% / 84% 85% 15% 16%;
      }
    }

    .whiskers .whisker {
      position: absolute;
      height: 10%;
      border: 0 solid $whisker-color;
      border-top-width: 3px;

      &.left {
        border-radius: 50% 0 0 0;
      }

      &.right {
        border-radius: 0 50% 0 0;
      }
    }

    .edge {
      position: absolute;
      top: 65%;
      width: 100%;
      height: 15%;
      background: $midnight-express;
    }

    .paw {
      position: absolute;
      top: 60%;
      width: 25%;
      height: 15%;
      background: linear-gradient(175deg, $whisker-color 0%, $fur-color 30%);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

      &.left {
        transform: rotate(-3deg);
      }

      &.right {
        right: 0;
        transform: rotate(5deg);
      }
    }

    .toe {
      position: absolute;
      top: 61%;
      height: 10%;
      width: 33%;
      border-radius: 50% 50% 0 0;
      border: 0 solid $whisker-color;
      border-top-width: 3px;

      &.left {
        left: 10%;
        transform: rotate(-81deg);
      }

      &.right {
        right: 10%;
        transform: rotate(81deg);
      }
    }
  }
</style>