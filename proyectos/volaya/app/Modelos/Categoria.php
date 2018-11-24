<?php

namespace App\Modelos;  //esta clase pertenece en la aplicacion a la clase modelos, todos los modelos tienen este namespace
class Categoria implements \JsonSerializable{
    private $id;
    private $nombre;

    public function _construct($datos = null){
        if (is_array($datos)){
            if(isset($datos['id'])) $this->id = $datos['id'];
            $this->nombre = $datos['nombre'];

        }
    }

    public function jsonSerialize(){  //json solo recibe numeros o strings
        return [
            'id' => (int) $this->id,    //se hace casting para q sepa q id es numero
            'nombre' => $this->nombre
        ];

    }

    public function_get($propiedad){
        if(property_exists($this, $propiedad)){
            return $this -> $propiedad;
        }
    }

    public function_isset($propiedad){
        return isset($this->$propiedad);
    }


}