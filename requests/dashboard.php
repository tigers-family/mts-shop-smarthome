<?php
namespace Tigers\Feature\mts;

use Exception;

require_once __DIR__ . '/classes/core.php';

/**
 * Server class.
 */
class Dashboard extends Core
{
    private static function get_emails() {
        $db = parent::connect_database();

        $select = $db->query('SELECT * FROM emails');
        $users = $select->fetchAll();

        return $users;
    }

    private static function download_data() {
        $emails = self::get_emails();

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename=data.csv');
        header('Cache-Control: no-cache, no-store, must-revalidate');
        header('Pragma: no-cache');
        header('Expires: 0');

        $output = fopen('php://output', 'a');

        foreach ($emails as $data) {
            fputcsv($output, array($data->email));
        }

        fclose($output); 
    }

    public static function init() {
        if (isset($_GET['download']) && $_GET['download'] === 'csv') {
            return self::download_data();
        }

        $emails = self::get_emails();

        include __DIR__ . '/templates/dashboard.php';
    }
}

Dashboard::init();
