<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'texsite');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}CqjY0tqlUkO*CD!:@OJEKV?XI69JRrDsEI, IIW_I>YbpxaM$-J%R@$QWesJIA4');
define('SECURE_AUTH_KEY',  '/[HiafYrmZR>dS4/l+:#fs-2]E8k]H`<|QXMJ!MLq)B*@,i~f*?Yy,Lk67%?)L$T');
define('LOGGED_IN_KEY',    'YC6FWbk=#|kI>gnT8N`OG?D;D9f4< XaU/&iZ~}*VS+?T8N:FxUFgm%8^,n:E1-r');
define('NONCE_KEY',        'Jp4H.c0n$SKGt$t!zVs)dS+6P{_M| a#Mj;kk%]5og5ozT+~,85&#19&I[?-v<l6');
define('AUTH_SALT',        'H|W9a5XOG<=|0aIQg3cnsb[`9-?!Gu#>#c g&CLbK:$$.~q11m`1^J`40lSHMXL,');
define('SECURE_AUTH_SALT', 'AJ-d:Tfw6.=+%6@bA%#2b`N:$IBm*STxvE)A$B-~jtzt e-bkXYw7|FvDUf(=m e');
define('LOGGED_IN_SALT',   'Wp}G+#|]-U~zP03l>j/ )SsfpPI&Nc^g%Z+nz`pt($z!P~F6Ics{NB/V5S[fM9I8');
define('NONCE_SALT',       'ku?X&b<JDS8v/{3Q27nu0;Q A2MgJP4>&h{FCB3wW;~FM:F3ya[z4K..#8Wq5FVV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
