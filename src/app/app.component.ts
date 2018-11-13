import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Home';

  ngOnInit() {

    $('.js-select2').each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

    $('.parallax100').parallax100();

    $('.gallery-lb').each(function () { // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        },
        mainClass: 'mfp-fade'
      });
    });

    $('.js-addwish-b2').on('click', function (e) {
      e.preventDefault();
    });

    $('.js-addwish-b2').each(function () {
      const nameProduct = $(this).parent().parent().find('.js-name-b2').html();
      $(this).on('click', function () {
        swal(nameProduct, 'is added to wishlist !', 'success');

        $(this).addClass('js-addedwish-b2');
        $(this).off('click');
      });
    });

    $('.js-addwish-detail').each(function () {
      const nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

      $(this).on('click', function () {
        swal(nameProduct, 'is added to wishlist !', 'success');

        $(this).addClass('js-addedwish-detail');
        $(this).off('click');
      });
    });

    /*---------------------------------------------*/

    $('.js-addcart-detail').each(function () {
      const nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
      $(this).on('click', function () {
        swal(nameProduct, 'is added to cart !', 'success');
      });
    });

    // $('.js-pscroll').each(function () {
    //   $(this).css('position', 'relative');
    //   $(this).css('overflow', 'hidden');
    //   const ps = new PerfectScrollbar(this, {
    //     wheelSpeed: 1,
    //     scrollingThreshold: 1000,
    //     wheelPropagation: false,
    //   });

    //   $(window).on('resize', function () {
    //     ps.update();
    //   });
    // });

  }
}
