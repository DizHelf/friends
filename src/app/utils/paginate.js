export function paginate(pageSize, currentPage, users) {
    const startIndex = currentPage*pageSize - pageSize;
    return [...users].splice(startIndex, pageSize)
}