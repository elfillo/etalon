<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Эталон</title>
    <?php wp_head(); ?>
</head>
<body>
<header class="header">
    <div class="header--top">
        <a href="/" class="logo"><img src="<?php echo get_template_directory_uri() ?>/img/logo.png" alt="logo"></a>
        <div class="search">
            <input type="text" placeholder="Я ищу...">
        </div>
        <div class="contacts">
            <a href="mailto:etalon_irk@mail.ru" class="mail">
                <span class="icon"><img src="<?php echo get_template_directory_uri() ?>/img/icons/mail.png" alt="mail"></span>
                <span>etalon_irk@mail.ru</span>
            </a>
            <a href="tel:+73952707131" class="phone">
                <span class="icon"><img src="<?php echo get_template_directory_uri() ?>/img/icons/phone.png" alt="phone"></span>
                <span>+7 (3952) 707-131</span>
            </a>
        </div>
    </div>
    <div class="header--bottom">
        <nav class="header_menu">
            <?php wp_nav_menu(array('theme_location'=>'Header', 'menu_class'=>'header_menu--list') );?>
        </nav>
    </div>
</header>

