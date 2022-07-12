export default function ({ items, pageSize, currentPage }) {
    return items
        .slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
}
//# sourceMappingURL=paginate.js.map