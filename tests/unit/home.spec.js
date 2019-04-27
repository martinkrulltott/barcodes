import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('checkSum is calculating correctly', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData({ barcodeNumber: 5489850354 })
    expect(wrapper.vm.checkSumValue).toBe(3)
  })
})
