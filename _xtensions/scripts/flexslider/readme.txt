http://flex.madebymufffin.com/

Flexslider is a fully responsive jQuery slider plugin. It's supported in all major browsers, has custimizable animations, multiple slider support, Callback API, and more.

You can see demo to understand how it works. 

Include link to flexslider.css or copy its content into your skin.css file. Styles in flexslider.css are edited to work better with Simpliste.

Create your sliders in html file:

<div class="flexslider">
  <ul class="slides">
    <li>
      <img src="slide1.jpg" />
    </li>
    <li>
      <img src="slide2.jpg" />
    </li>
    <li>
      <img src="slide3.jpg" />
    </li>
  </ul>
</div>

Include links to scripts and call flexslider on your blocks with sliders:

<script type="text/javascript" charset="utf-8">
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
</script>

