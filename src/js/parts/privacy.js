export class Privacy {
    init() {
        this.PrivacySection();
    }
    PrivacySection() {
        $(document).ready(function () {
            if ($(".privacy-section").length) {
                var links = $("#privacy-links a");
                var sections = links.map(function () {
                    return $($(this).attr("href"));
                });

                links.first().parent().addClass("active");

                $(window).scroll(function () {
                    var fromTop = $(this).scrollTop() + 100; // Offset added to improve accuracy

                    var currentSection = sections.map(function () {
                        if ($(this).offset().top <= fromTop) {
                            return this;
                        }
                    });

                    currentSection = currentSection[currentSection.length - 1];

                    if (currentSection) {
                        var activeId = "#" + $(currentSection).attr("id");

                        links.parent().removeClass("active");
                        links.filter("[href='" + activeId + "']").parent().addClass("active");
                    }
                });
            }
        });
    }
}