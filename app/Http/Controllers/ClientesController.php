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

    public function store(Request $request)
    {
        $now = new \DateTime();
        $client =  Clientes::create([
            'name' => $request->name,
            'lastName' => $request->lastName,
            'phone' => $request->phone,
            'email' => $request->email,
            'address' => $request->address,
            'register' => $now,
            'dropOut' => null
        ]);
        return response()->json($client, 201);
    }
}
