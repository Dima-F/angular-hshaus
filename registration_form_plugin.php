<?php
/*
* Plugin Name: Registration Form ShortCode
* Description: Registration Form ShortCode
* Version: 1.0
* Author: Dima-F
*/

function main_function(){
    echo '
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://cdn.rawgit.com/indrimuska/angular-moment-picker/master/dist/angular-moment-picker.min.css" rel="stylesheet">
    
    <div class="app-body" ng-app="hshaus">
        <div class="container" ng-controller="MainController as main">
            <ng-view></ng-view>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment-with-locales.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    ';
}
//wordpress hooks
add_shortcode('registration_form_shortcode', 'registration_form_shortcode_func');

// The callback function that will replace [book]
function registration_form_shortcode_func() {
    ob_start();
    main_function();
    return ob_get_clean();
}
add_action( 'admin_init', 'registration_scripts');
add_action( 'wp_enqueue_scripts', 'registration_scripts' );

function registration_scripts()
{
    wp_enqueue_script('app_bundle', plugins_url('/app.bundle.js', __FILE__));
}
?>