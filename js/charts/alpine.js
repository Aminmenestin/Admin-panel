document.addEventListener('alpine:init', () => {
    Alpine.data('togglesidebar', () => ({
            open: window.innerWidth <= 992 ? false : true,

            toggle() {
                this.open = !this.open
            }
        })),

        Alpine.data('dropdown', () => ({
            open: false,

            toggle() {
                this.open = !this.open
            }
        }))
})