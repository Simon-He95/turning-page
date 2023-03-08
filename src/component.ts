// @unocss-include
import { defineComponent, h } from 'vue'
import { addStyle } from 'lazy-js-utils'
import type { DefineComponent, PropType } from 'vue'
import type { Props } from './types'

try {
  addStyle(`
  #__turning_page__:hover>li:not(:last-child) {
    transform: rotateY(-180deg);
    transition: var(--un-hover-transition) !important;
  }
  `)
}
catch (error) {

}

export const TurningPage = defineComponent({
  name: 'TurningPage',
  props: {
    images: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    return () => h('ul', {
      id: '__turning_page__',
      class: 'relative w-70 h-100 list-none ma transform-preserve-3d perspective-900px hover:translate-x-150px transition-1500',
    },
    props.images.map((src, i) => h('li', {
      key: src,
      class: 'absolute origin-left rotate-y-[--un-rotate-y] bg-[url(--un-url)]  w-full h-full bg-contain shadow-[1px_4px_5px_rgba(0,0,0,0.2)]',
      style: { '--un-url': `url(${src})`, '--un-rotate-y': `${i * 2 - 26}deg`, 'transition': `${2000 - i * 300}ms`, '--un-hover-transition': `${i * 0.6 + 1.4}s` },
    })),
    )
  },
}) as DefineComponent<Props>
