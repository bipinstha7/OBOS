import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/Home.vue'

describe('Heome.vue', () => {
    it('loads burger builder components', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
