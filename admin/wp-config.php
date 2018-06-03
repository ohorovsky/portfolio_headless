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
define('DB_NAME', 'wordpress-33311af3');

/** MySQL database username */
// define('DB_USER', 'wordpress-33311af3');
define('DB_USER', 'root');

/** MySQL database password */
// define('DB_PASSWORD', '02dfb8cd9625');
define('DB_PASSWORD', 'root');

/** MySQL hostname */
// define('DB_HOST', 'shareddb-h.hosting.stackcp.net');
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

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
define('AUTH_KEY',         'dJDZGdTACCRqrgkY5IqV0OZhaX3Sdfzf');
define('SECURE_AUTH_KEY',  'y9prMBE1beBMbTyuwNTtNRUOwvbpNvDl');
define('LOGGED_IN_KEY',    '2Jkuo33l7Bbtt+sZ663P6wTBL2nJ5KFI');
define('NONCE_KEY',        'dYzdaVQgP+uEHy46Mrh1gQfixZpjeQSS');
define('AUTH_SALT',        'LoHMI3q6OTXWOR0X7U2XrMm/jFzaXo9y');
define('SECURE_AUTH_SALT', 'a39xeQS6YLLt4FTYwhz2u3790jpnn0+z');
define('LOGGED_IN_SALT',   'CqYJqmFu7vTfh2rx1s/LRatjV5NQTvzs');
define('NONCE_SALT',       'bDuHOUrSzAxg10iK+sArUoZuxZZptEkB');
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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
