<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;

class ClientesController extends Controller
{
    public function index()
    {
        return Clientes::all();
    }

    public function update(Request $request, Clientes $cliente)
    {
        $cliente->update($request->all());
 
        return response()->json($cliente, 200);
    }
}
