export const changeActivePage = (page, props, scrollEl) => {
    if (scrollEl) scrollEl.scrollTop = 0;
    props.updateActivePage(page)
}