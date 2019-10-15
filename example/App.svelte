<script>
  import {
    paginate,
    LightPaginationNav,
    DarkPaginationNav
  } from '../src'
  import { fade } from 'svelte/transition'

  let items = new Array(50)
    .fill(null)
    .map((value, index) => ({
      title: `Item ${index + 1}`
    }))
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>

<main>
  <ul class="items">
    {#each paginatedItems as item (item.title)}
    <li
      out:fade="{{duration: 200}}"
      in:fade="{{delay: 200}}"
      class="item"
    >
      {item.title}
    </li>
    {/each}
  </ul>

  <LightPaginationNav
    currentPage={currentPage}
    pageSize={pageSize}
    totalItems={items.length}
    limit="{1}"
    showStepOptions="{true}"
    on:setPage={(e) => currentPage = e.detail.page}
  />
  <DarkPaginationNav
    currentPage={currentPage}
    pageSize={pageSize}
    totalItems={items.length}
    limit="{1}"
    showStepOptions="{true}"
    on:setPage={(e) => currentPage = e.detail.page}
  />
</main>

<style>
  main {
    max-width: 600px;
    width: calc(100% - 20px);
    margin: 0 auto;
  }
  .items {
    color: hsl(40, 95%, 95%);
    padding: 0;
    margin: 20px 0;
    height: 260px;
    overflow: hidden;
  }
  .item {
    padding: 15px;
    font-size: 20px;
    background: hsl(220, 50%, 15%);
    border-radius: 3px;
    display: flex;
    align-items: center;
  }
  .item:before {
    content: '';
    width: 6px;
    height: 6px;
    background: #FFF;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
  .item + .item {
    margin-top: 10px;
  }
  main :global(.light-pagination-nav),
  main :global(.dark-pagination-nav) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
</style>