import BackTop from "components/content/backtop/BackTop.vue"

export const backTopMixin = {
  data(){
    return {
      isShowBackTop:false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    topClick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    listenerBackTop(position){
      this.isShowBackTop = -position.y>1000
    }
  }
}
