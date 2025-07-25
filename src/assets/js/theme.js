(function($) {
    'use strict';

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show')
    });	
	    /*--
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
	
	/*---------------------
	Nivo Slider active js 
	--------------------- */
	$('#mainSlider_id2').nivoSlider({
		directionNav: true,
		animSpeed: 1000,
		slices: 18,
		pauseTime: 600000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="fas fa-long-arrow-alt-left nivo-prev-icon"></i>',
		nextText: '<i class="fas fa-long-arrow-alt-right nivo-next-icon"></i>'					
	});


				$('.event6_32').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				
					// Home-2
				
				$('.event6-active').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});

	/*---------------------
	witr_slick_active js 
	--------------------- */
		$('.witr_slick_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 300000,
			speed: 700,					
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});


		/*---------------------
		 HOME-2countdown
		--------------------- */
		$('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdowns days"><span class="time-counts">%-D</span> <p>Days</p></span> <span class="cdowns hour"><span class="time-counts">%-H</span> <p>Hour</p></span> <span class="cdowns minutes"><span class="time-counts">%M</span> <p>Min</p></span> <span class="cdowns second"> <span><span class="time-counts">%S</span> <p>Sec</p></span>'));
		  });
		});				
				
		

				/* Portfolio Isotope  */

				$('.em_load').imagesLoaded(function() {

					if ($.fn.isotope) {

						var $portfolio = $('.em_load');

						$portfolio.isotope({

							itemSelector: '.grid-item',

							filter: '*',

							resizesContainer: true,

							layoutMode: 'masonry',

							transitionDuration: '0.8s'

						});


						$('.filter_menu li').on('click', function() {

							$('.filter_menu li').removeClass('current_menu_item');

							$(this).addClass('current_menu_item');

							var selector = $(this).attr('data-filter');

							$portfolio.isotope({

								filter: selector,

							});

						});

					};

				});

				/*--------------------------
					portfolio gallery post
				---------------------------- */
				$('.portfolio_gallery_post').owlCarousel({
					nav: true,
					dots: false,
					navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
					responsive: {
						0: {
							items: 1
						},
						768: {
							items: 1
						},
						992: {
							items: 1
						},
						1920: {
							items: 1
						}
					}
				})			
				
				
	// Single_blog_testimonial_active Not Change Style
	$('.Single_blog_testimonial_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,					
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});	
	
		// TESTIMONIAL robotil
		$('.testomonial_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,					
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});

		// BLOG robotil
		$('.robotil_blog_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,					
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows:true,
			dots:true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		
		
		
	
		// TESTIMONIAL robotil_testomonial_page
		$('.robotil_testomonial_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 300000,
			speed: 700,					
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows:false,
			dots:true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
			
		

		
	/*====== Screenshots Slide Slick =======*/
	$('.imagess_active').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 700,					
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '0',					
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
				]
			});

	
	
		


			/*====== Screenshots Slide Slick =======*/
			$('.images_id1').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 700,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '0',					
				arrows: false,
				dots: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
				]
			});


							$('.witr_testiSlider').slick({
								slidesToShow: 1,
								slidesToScroll: 1,
								arrows: false,
								fade: true,
								asNavFor: '.wirt_TraSlider',
								autoplay: true,
							});

							$('.wirt_TraSlider').slick({
								slidesToShow: 1,
								slidesToScroll: 1,
								asNavFor: '.witr_testiSlider',
								arrows: true,
								dots: false,
								autoplaySpeed: 2000,
								speed: 700,								
								centerMode: true,
								centerPadding: '0',
								focusOnSelect: true,
								responsive: [
									{
										breakpoint: 1200,
										settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
										}
									},
									{
										breakpoint: 992,
										settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
										}
									},
									{
										breakpoint: 767,
										settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
										}
									}
								]								
							});
	
					
					
									
				

		

			/*====== Brand Slide Slick =======*/
			$('.brand_imagess_active').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 700,					
				slidesToShow: 5,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
				]
			});

		





						//====== Single portfolio Slide Slick
						$('.single_portfolio_previwe').slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: true,
							dots: false,
							asNavFor: '.single_portfolio_text'
						});
						$('.single_portfolio_text').slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: false,
							arrows: true,
							asNavFor: '.single_portfolio_previwe',
							prevArrow: '<button type="button" class="slick-prev"> PREVIOUS PROJECT</button>',
							nextArrow: '<button type="button" class="slick-next">NEXT PROJECT</button>',

						});

		




	
	
	/*====== foter section =======*/
	
	
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
	
	var witr_cp = $('.witr_circle_id1');

			  witr_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.9,
				size: 150,
				lineCap: 'square',
				fill: {  gradient: ["#182C44", "#043897"]}
			  });
	
	

    // top quearys menu 
    var emsmenu = $(".em-quearys-menu i.t-quearys");
    var emscmenu = $(".em-quearys-menu i.t-close");
    var emsinner = $(".em-quearys-inner");
    emsmenu.on('click', function() {
        emsinner.addClass('em-s-open');
        $(this).addClass('em-s-hiddens');
        emscmenu.removeClass('em-s-hidden');
    });
    emscmenu.on('click', function() {
        emsinner.removeClass('em-s-open');
        $(this).addClass('em-s-hidden');
        emsmenu.removeClass('em-s-hidden');
    });




	if ($('.headrooma').length != 0) {
        // grab an element
        var myElement = document.querySelector(".headrooma");
        // construct an instance of Headroom, passing the element
        var headroom = new Headroom(myElement);
        // initialise
        headroom.init();
    }
	
    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
	
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
		
	    /*--
    	One Page Nav
    ----------------------------------- */
     var top_offset = $('.one_page').height() +0;
    $('.one_page .robotil_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
         scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

    $(".nav_scroll > li:first-child").addClass("current");
    /* sticky nav 1 */
    $('.one_page').scrollToFixed({
        preFixed: function() {
            $(this).find('.scroll_fixed').addClass('prefix');
        },
        postFixed: function() {
            $(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
        }
    });	
		
	/* sticky nav 2 */
    var headers1 = $('.trp_nav_area');
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 200) {
            headers1.addClass('hbg2');
        } else {
            headers1.removeClass('hbg2');
        }		

    });		
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});	

    /*--------------------------
    	blog messonary
    ---------------------------- */
    $('.bgimgload').imagesLoaded(function() {
        if ($.fn.isotope) {
            var $blogmassonary = $('.blog-messonary');
            $blogmassonary.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });

        };
    });

  
	
	// Mouse Direction Hover Iffect
	$('.single_protfolio').directionalHover();

	$('.single_protfolio').directionalHover({
		// CSS class for the overlay
		overlay: "em_port_content",
		// Linear or swing
		easing: "swing",
		speed: 50
	});	
		
	/* Bootstrap Accordion  */
	$('.faq-part .card').each(function () {
		var $this = $(this);
		$this.on('click', function (e) {
			var has = $this.hasClass('active');
			$('.faq-part .card').removeClass('active show');
			if (has) {
				$this.removeClass('active show');
			} else {
				$this.addClass('active show');
			}
		});
	});


		
  $.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
      new BeerSlider(this, options);
    });
  };
  $('.beer-slider').BeerSlider({start: 50});		


	$('.blogcar_idblog1').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 700,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});


			  var witr_cp = $('.witr_circle');

			  witr_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.75,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#ff0000", "#FE0040"]}
			  });
	
	
	
			$('.witr_cslide_idp22').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 3,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 2,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});

	
	
	
	
	$('.witr_cslide_idps').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 3,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});
					
					// single-service-2
					$('.witr_cslide_idps21').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 3,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 2,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});
					
					
			// Home-2
				$('.witr_cslide_idps2').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 1.5,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 3,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});
	
	
		
				$('.blog8_idblog1').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 300000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow:2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				
				$('.blog8_idblog12').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 300000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow:1,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});

	
			$('.witr_cslide_active').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: false,
						dots: true,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 4,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 4,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 4,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});
	
				
				
				$('.blog9_idblog1').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				
				
				
				
				// TESTIMONIAL robotil
		$('.footer_testi_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,					
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			dots: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		
		
		
		
		$('.post_team_idteam').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: true,
						centerMode: false,
						centerPadding: '',
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								}
						}
						]
					});

					
					
					
					
					
					// TESTIMONIAL robotil_testomonial_page
		$('.robotil_testomonial2_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,					
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows:true,
			dots:false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
			
			$('.witr_single_active').slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,					
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 4,
								}
						},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 4,
								}
						},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 4,
								}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});		
					

})(jQuery);


