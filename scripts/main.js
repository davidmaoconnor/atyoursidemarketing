"use strict";$(document).ready(function(){$(".center").slick({centerMode:!0,centerPadding:"100px",slidesToShow:1,responsive:[{breakpoint:768,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:480,settings:{centerMode:!0,centerPadding:"40px",slidesToShow:1}}]})}),$(document).ready(function(){$(".single-item").slick()}),$("nav a#toggle").click(function(){$("ul").slideToggle(200,function(){})});