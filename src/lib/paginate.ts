interface PaginateInput<T = unknown> {
  items: T[]
  pageSize: number
  currentPage: number
}

export function paginate<T>({ items, pageSize, currentPage }: PaginateInput<T>) {
  return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize)
}
