<?php 

$file = './database.txt';

$content = file_get_contents($file);

if ($content === false) {
    echo "Erro ao ler o arquivo.";
    exit;
}

$content = trim($content);

$pattern = '/{([^}]+)}/';
preg_match_all($pattern, $content, $matches);

$dados = [];

if (!empty($matches[1])) {
    foreach ($matches[1] as $item) {
        $properties = explode(',', $item);

        $data = [];

        foreach ($properties as $property) {
            list($key, $value) = explode(':', $property);

            $key = trim($key);
            $value = trim($value, " '");

            $data[$key] = $value;
        }

        $dados[] = $data;
    }
}

echo '<table border="1">';
echo '<tr><th>Name</th><th>Theme</th><th>Clicks</th><th>Time</th></tr>';

foreach ($dados as $row) {
    echo '<tr>';
    echo '<td>' . htmlspecialchars($row['name']) . '</td>';
    echo '<td>' . htmlspecialchars($row['theme']) . '</td>';
    echo '<td>' . htmlspecialchars($row['clicks']) . '</td>';
    echo '<td>' . htmlspecialchars($row['time']) . '</td>';
    echo '</tr>';
}

echo '</table>';