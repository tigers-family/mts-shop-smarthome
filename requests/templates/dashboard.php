<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <title>Панель администратора</title>

    <style>
        html {
            font-size: 16px;
        }

        * {
            box-sizing: border-box;
        }

        @media screen and (max-width: 767px) {
            html {
                font-size: 14px;
            }
        }

        body {
            display: flex;

            width: 72rem;
            max-width: 100%;

            margin: 0 auto;
            padding: 1rem;

            font: 400 1rem/1.375 -apple-system, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;

            color: #333;
            background-color: #eee;
        }

        @media screen and (max-width: 1023px) {
            body {
                flex-flow: column wrap; 
                padding: 0;
            }
        }

        section {
            flex: 1 1 100%;

            margin: 0.5rem;
            padding: 1rem 1.5rem 1.5rem;

            background: #fff;
            border-radius: 0.375rem;
        }

        h2 {
            display: flex;
            align-items: center;

            margin: 0 0 1.25rem;

            font-size: 1.375rem;
            font-weight: 600;
        }

        h2 a {
            display: block;

            margin-top: 0.125rem;
            margin-left: 0.5rem;
            text-decoration: none;

            font-size: 0.625em;
            font-weight: 400;

            color: #777;
            border-bottom: solid 1px;

            transition: border 0.25s;
        }

        h2 a:hover {
            border-bottom-color: transparent;
        }

        h5 {
            display: grid;
            grid-template-columns: auto auto;
            gap: 0.5rem;

            width: 100%;
            max-width: 30rem;
            margin: 0;

            font-size: 1rem;
            font-weight: 400;
        }

        h5 span {
            display: block;
        }

        figure {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 0.5rem;

            width: 100%;
            margin: 0;

            font-size: 1rem;
            font-weight: 400;
        }

        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }

        td {
          padding: 5px;
        }

    </style>
</head>
<body>
    <section> 
        <h2>
            Список почт &rsaquo; <a href="?download=csv">Скачать CSV</a>
        </h2>

        <table>
            <tr>
              <th>Email</th>
            </tr>
            <?php foreach($emails as $data) : ?>
              <tr>
                    <td><?php echo htmlspecialchars($data->email); ?></td>
              </tr>
            <?php endforeach; ?>
        </table>
    </section>
</body>
</html>
