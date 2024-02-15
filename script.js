Vue.component('gallery', {
  template: '#gallery_template',
  props: {
    images: Array
  },
  data() {
    return {
      x: '50%',
      y: '50%'
    }
  },
  methods: {
    onClick(event) {
      const x = event.offsetX - event.target.offsetLeft
      const y = event.offsetY - event.target.offsetTop
      const xPercent = `${Math.round(100 * x / event.target.offsetWidth)}%`
      const yPercent = `${Math.round(100 * y / event.target.offsetHeight)}%`
      this.x = xPercent
      this.y = yPercent
      this.$emit('next', {x: xPercent, y: yPercent})
    }
  }
})
const vm = new Vue({
  el: '#main',
  data: {
    images: [
      './imagery/image1.jpg',
      './imagery/image2.jpg',
      './imagery/image3.jpg',
      './imagery/image4.jpg',
      './imagery/image5.jpg',
      './imagery/image6.jpg',
      './imagery/image7.jpg',
      './imagery/image8.jpg'
        
    ]
  },
   methods: {
    next() {
      const image = this.images.shift()
      this.$nextTick(() => this.images.push(image))
    }
  }
})
