<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class myController extends Controller
{
    //
    function getData (Request $req) {
        $data = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com'
        ];
        return response()->json($data);
    }
}
