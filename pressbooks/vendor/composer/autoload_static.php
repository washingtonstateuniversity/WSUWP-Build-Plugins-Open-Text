<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfaba5ab25f8d951e7d55e969cad1dead
{
    public static $files = array (
        '52aedd6bde5708f06004dbaa477f23bd' => __DIR__ . '/..' . '/perchten/rmrdir/src/rmrdir.php',
        '0ac03ff008dc2941bc6326a91306855f' => __DIR__ . '/..' . '/pressbooks/pb-api/pb-api.php',
    );

    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Leafo\\ScssPhp\\' => 14,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Leafo\\ScssPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/leafo/scssphp/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'PrinceXMLPhp' => 
            array (
                0 => __DIR__ . '/..' . '/gridonic/princexml-php/src',
            ),
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfaba5ab25f8d951e7d55e969cad1dead::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfaba5ab25f8d951e7d55e969cad1dead::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitfaba5ab25f8d951e7d55e969cad1dead::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
