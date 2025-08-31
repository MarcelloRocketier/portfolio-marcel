<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';
    $to = "livetoast@web.de";
    $subject = "Neue Kontaktanfrage von $name";
    $emailText = "Name: $name\n";
    $emailText .= "E-Mail: $email\n";
    $emailText .= "Nachricht:\n$message\n";
    $headers = "From: kontaktformular@irving-webdev.de";
    if (mail($to, $subject, $emailText, $headers)) {
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['success' => false]);
    }
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>