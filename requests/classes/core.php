<?php
namespace Tigers\Feature\mts;

use PDO;
use Exception;

/**
 * Server class.
 */
class Core
{
    /**
     * SQLite storage instance.
     */
    private static $db = null;

    /**
     * Project root directory
     */
    protected static $root = __DIR__ . '/../';

    /**
     * Create SQLite instance.
     */
    protected static function connect_database() {
        if (!is_null(self::$db)) {
            return self::$db;
        }

        if (!is_writable(self::$root . '/data')) {
            self::print_error(500, 'Нет доступа на запись в базу данных');
        }

        if (!is_writable(self::$root . '/data/emails.db')) {
            self::print_error(500, 'Нет доступа на запись в базу данных');
        }

        try {
            self::$db = new PDO('sqlite:' . self::$root . '/data/emails.db');
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

            self::$db->query("CREATE TABLE IF NOT EXISTS emails (
                email TEXT(256), 
                created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)"
            );

        } catch (Exception $e) {
            self::print_error(500, 'Ошибка соединения с базой данных');
        }

        return self::$db;
    }

    /**
     * Print error message
     */
    protected static function print_error($code = 400, $message = null) {
        http_response_code($code);

        // Send json header
        header('Content-Type: application/json');

        if (is_null($message)) {
            $message = 'Неизвестная ошибка';
        }

        echo json_encode(array('message' => $message), JSON_UNESCAPED_UNICODE);
        exit;
    }

    /**
     * Print success message
     */
    protected static function print_success($code = 200, $message = null) {
        http_response_code($code);

        // Send json header
        header('Content-Type: application/json');

        echo json_encode(array('message' => $message), JSON_UNESCAPED_UNICODE);
        exit;
    }
}

