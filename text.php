<?php
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'AC5484a8342d8f96d8a045ad2de93f1c22';
$auth_token = 'e42b5be7b94cd50d214020fcb72eb3f2';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_ACCOUNT_SID"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+19188946280";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+1' .$phone,
    array(
        'from' => $twilio_number,
        'body' => $surveyURL
    )
);
