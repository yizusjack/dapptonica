<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function signup(Request $request) {
        return response([
            'message' => 'Las credenciales no coinciden',
        ]);
    }
}
