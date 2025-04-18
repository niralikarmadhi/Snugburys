export class Accordion {
    init() {
        this.Accordion();
    }
    Accordion() {
        $(document).ready(function () {
            // Open the first child by default
            $('.closet-header').first().addClass('active')
                .closest('.accordion-item').addClass('active') // Add to accordion-item
                .find('.closet-content').slideDown();

            // Handle click events for closet headers
            $('.closet-header').click(function () {
                const $this = $(this);
                const $parentItem = $this.closest('.accordion-item');

                // Toggle clicked item
                const isActive = $this.hasClass('active');

                // Remove active from all
                $('.closet-header').removeClass('active');
                $('.accordion-item').removeClass('active');
                $('.closet-content').slideUp();

                // Add active if it wasn't active before
                if (!isActive) {
                    $this.addClass('active');
                    $parentItem.addClass('active');
                    $this.next('.closet-content').slideDown();
                }
            });
        });

    }
}