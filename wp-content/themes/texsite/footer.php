<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">

        <nav id="footer-navegation" class="navbar">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer',
                'menu_id' => 'footer-menu',
                // bootstrap classes
                  // div
                'container_class' => 'collapse navbar-collapse',
                'container_id' => 'footer-nav',
                  // <ul> class
                'menu_class' => 'nav navbar-nav navbar-right',
            ));
            ?>
        </nav>


		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'texsite' ) ); ?>"><?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'texsite' ), 'WordPress' );
			?></a>
			<span class="sep"> | </span>
			<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'texsite' ), 'texsite', '<a href="http://romanbrito.pro">roman</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
