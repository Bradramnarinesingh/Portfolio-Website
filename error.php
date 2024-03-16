<?php

$page_redirected_from = $_SERVER['REQUEST_URI'];
$server_url = "https://brad1.dev"; // Your website URL
$redirect_url = $_SERVER["REDIRECT_URL"];
$redirect_url_array = parse_url($redirect_url);
$end_of_path = strrchr($redirect_url_array["path"], "/");

switch(getenv("REDIRECT_STATUS")) {
    case 400:
        $error_code = "400 - Bad Request";
        $explanation = "The syntax of the URL submitted by your browser could not be understood. Please verify the address and try again.";
        $redirect_to = "";
        break;

    case 401:
        $error_code = "401 - Unauthorized";
        $explanation = "This section requires a password or is otherwise protected. If you feel you have reached this page in error, please return to the login page and try again, or contact the webmaster if you continue to have problems.";
        $redirect_to = "";
        break;

    case 403:
        $error_code = "403 - Forbidden";
        $explanation = "This section requires a password or is otherwise protected. If you feel you have reached this page in error, please return to the login page and try again, or contact the webmaster if you continue to have problems.";
        $redirect_to = "";
        break;

    case 404:
        $error_code = "404 - Not Found";
        $explanation = "The page you're looking for does not exist";
        $redirect_to = $server_url . $end_of_path;
        break;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />
<script src="https://kit.fontawesome.com/fc2ecdd57a.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css" />
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css" />
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css" />
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css" />
  <title>Error: <?php print($error_code); ?></title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f0f0f0;
      text-align: center;
      color: #333;
    }
    h1 {
      font-size: 5em;
      font-weight: bold;
      margin-top: 50px;
      font-family: "Libre Franklin", sans-serif;
    }
    p {
      font-size: 1.5em;
      font-family: "Libre Franklin", sans-serif;
    }
    a {
      color: #0066CC;
      text-decoration: none;
      font-family: "Libre Franklin", sans-serif;
    }
    a:hover {
      text-decoration: underline;
    }
    hr {
      margin-top: 2em;
      border: none;
      height: 1px;
      background-color: #ccc;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 3em;
      }
      p {
        font-size: 1em;
      }
    }
  </style>
</head>
<body>

<i class="fa-solid fa-face-confused" aria-hidden="true" style="
    margin-top: 50px;
    font-size: 100px;
"></i>
<h1><?php print($error_code); ?></h1>
<hr />
<p><?php echo($explanation); ?></p>
<hr />
<p><i><a href="<?php print($server_url); ?>">Go back</a></i></p>
<hr />
</body>
</html>

