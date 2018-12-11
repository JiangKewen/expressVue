<template>
  <div class="curveBox">
    <div class="aquaman">海王</div>
    <canvas id="myCanvas" width="787" height="794"></canvas>
  </div>
</template>
<script>
import curvejs from 'curvejs'
export default {
  data () {
    return {}
  },
  methods: {
    init () {
      let Stage = curvejs.Stage
      let Curve = curvejs.Curve
      let canvas = document.getElementById('myCanvas')
      let stage = new Stage(canvas)
      let rd = () => { return -2 + Math.random() * 2 }
      let curve = new Curve({
        color: '#00FF00',
        points: [277, 327, 230, 314, 236, 326, 257, 326],
        data: [rd(), rd(), rd(), rd(), rd(), rd(), rd(), rd()],
        motion: function motion (points, data) {
          points.forEach(function (item, index) {
            points[index] += data[index]
          })
        }
      })
      stage.add(curve)
      function tick () {
        stage.update()
        requestAnimationFrame(tick)
      }
      tick()
    }, // init结束
    init2 () {
      const { Stage, Curve, motion } = curvejs
      let stage = new Stage(document.getElementById('myCanvas'))
      stage.add(new Curve({
        color: '#00FF00',
        data: {value: 0, step: 0.008, width: 600, height: 400},
        motion: motion.noise
      }))
      function tick () {
        stage.update()
        requestAnimationFrame(tick)
      }
      tick()
    }
  },
  mounted () {
    this.init2()
  }
}
</script>
<style lang="scss" scoped>
.curveBox {
  padding: 100px 200px;
  box-sizing: border-box;
  position: relative;
  .aquaman {
    font-size: 200px;
    font-weight: 100;
    position: absolute;
    top: 200px;
    left: 200px;
  }
  // #myCanvas {
  //   width: 500px;
  //   height: 500px;
  // }
}
</style>
