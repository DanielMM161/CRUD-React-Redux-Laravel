<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            // $table->string('DNI')->nullable()->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->text('telefono');
            $table->text('direccion');
            $table->text('email')->unique();
            $table->dateTime('fechaAlta');
            $table->dateTime('fechaBaja')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}
