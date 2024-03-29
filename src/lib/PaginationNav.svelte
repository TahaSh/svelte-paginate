<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { generateNavigationOptions } from './generateNavigationOptions'
  import { SymbolType } from './types'
  import type { NavigationOption } from './types'

  const dispatch = createEventDispatcher()

  export let totalItems = 0
  export let pageSize = 1
  export let currentPage = 1
  export let limit: number | undefined = undefined
  export let showStepOptions = false

  $: options = generateNavigationOptions({
    totalItems,
    pageSize,
    currentPage,
    limit,
    showStepOptions
  })

  $: totalPages = Math.ceil(totalItems / pageSize)

  function handleOptionClick (option: NavigationOption) {
    dispatch('setPage', { page: option.value })
  }
</script>

<div class="pagination-nav">
  {#each options as option}
    <span
      class="option"
      class:number="{option.type === 'number'}"
      class:prev="{option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE}"
      class:next="{option.type === 'symbol' && option.symbol === SymbolType.NEXT_PAGE}"
      class:disabled="{
        (option.type === 'symbol' && option.symbol === SymbolType.NEXT_PAGE && currentPage >= totalPages) ||
        (option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE && currentPage <= 1)
      }"
      class:ellipsis="{option.type === 'symbol' && option.symbol === SymbolType.ELLIPSIS}"
      class:active="{option.type === 'number' && option.value === currentPage}"
      role="presentation"
      on:click="{() => handleOptionClick(option)}"
    >
      {#if option.type === 'number'}
        <slot name="number" value="{option.value}">
          <span>{option.value}</span>
        </slot>
      {:else if option.type === 'symbol' && option.symbol === SymbolType.ELLIPSIS}
        <slot name="ellipsis">
          <span>...</span>
        </slot>
      {:else if option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE}
        <slot name="prev">
          <svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
        </slot>
      {:else if option.type === 'symbol' && option.symbol === SymbolType.NEXT_PAGE}
        <slot name="next">
          <svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </slot>
      {/if}
    </span>
  {/each}
</div>