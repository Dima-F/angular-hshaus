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
    
    <div class="app-body" ng-app="hshaus">
        <div class="container" ng-controller="MainController as main">
            <div class="row">
                <form class="needs-validation" name="mainForm" novalidate>
                    <services services="main.services"></services>
                    <person who="main.applicant"></person>
                    <company company="main.company"></company>
                    <structure structure="main.structure"></structure>
                    <question question="main.question"></question>
                    <p class="text-danger" ng-show="mainForm.$invalid">To enable submit button, please enter all required fields (with *) and check email and date fields validation!</p>
                    <button class="btn btn-secondary btn-lg" type="submit" ng-disabled="mainForm.$invalid" ng-click="main.toggleModal()">Submit</button>
                </form>
            </div>
            <modal modal="main.modal" services="main.services" applicant="main.applicant" company="main.company" structure="main.structure" question="main.question"></modal>
        </div>
    </div>
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