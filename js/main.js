var CardProduct = {
    init: function () {
        this.info_tabs();
        this.product_imges();
        $('.card-product_img-gallery_preview').flexslider({
            animation: "slide",
            animationLoop: false,
            customDirectionNav: $(".card-product_list-img_nav"),
            itemWidth: 72
        });
        $(".popup-gallery").fancybox();
        $(".text-popup").fancybox({
            maxWidth    : 800,
            maxHeight   : 600,
            width       : '70%',
            height      : '70%',
            autoSize    : false
        });
    },

    info_tabs: function () {
        var $product_info_header = $(".card-product_info_header_item");
        var $product_info_section = $(".card-product_info_section");
        var active_header_class = "card-product_info_header_item--active";
        var active_section_class = "card-product_info_section--active";
        $product_info_header.each(function (index) {
            $(this).click(function () {
                $product_info_header.removeClass(active_header_class);
                $product_info_section.removeClass(active_section_class);
                $(this).addClass(active_header_class);
                $product_info_section.eq(index).addClass(active_section_class);
            });
        });
    },

    product_imges: function () {
        var $images_icon = $(".card-product_nav-img");
        var $images = $(".card-product_img_flink");

        var $next = $(".card-product_list-img_nav-next");
        var $prev = $(".card-product_list-img_nav-prev");
        if ($images_icon.length <= 3) {
            $next.hide();
            $prev.hide();
        }

        $images_icon.each(function (index) {
            $(this).click(function () {
                $images_icon.removeClass("card-product_nav-img--active");
                $images.fadeOut();
                $(this).addClass("card-product_nav-img--active");
                $images.eq(index).fadeIn();
            });
        });

    }
};

var Catalog = {
    $products: null,

    init: function () {
        this.$products = $(".product");
        this.$products.maxHeight();
        this.bind();
    },

    bind: function () {
        var self = this;
        $(window).resize(function(){
            self.$products.css({"height":"auto"});
            self.$products.maxHeight();
        });
    }
};

(function ($) {
    $.fn.maxHeight = function () {
        var maxHeight = "0px";
        $(this).each(function(index){
            var height = $(this).css("height");
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        $(this).css({"height":maxHeight});
    };
})(jQuery);