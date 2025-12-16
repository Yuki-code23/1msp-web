<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (
        !empty($data->name) &&
        !empty($data->email) &&
        !empty($data->message)
    ) {
        $to = "info@nmdlab.jp"; // Temporary email as per plan
        $subject = "【1msp-web】お問い合わせがありました";
        $body = "お名前: " . $data->name . "\n";
        $body .= "メールアドレス: " . $data->email . "\n\n";
        $body .= "お問い合わせ内容:\n" . $data->message . "\n";

        $headers = "From: webmaster@1msp.co.jp"; // Sender address, adjust as needed

        if (mb_send_mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Email sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Failed to send email."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Incomplete data."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>
