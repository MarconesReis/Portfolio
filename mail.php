<?php

//Load Composer's autoloader
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// require_once();
if ($_POST) {
    if (empty($_POST['last-name'])) {
        $errorLastName = '<p class="error">Merci de saisir votre nom</p>';
        $error = true;
    }

    if (empty($_POST['first-name'])) {
        $errorFirstName = '<p class="error">Merci de saisir votre prénom</p>';
        $error = true;
    }

    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errorEmail = '<p class="error">Format email invalide</p>';
        $error = true;
    }

    if (empty($_POST['subject'])) {
        $errorObjet = '<p class="error">Merci de saisir votre objet</p>';
        $error = true;
    }

    if (empty($_POST['message'])) {
        $errorMessage = '<p class="error">Merci de saisir votre message</p>';
        $error = true;
    }

    if(!isset($error)){
        $messagValidation = '<p class="msgSend">Merci ! <br> <br> Votre message a bien été envoyé et je reviendrai vers vous dans les plus brefs délais.</p>';

    $name = $_POST['first-name'] . ' ' .  $_POST['last-name'];
    $message = $_POST['subject'] . ' : <br><br>' . $_POST['message'];
        

        // envoi mail<?php
        //Import PHPMailer classes into the global namespace
        //These must be at the top of your script, not inside a function
       

        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'contact@marconesportfolio.com';                     //SMTP username
            $mail->Password   = 'Portfolio24@';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('contact@marconesportfolio.com', 'Contact portfolio');
            $mail->addAddress('contact@marconesportfolio.com', $_POST['first-name'] . ' ' .  $_POST['last-name']);     //Add a recipient
            // $mail->addAddress('ellen@example.com');               //Name is optional
            $mail->addReplyTo($_POST["email"], 'Information');
            // $mail->addCC('cc@example.com');
            // $mail->addBCC('bcc@example.com');

            //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $_POST['subject'];
            $mail->Body    = $message;
            $mail->CharSet = "UTF-8";
            // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            
        } catch (Exception $e) {
            
        }
    }
}
?>
