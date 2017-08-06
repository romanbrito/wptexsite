<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'texsite'); ?></a>

    <header id="masthead" class="site-header">
        <nav id="site-navigation" class="navbar">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#main-nav"><?php esc_html_e('Primary Menu', 'texsite'); ?></button>
                <?php
                the_custom_logo();
                if (is_front_page() && is_home()) : ?>
                    <h1 class="navbar-brand"><a href="<?php echo esc_url(home_url('/')); ?>"
                                                rel="home"><?php bloginfo('name'); ?></a></h1>
                <?php else : ?>
                    <p class="navbar-brand"><a href="<?php echo esc_url(home_url('/')); ?>"
                                               rel="home"><?php bloginfo('name'); ?></a></p>
                    <?php
                endif;

                $description = get_bloginfo('description', 'display');
                if ($description || is_customize_preview()) : ?>
                    <p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
                    <?php
                endif; ?>
            </div><!-- .site-branding -->

            <?php
            wp_nav_menu(array(
                'theme_location' => 'menu-1',
                'menu_id' => 'primary-menu',
                // bootstrap class
                'menu_class' => 'nav navbar-nav navbar-right',
                'container_class' => 'collapse navbar-collapse',
                'container_id' => 'main-nav',
            ));
            ?>
        </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

    <div id="content" class="site-content">
