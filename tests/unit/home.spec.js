import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('checkSum is calculating correctly', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData({ barcodeNumber: 5489850354 })
    expect(wrapper.vm.checkSumValue).toBe(7)
    wrapper.setData({ barcodeNumber: 4823 })
    expect(wrapper.vm.checkSumValue).toBe(1)
    wrapper.setData({ barcodeNumber: 1234 })
    expect(wrapper.vm.checkSumValue).toBe(2)
    wrapper.setData({ barcodeNumber: 12345 })
    expect(wrapper.vm.checkSumValue).toBe(7)
  })
})
