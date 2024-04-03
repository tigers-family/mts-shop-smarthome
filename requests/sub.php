<?php
namespace Tigers\Feature\mts;

use PDO;
use Exception;

require_once __DIR__ . '/classes/core.php';

/**
 * Server class.
 */
class Server extends Core
{
    /**
     * Class start point
     */
    public static function init() {
        $method = null;

        if (isset($_SERVER['REQUEST_METHOD'])) {
            $method = $_SERVER['REQUEST_METHOD'];
        }

        if ($method === 'POST') {
            return self::save_request();
        }

        self::print_error(404);
    }

    /**
     * Save sub data
     */
    private static function save_request() {
        $input = file_get_contents('php://input');

        try {
            $input = json_decode($input, false);

            if (isset($input->email)) {
                self::save_data($input->email);
            }

            self::print_error(400, 'Неверный формат данных');
        } catch (Exception $e) {
            self::print_error(500, 'Возникла непредвиденная ошибка');
        }
    }

    /**
     * Save data
     */
    private static function save_data($email) {
        try {
            $db = self::connect_database();

            $insert = $db->prepare('INSERT INTO emails (email) VALUES (?)');
            $insert->execute(array($email));
        } catch(Exception $e) {
            self::print_error(500, 'Ошибка записи в базу данных');
        }

        self::print_success(200, 'Контракт успешно сохранен');
    }
}

Server::init();
